module Metajelo.FormUtil where

import Prelude (class Bounded, class Eq, class Monad, class Ord, class Show, Void, bind, discard, join, map, max, not, pure, show, unit, (+), (-), ($), (<$>), (<#>), (<$), (<<<), (==), (||), (<>))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, loopS, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Applicative ((<$))
import Control.Category ((>>>))
import Data.Array (catMaybes, filter, length, replicate, snoc, (..))
import Data.Array.NonEmpty (NonEmptyArray(..), fromArray)
import Data.Bounded (class Bounded, bottom)
import Data.Either (Either(..), hush)
import Data.Enum (class BoundedEnum, class Enum, class SmallBounded, class SmallBoundedEnum, upFromIncluding, Cardinality(..), cardinality, fromEnum, toEnum)
import Data.Eq (class Eq)
import Data.Generic.Rep (class Generic)
import Data.Generic.Rep.Bounded as GBounded
import Data.Generic.Rep.Eq (genericEq)
import Data.Generic.Rep.Enum as GEnum
import Data.Generic.Rep.Ord as GOrd
import Data.Generic.Rep.Show (genericShow)
import Data.Maybe (Maybe(..), fromJust, fromMaybe, maybe)
import Data.Monoid (mempty)
import Data.Newtype (class Newtype, unwrap, wrap)
import Data.String (trim)
import Data.String.NonEmpty (NonEmptyString, fromString, toString)
import Data.Symbol (class IsSymbol, SProxy)
import Data.Time.Duration (Milliseconds(..))
import Data.Traversable (for, traverse)
import Data.Tuple (Tuple(..), fst, snd)
import Data.Unit (Unit, unit)
import Data.Variant (Variant)
import Effect.Class (liftEffect)
import Effect.Class.Console (log, logShow)
-- import Data.Unfoldable1 (singleton)
import Formless as F
import Formless.Internal.Transform as Internal
import Metajelo.Types as M
import Metajelo.Validation as V
import Metajelo.XPaths.Read as MR
import Partial.Unsafe (unsafePartial)
import Prim.Row (class Cons)
import Prim.RowList (class RowToList)
import React.SyntheticEvent (SyntheticMouseEvent)
import Text.Email.Validate (EmailAddress)
import Text.URL.Validate (URL, parsePublicURL)

import Prim.TypeError (QuoteLabel, class Warn)

-- Note: Common practice to use `Void` to represent "no error possible"

type MKFState form = F.State form (Widget HTML)
type MKValidators form = form Record (F.Validation form (Widget HTML))

-- | No validation is needed for this field type, as the input and ouput
-- | types (`io`) are the same.
type IdentityField f io = f Void io io

mayToString :: ∀ a. Show a => Maybe a -> String
mayToString (Just v) = show v
mayToString Nothing = ""

emptyMeansOptional :: ∀ a. Show a => Maybe a -> String
emptyMeansOptional mayV = case mayV of
  Nothing -> "(None)"
  x -> mayToString x

menu :: ∀ opt s form e o restF restI inputs fields
   . IsSymbol s
   => IsOption opt
   => BoundedEnum opt
   => Newtype (form Record F.FormField) (Record fields)
   => Cons s (F.FormField e opt o) restF fields
   => Newtype (form Variant F.InputFunction) (Variant inputs)
   => Cons s (F.InputFunction e opt o) restI inputs
   => form Record F.FormField
  -> SProxy s
  -> Widget HTML (F.Query form)
menu form field = D.select
  [ P.defaultValue $ toOptionValue $ F.getInput field form
  , (F.set field <<< fromOptionValue <<< P.unsafeTargetValue) <$> P.onChange
  ]
  (upFromIncluding (bottom :: opt) <#> \opt ->
    D.option [P.value (toOptionValue opt)] [D.text (toOptionLabel opt)])

-- | A non-formless incantation of menu
menuSignal :: ∀ opt. BoundedEnum opt => IsOption opt =>
  Maybe opt -> Signal HTML (Maybe opt)
menuSignal currentOptMay = step currentOptMay do
  newOpt <- D.select [
    P.defaultValue $ maybe "" toOptionValue currentOptMay
  , (fromOptionValue <<< P.unsafeTargetValue) <$> P.onChange
  ] (
    upFromIncluding (bottom :: opt) <#> \opt ->
      D.option [P.value (toOptionValue opt)] [D.text (toOptionLabel opt)])
  pure $ menuSignal $ Just newOpt

-- | Prepend a label heading to a siginal
labelSig' :: forall a. D.El' -> String -> Signal HTML a -> Signal HTML a
labelSig' tag label sigIn = do
  display $ tag [D.text label]
  sigIn

textInput' :: D.El' -> String -> Signal HTML String
textInput' tag label = labelSig' tag label $ sig ""
  where
    sig :: String -> Signal HTML String
    sig txt = step txt do
      newTxt <- D.input [P.unsafeTargetValue <$> P.onChange]
      pure $ sig newTxt

-- | Reasonable defaults for filtering input text
textFilter :: Signal HTML String -> Signal HTML (Maybe NonEmptyString)
textFilter txtSig = do
  txt <- txtSig
  pure $ fromString $ trim txt

textInput :: D.El' -> String -> Signal HTML (Maybe NonEmptyString)
textInput tag label = textFilter $ textInput' tag label

urlInput :: D.El' -> String -> Signal HTML (Maybe URL)
urlInput tag label = do
  txtMay <- textInput tag label
  urlEi <- pure $ case txtMay of
    Nothing -> Left ""
    Just txt -> parsePublicURL $ toString txt
  display $ case urlEi of
    Right _ -> mempty
    Left err -> errorDisplay $ Just err
  pure $ hush urlEi

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

formSaveButton :: ∀ form. MKFState form -> Widget HTML SyntheticMouseEvent
formSaveButton fstate = D.button props [D.text "Save"]
  where props = if fstate.dirty then [P.onClick] else [P.disabled true]

arrayView :: ∀ a. Int -> (Maybe a -> Signal HTML (Maybe a)) -> Signal HTML (Array a)
arrayView minWidgets mkWidget = D.div_ [] do
  mayArr <- arrayView' minWidgets initVals
  _ <- consoleShow $ length mayArr
  -- arrayStr :: String <- pure $ show mayArr  -- FIXME: DEBUG
  -- _ <- display $ D.div' [D.text arrayStr] -- FIXME: DEBUG
  pure $ catMaybes mayArr
  where
    emptyElem = Nothing
    initVals :: Array (Maybe a)
    initVals = (1 .. (max 1 minWidgets)) <#> (\_ -> emptyElem)
    mkEmptyItemView :: Maybe a -> Signal HTML (Maybe a)
    mkEmptyItemView item = step item do
      newIView <- mkItemViewWidg item
      pure $ mkEmptyItemView newIView
    mkItemView :: Maybe a -> Signal HTML (Maybe a)
    mkItemView item = case item of
      Nothing -> step Nothing mempty
      Just _ -> mkEmptyItemView item
    mkItemViewWidg :: Maybe a -> Widget HTML (Maybe a)
    mkItemViewWidg item = D.div' [
      D.li' [dyn $ mkWidget item]
    , Nothing <$ D.button [P.onClick] [D.text "Delete"]
    ]
    arrayViewLoop :: Int -> Array (Maybe a) ->
      Signal HTML (Tuple Int (Array (Maybe a)))
    arrayViewLoop widgCountIn mayArr = loopS (Tuple widgCountIn mayArr) \tupIn ->
      D.div_ [] do
        let widgCountIn' = fst tupIn
        let mayArr' = snd tupIn
        widgCount <- step widgCountIn' $
          (pure $ widgCountIn' + 1) <$ D.button [P.onClick] [D.text "Add item"]
        -- FIXME: replace mkItemView with mkEmptyItemView but then can't delete.
        mayArrNew <- traverse mkItemView mayArr'
        let emptyArrLen = max 0 (widgCount - (length mayArrNew))
        -- _ <- consoleShow emptyArrLen
        emptyArr <- traverse mkEmptyItemView (replicate emptyArrLen emptyElem)
        -- _ <- consoleShow $ length emptyArr
        pure $ Tuple widgCount $ mayArrNew <> emptyArr
    arrayView' :: Int -> Array (Maybe a) -> Signal HTML (Array (Maybe a))
    arrayView' widgCountIn mayArr = do
      tupOut <- arrayViewLoop widgCountIn mayArr
      pure $ snd tupOut

nonEmptyArrayView :: ∀ a.
  Int -> (Maybe a -> Signal HTML (Maybe a)) -> Signal HTML (Maybe (NonEmptyArray a))
nonEmptyArrayView minWidgets mkWidget = do
  arrayA <- arrayView minWidgets mkWidget
  pure $ fromArray arrayA

errorDisplay :: ∀ a e. V.ToText e => Maybe e -> Widget HTML a
errorDisplay = maybe mempty (\err ->
  D.div [P.style {color: "red"}] [D.text $ V.toText err]
)

--TODO: this is in formless-independent
-- | Initialise the form state with default values.
-- | Passing in the initial inputs, and the validations.
initFormState
  :: ∀ ixs form is fs m
   . RowToList is ixs
  => Internal.InputFieldsToFormFields ixs is fs
  => Newtype (form Record F.InputField) { | is }
  => Newtype (form Record F.FormField) { | fs }
  => form Record F.InputField
  -> form Record (F.Validation form m)
  -> F.State form m
initFormState form validations =
  { validity: F.Incomplete
  , dirty: false
  , submitting: false
  , errors: 0
  , submitAttempts: 0
  , form: Internal.inputFieldsToFormFields form
  , internal: F.InternalState
      { initialInputs: form
      , validators: validations
      , allTouched: false
      -- TODO
      -- , debounceRef: ...
      -- , validationRef: ...
      }
  }


-- NOTE: comment out for production builds
consoleShow :: ∀ a. Show a => Warn (QuoteLabel "consoleShow in use") =>
  a -> Signal HTML Unit
consoleShow val = display $ do
  liftEffect $ logShow val -- FIXME: DEBUG
  mempty
