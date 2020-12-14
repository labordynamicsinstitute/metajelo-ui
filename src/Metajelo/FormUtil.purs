module Metajelo.FormUtil where

import Concur.Core (Widget)
import Concur.Core.ElementBuilder (Element)
import Concur.Core.FRP (Signal, debounce, display, fireOnce, justWait, loopS, loopW, oneShot, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Alternative (empty)
import Control.Applicative (class Applicative)
import Control.Apply (class Apply, apply)
import Control.Extend (class Extend)
import Data.Array (catMaybes, filter, length, replicate, (:), (..))
import Data.Array.NonEmpty (NonEmptyArray, fromArray, toArray)
import Data.Bifunctor (lmap)
import Data.Bounded (bottom)
import Data.Eq ((==))
import Data.Date (canonicalDate)
import Data.DateTime (DateTime(..))
import Data.Either (Either(..), hush)
import Data.Enum (class BoundedEnum, class Enum, class SmallBounded, upFromIncluding, toEnum)
import Data.Foldable (class Foldable, fold)
import Data.Functor (class Functor)
import Data.Generic.Rep (class Generic)
import Data.Generic.Rep.Bounded as GBounded
import Data.Generic.Rep.Enum as GEnum
import Data.Generic.Rep.Eq (genericEq)
import Data.Generic.Rep.Ord as GOrd
import Data.Generic.Rep.Show (genericShow)
import Data.Int (round)
import Data.Maybe (Maybe(..), fromJust, fromMaybe, isJust, maybe)
import Data.Monoid (class Monoid, mempty)
import Data.Natural (Natural, intToNat, natToInt)
import Data.Newtype (class Newtype)
import Data.Profunctor.Strong (second)
import Data.String (trim)
import Data.String.NonEmpty (NonEmptyString, fromString, toString)
import Data.Symbol (class IsSymbol, SProxy)
import Data.Time (Time(..))
import Data.Traversable (for_, traverse)
import Data.Tuple (Tuple(..), fst, snd)
import Data.Unit (Unit)
import Data.Variant (Variant)
import Effect (Effect)
import Effect.Class (liftEffect)
import Effect.Class.Console (logShow, log)
import Effect.Exception as EX
import Effect.Now (nowDateTime)
import Effect.Unsafe (unsafePerformEffect)
import Global (readInt)
import Metajelo.Types as M
import Metajelo.XPaths.Read as MR
import Metajelo.XPaths.Write as MW
import Partial.Unsafe (unsafePartial)
import Prelude (class Bounded, class Eq, class Ord, class Show, Void, bind, discard, join, map, max, not, pure, show, ($), (+), (-), (<), (<#>), (<$), ($>), (<$>), (>>=), (<<<), (>>>), (<>))
import Prim.Row (class Cons)
import Prim.RowList (class RowToList)
import Prim.TypeError (QuoteLabel, class Warn)
import React.SyntheticEvent (SyntheticMouseEvent, SyntheticInputEvent, target)
import Text.Email.Validate as EA
import Text.URL.Validate (URL, parsePublicURL, urlToNEString)
import Unsafe.Coerce (unsafeCoerce)
import Web.DOM (Node)
import Web.DOM.Document (Document, toNonElementParentNode)
import Web.DOM.Element as Ele
import Web.DOM.HTMLCollection as HTML
import Web.HTML.HTMLDocument as HTML
import Web.HTML.HTMLInputElement as HTML
import Web.DOM.NonElementParentNode (getElementById)
import Web.DOM.ParentNode (children)
import Web.HTML (window)
import Web.HTML.Window (document)

type Email = EA.EmailAddress

mayToString :: ∀ a. Show a => Maybe a -> String
mayToString mayA = fold $ show <$> mayA

foldf :: ∀ a f m. Foldable f => Functor f => Monoid m =>
  (a -> m) -> f a -> m
foldf f vals = fold $ f <$> vals

emptyMeansOptional :: ∀ a. Show a => Maybe a -> String
emptyMeansOptional mayV = case mayV of
  Nothing -> "(None)"
  x -> mayToString x

-- | A non-formless incantation of menu
menuSignal :: ∀ opt. BoundedEnum opt => IsOption opt =>
  CtrlSignal HTML (Maybe opt)
menuSignal currentOptMay = step currentOptMay do
  let ranOnce = if (isJust currentOptMay) then true else false
  newOpt <- D.select [
    P.value $ maybe "" toOptionValue currentOptMay
  , (fromOptionValue <<< P.unsafeTargetValue) <$> P.onChange
  ] (
      (D.option [P.disabled ranOnce] [D.text "Select ..."]) :
      (upFromIncluding (bottom :: opt) <#> \opt ->
        D.option [P.value (toOptionValue opt)] [D.text (toOptionLabel opt)])
    )
  pure $ menuSignal $ Just newOpt


type CtrlSignal v a = a -> Signal v a

-- | Prepend a label heading to a siginal
labelSig' :: ∀ a. D.El'
  -> String
  -> Array (P.ReactProps a)
  -> Signal HTML a
  -> Signal HTML a
labelSig' tag label props sigIn = labelSig (tag [D.text label]) props sigIn

labelSig :: ∀ a. (∀ b. Widget HTML b)
  -> Array (P.ReactProps a)
  -> Signal HTML a
  -> Signal HTML a
labelSig widg props sigIn = D.div_ props do
  display widg
  sigIn


type RefreshString = {ref :: Boolean, str:: String}

textInputWidget :: RefreshString -> Widget HTML RefreshString
textInputWidget rs = do
  log $ "textInputWidget: " <> (show rs.ref) <> " " <> rs.str
  txtNew <- D.input [valProp rs.str, P.unsafeTargetValue <$> P.onChange]
  pure {ref: rs.ref, str: txtNew}
  where
    valProp = if rs.ref then P.value else P.defaultValue

textInput' :: Boolean -> CtrlSignal HTML String
textInput' refresh initVal = do
  refstrNew <- sig refstr
  pure refstrNew.str
  where
    refstr = {ref: refresh, str: initVal}
    -- Alternative to 'sig' that doesn't debounce, for debugging:
    -- sigNow rs = step rs $ do
    --   pure $ unsafePerformEffect $ log $ "refstr in textInput sigNow': " <> (show rs)
    --   rsNew <- textInputWidget rs
    --   pure $ sigNow rsNew
    sig rs = do
      pure $ unsafePerformEffect $ log $ "refstr in textInput sig': " <> (show rs)
      debounce 500.0 rs textInputWidget

-- | Reasonable defaults for filtering input text
textFilter :: Signal HTML String -> Signal HTML (Maybe NonEmptyString)
textFilter txtSig = do
  txt <- txtSig
  pure $ fromString $ trim txt

textInput :: Boolean -> CtrlSignal HTML (Maybe NonEmptyString)
textInput refresh iVal = do
  pure $ unsafePerformEffect $ log $ "refresh in textInput: " <> (show refresh)
  textFilter $ textInput' refresh (foldf toString iVal)

mjUI_dateInput :: String
mjUI_dateInput = "mjUI_dateInput"

dateInput :: Boolean -> CtrlSignal HTML (Either String M.XsdDate)
dateInput refresh iVal = do
  -- iValNesEi <- runEffectInit (runErr iVal) $ dateToNesEi iVal
  let iValNesEi = unsafePerformEffect $ dateToNesEi iVal -- FIXME: remove
  prevTxt :: String <- pure $ case iValNesEi of
    Left _ -> ""
    Right dtStr -> toString dtStr
  prevErr <- pure $ case iValNesEi of
    Left err -> err
    Right _ -> ""
  pure $ unsafePerformEffect $ log $ "refresh in dateInput: " <> (show refresh)
  pure $ unsafePerformEffect $ log $ "date retrieved in dateInput: " <> (show iVal)
  pure $ unsafePerformEffect $ log $ "txt retrieved in dateInput: " <> prevTxt
  txtMay :: Maybe NonEmptyString <- D.div_ [P._id mjUI_dateInput]
    $ textInput refresh (fromString prevTxt) -- assumes this id is unique ... (hack) :
  pure $ unsafePerformEffect $ setChildInputByTag mjUI_dateInput "INPUT" prevTxt
  display $ case iValNesEi of
    Right _ -> mempty
    Left err -> errorDisplay $ Just err
  case txtMay of
    Just txtNE -> -- runEffectInit (runErr txtNE) $ (lmap show) <$> (EX.try $ MR.parseDate txtNE)
      pure $ unsafePerformEffect $ (lmap show) <$> (EX.try $ MR.parseDate txtNE) -- FIXME: remove
    Nothing -> pure $ Left "no date input"
  where
    dateToNesEi :: Either String DateTime -> Effect (Either String NonEmptyString)
    dateToNesEi dtEi = do
      let dt = fromMaybe bottom $ hush dtEi
      nesEi <- EX.try $ MW.dateTimeToStr dt
      pure $ (lmap show) nesEi
    runErr :: forall a b. Show a => a -> Either String b
    runErr ei = Left $ "Run time date parsing error on " <> (show ei)

natInput :: Boolean -> CtrlSignal HTML (Maybe Natural)
natInput refresh iVal = do
  let iValNES = iVal <#> (natToInt >>> show) >>= fromString
  txtMay :: Maybe NonEmptyString <- textInput refresh iValNES
  pure $ (intToNat <<< round <<< readInt 10 <<< toString) <$> txtMay

urlInput :: Boolean -> CtrlSignal HTML (Either String URL)
urlInput refresh iVal = do
  txtMay :: Maybe NonEmptyString <- textInput refresh (fromString prevTxt)
  urlEi <- pure $ case txtMay of
    Nothing -> Left prevErr
    Just txt -> parsePublicURL $ toString txt
  display $ case urlEi of
    Right _ -> mempty
    Left err -> errorDisplay $ Just err
  pure urlEi
  where
    prevErr :: String
    prevErr = case iVal of
      Left err -> err
      Right _ -> ""
    prevTxt :: String
    prevTxt = case iVal of
      Left _ -> ""
      Right url -> toString $ urlToNEString url

emailInput :: Boolean -> CtrlSignal HTML (Either String Email)
emailInput refresh iVal = do
  txtMay :: Maybe NonEmptyString <- textInput refresh (fromString prevTxt)
  emailEi <- pure $ case txtMay of
    Nothing -> Left prevErr
    Just txt -> EA.validate $ toString txt
  display $ case emailEi of
    Right _ -> mempty
    Left err -> errorDisplay $ Just err
  pure emailEi
  where
    prevErr :: String
    prevErr = case iVal of
      Left err -> err
      Right _ -> ""
    prevTxt :: String
    prevTxt = case iVal of
      Left _ -> ""
      Right ea -> EA.toString ea

checkBoxS :: Boolean -> Signal HTML Boolean
checkBoxS b = step b do
  newB <- checkW
  pure $ checkBoxS newB
  where checkW = checkBoxW b

checkBoxW :: Boolean -> Widget HTML Boolean
checkBoxW b = not b <$ D.input [P._type "checkbox", P.checked b, P.onChange]

class IsOption a where
  toOptionValue :: a -> String
  toOptionLabel :: a -> String
  fromOptionValue :: String -> a

instance isOptionMaybeBoolean
  :: IsOption (Maybe Boolean) where
    toOptionValue = mayToString
    toOptionLabel = emptyMeansOptional
    fromOptionValue = hush <<< MR.readBoolean

instance isOptionIdentifierType
  :: IsOption M.IdentifierType where
    toOptionValue = show
    toOptionLabel = show
    fromOptionValue x = unsafePartial $ fromJust $ hush $ MR.readIdentifierType x

instance isOptionInstitutionType
  :: IsOption M.InstitutionType where
    toOptionValue = show
    toOptionLabel = show
    fromOptionValue x = unsafePartial $ fromJust $ hush $ MR.readInstitutionType x

instance isOptionMaybeInstitutionContactType
  :: IsOption (Maybe M.InstitutionContactType) where
    toOptionValue = mayToString
    toOptionLabel = emptyMeansOptional
    fromOptionValue = join <<< hush <<< MR.readInstitutionContactType

instance isOptionMaybePolicyType
  :: IsOption (Maybe M.PolicyType) where
    toOptionValue = mayToString
    toOptionLabel = emptyMeansOptional
    fromOptionValue = join <<< hush <<< MR.readPolicyType

instance isOptionRelationType
  :: IsOption M.RelationType where
    toOptionValue = show
    toOptionLabel = show
    fromOptionValue x = unsafePartial $ fromJust $ hush $ MR.readRelationType x

instance isOptionResourceTypeGeneral
  :: IsOption M.ResourceTypeGeneral where
    toOptionValue = show
    toOptionLabel = show
    fromOptionValue x = unsafePartial $ fromJust $ hush $
      MR.readResourceTypeGeneral x

-- | 0-arg constructors for M.Policy and can be used for dropdown or radio box.
data PolPolType
  = FreeTextPolicy
  | RefPolicy
derive instance genericPolPolType :: Generic PolPolType _
instance showPolPolType :: Show PolPolType where
  show = genericShow
instance eqPolPolType :: Eq PolPolType where
  eq = genericEq
instance ordPolPolType :: Ord PolPolType where
  compare x y = GOrd.genericCompare x y
instance boundedPolPolType :: Bounded PolPolType where
  bottom = GBounded.genericBottom
  top = GBounded.genericTop
instance enumPolPolType :: Enum PolPolType where
  pred = GEnum.genericPred
  succ = GEnum.genericSucc
instance boundedEnumPolPolType :: BoundedEnum PolPolType where
  cardinality = GEnum.genericCardinality
  toEnum = GEnum.genericToEnum
  fromEnum = GEnum.genericFromEnum
instance smallBoundedPolPolType :: SmallBounded PolPolType

readPolPolType :: String -> Either String PolPolType
readPolPolType "FreeTextPolicy" = pure FreeTextPolicy
readPolPolType "RefPolicy" = pure RefPolicy
readPolPolType unknown =  Left $ "Unknown Policy: '" <> unknown <> "'"

instance isOptionPolPolType :: IsOption PolPolType where
  toOptionValue = show
  toOptionLabel = show
  fromOptionValue = fromMaybe FreeTextPolicy <<<  hush <<< readPolPolType

checkPolicy :: PolPolType -> String -> Either String M.Policy
checkPolicy pType str = case pType of
  FreeTextPolicy -> (readNEStringEi str) <#> M.FreeTextPolicy
  RefPolicy -> (parsePublicURL str) <#> M.RefPolicy

polPolTypeIs :: M.Policy -> PolPolType
polPolTypeIs p = case p of
  M.FreeTextPolicy _ -> FreeTextPolicy
  M.RefPolicy _ -> RefPolicy

data Item a
  =  Keep (Maybe a)
  |  Delete (Maybe a)
instance showItem :: Show a => Show (Item a) where
  show (Keep x) = "(Keep " <> show x <> ")"
  show (Delete x) = "(Delete " <> show x <> ")"
instance functorItem :: Functor Item where
  map fun (Keep mVal) = Keep $ map fun mVal
  map fun (Delete mVal) = Delete $ map fun mVal
instance applyItem :: Apply Item where
  apply (Keep mFun) (Keep mVal) = Keep $ apply mFun mVal
  apply (Keep mFun) (Delete mVal) = Keep $ apply mFun mVal
  apply (Delete mFun) (Keep mVal) = Keep $ apply mFun mVal
  apply (Delete mFun) (Delete mVal) = Delete $ apply mFun mVal
instance applicativeItem :: Applicative Item where
  pure x = Keep $ Just x
instance extendItem :: Extend Item where
  extend iMayAtoB iMay = Keep $ Just $ iMayAtoB iMay

toMaybe :: ∀ a. Item a -> Maybe a
toMaybe (Keep mVal) = mVal
toMaybe (Delete mVal) = mVal

isKeep :: ∀ a. Item a -> Boolean
isKeep (Keep _) = true
isKeep _ = false

arrayView :: ∀ a. CtrlSignal HTML (Maybe a) -> CtrlSignal HTML (Tuple Int (Array a))
arrayView mkWidget oldArrTup = D.div_ [] do
  mayArrTup <- arrayViewLoop minWidgets initVals
  pure $ second (catMaybes <<< (map toMaybe)) mayArrTup
  where
    minWidgets = fst oldArrTup
    oldArr = snd oldArrTup
    emptyElem = Keep Nothing
    initVals :: Array (Item a)
    initVals = (pure <$> oldArr) <>
      ((safeRange 1 numEmpty) <#> (\_ -> emptyElem))
      where numEmpty = max 0 (minWidgets - (length oldArr))
    mkItemView :: Item a -> Signal HTML (Item a)
    mkItemView item = case item of
      Delete _ -> step (Delete Nothing) mempty
      Keep _ -> mkItemViewDel item
    mkItemViewDel :: Item a -> Signal HTML (Item a)
    mkItemViewDel item = D.li_ [] do
      curVal <- mkWidget $ toMaybe item
      newItem <- delButton $ Keep curVal
      pure newItem
    delButton :: Item a -> Signal HTML (Item a)
    delButton item = step item $ do
      delMay <- (Delete $ toMaybe item) <$ D.button [P.onClick] [D.text "Delete"]
      pure $ delButton delMay
    arrayViewLoop :: Int -> Array (Item a) ->
      Signal HTML (Tuple Int (Array (Item a)))
    arrayViewLoop widgCountIn mayArr = loopS (Tuple widgCountIn mayArr) \tupIn ->
      D.ul_ [] do
        let widgCountIn' = fst tupIn
        let mayArr' = snd tupIn
        emptyArrLen <- step 0 $
          (pure 1) <$ D.button [P.onClick] [D.text "Add item"]
        mayArrNewUnfiltered <- traverse mkItemView mayArr'
        let mayArrNew = filter isKeep mayArrNewUnfiltered
        let widgCountNew = length mayArrNew + emptyArrLen
        let emptyArr = (safeRange 1 emptyArrLen) <#> (\_ -> emptyElem)
        -- _ <- consoleShow $ length $ mayArr -- FIXME DEBUG
        pure $ Tuple widgCountNew $ mayArrNew <> emptyArr

nonEmptyArrayView :: ∀ a. CtrlSignal HTML (Maybe a) ->
  CtrlSignal HTML (Tuple Int (Maybe (NonEmptyArray a)))
nonEmptyArrayView mkWidget oldNeArrMay = do
  arrayA <- arrayView mkWidget (second (foldf toArray) oldNeArrMay)
  pure $ second fromArray arrayA

errorDisplay :: ∀ a e. Show e => Maybe e -> Widget HTML a
errorDisplay = maybe mempty (\err ->
  D.div [P.style {color: "red"}] [D.text $ show err]
)


readNEStringEi :: String -> Either String NonEmptyString
readNEStringEi str = case fromString $ trim str of
  Just nes -> Right nes
  Nothing -> Left "Empty string when NonEmptyString expected."

-- NOTE: comment out for production builds
consoleShow :: ∀ a. Show a => Warn (QuoteLabel "consoleShow in use") =>
  a -> Signal HTML Unit
consoleShow val = display $ do
  liftEffect $ logShow val -- FIXME: DEBUG
  mempty

{- dateTimeWidg :: Widget HTML DateTime
dateTimeWidg = do
  liftEffect nowDateTime

dateTimeSig :: Signal HTML DateTime
dateTimeSig = justWait bottom (fireOnce dateTimeWidg) pure

runEffectOnW :: forall a b. Effect b -> Widget HTML a -> Signal HTML (Maybe b)
runEffectOnW e wWait = loopW Nothing $ \_ -> do
  b <- liftEffect e
  b' <- wWait $> b
  pure $ Just b'

runEffectOnS :: forall a b. Effect b -> Signal HTML a -> Signal HTML (Maybe b)
runEffectOnS e sWait = runEffectOnW e wWait
  where
  wWait = oneShot (Just <$> sWait)

-}

-- Or with a supplied initial value instead of using a Maybe
runEffectInit :: forall a. a -> Effect a -> Signal HTML a
runEffectInit i e = step i do
  a <- liftEffect e
  pure (step a empty)

safeRange :: Int -> Int -> Array Int
safeRange i f = if f < i then [] else (i .. f)

fromEither :: forall a b. b -> Either a b -> b
fromEither def ei = case ei of
  Right b -> b
  Left _ -> def

-- TODO this safely, need an FFI check: 
-- https://github.com/facebook/flow/issues/4799#issuecomment-326992974
-- Maybe do this separately as a small library: e.g.- `NativeEventTarget -> Maybe Node`
evTarget :: SyntheticInputEvent -> Effect Node
evTarget = unsafeCoerce <<< target

evTargetElem :: SyntheticInputEvent -> Effect (Maybe Ele.Element)
evTargetElem se = Ele.fromNode <$> (evTarget se)

-- NativeEventTarget


windowDoc :: Effect Document
windowDoc = do
  win <- window
  hDoc <- document win
  pure $ HTML.toDocument hDoc

setChildInputByTag :: String -> String -> String -> Effect Unit
setChildInputByTag id tag value = do
  doc <- windowDoc
  let root = toNonElementParentNode doc
  parEleMay <- getElementById id root
  case parEleMay of
    Just parEle -> do
      let par = Ele.toParentNode parEle
      childCollection <- children par
      childArray <- HTML.toArray childCollection
      let childMatches = filter (\c -> Ele.tagName c == tag) childArray
      let childInputs = catMaybes $ HTML.fromElement <$> childMatches
      -- log $ "Child array tags: " <> (show $ Ele.tagName <$> childArray) -- DEBUG
      -- when (length childMatches == 0) $ log
      --   $ "No children of " <> id <> " with tag == " <> tag
      -- when (length childInputs == 0) $ log
      --   $ "No input element children of " <> id <> " with tag == " <> tag
      for_ childInputs (HTML.setValue value)
    Nothing -> log $ "in setChildByTag, couldn't find element with id " <> id
