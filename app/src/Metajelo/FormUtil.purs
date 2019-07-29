module Metajelo.FormUtil where

import Prelude (class Bounded, class Eq, class Monad, class Ord, class Show, Void, bind, join, map, min, pure, show, (+), (-), ($), (<$>), (<#>), (<<<), (==), (||), (<>))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Applicative ((<$))
import Control.Category ((>>>))
import Data.Array (catMaybes, filter, (:), (..))
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
import Data.Maybe (Maybe(..), fromMaybe, maybe)
import Data.Monoid (mempty)
import Data.Newtype (class Newtype, unwrap, wrap)
import Data.Symbol (class IsSymbol, SProxy)
import Data.Time.Duration (Milliseconds(..))
import Data.Traversable (for, traverse)
import Data.Tuple (Tuple(..), fst, snd)
import Data.Variant (Variant)
-- import Data.Unfoldable1 (singleton)
import Formless as F
import Formless.Internal.Transform as Internal
import Metajelo.Types as M
import Metajelo.Validation as V
import Metajelo.XPaths.Read as MR
import Prim.Row (class Cons)
import Prim.RowList (class RowToList)
import React.SyntheticEvent (SyntheticMouseEvent)
import Text.Email.Validate (EmailAddress)

-- Note: Common practice to use `Void` to represent "no error possible"

type MKFState form = F.State form (Widget HTML)
type MKValidators form = form Record (F.Validation form (Widget HTML))

-- | No validation is needed for this field type, as the input and ouput
-- | types (`io`) are the same.
type IdentityField f io = f Void io io

mayToString :: forall a. Show a => Maybe a -> String
mayToString (Just v) = show v
mayToString Nothing = ""

emptyMeansOptional :: forall a. Show a => Maybe a -> String
emptyMeansOptional mayV = case mayV of
  Nothing -> "(None)"
  x -> mayToString x

menu :: forall opt s form e o restF restI inputs fields
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

class IsOption a where
  toOptionValue :: a -> String
  toOptionLabel :: a -> String
  fromOptionValue :: String -> a

instance isOptionMaybeBoolean
  :: IsOption (Maybe Boolean) where
    toOptionValue = mayToString
    toOptionLabel = emptyMeansOptional
    fromOptionValue = hush <<< MR.readBoolean

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

formSaveButton :: forall form. MKFState form -> Widget HTML SyntheticMouseEvent
formSaveButton fstate = D.button props [D.text "Save"]
  where props = if fstate.dirty then [P.onClick] else [P.disabled true]


--TODO: use fromArray to go from an Array to a Maybe NonEmptyArray, directly?

data ItemPersist =
    Delete
  | Keep
derive instance eqItemPersist :: Eq ItemPersist

arrayView :: forall a. Int -> (Maybe a -> Signal HTML (Maybe a)) -> Signal HTML (Array a)
arrayView minWidgets mkWidget = D.div_ [] do
  tupArr <- arrayView' initVals
  pure $ catMaybes $ map snd tupArr
  where
    initVals :: Array (Tuple ItemPersist (Maybe a))
    initVals = (1 .. (min 1 minWidgets)) <#> (\_ -> Tuple Keep Nothing)
    mkItemView :: Tuple ItemPersist (Maybe a) -> Signal HTML (Tuple ItemPersist (Maybe a))
    mkItemView item = D.li_ [] $ do
      sigVal <- mkWidget $ snd item
      shouldDel <- step false (pure true <$ D.button [P.onClick] [D.text "Delete"])
      if shouldDel
        then pure $ Tuple Delete sigVal
        else pure $ Tuple Keep sigVal

    arrayView' :: Array (Tuple ItemPersist (Maybe a)) ->  Signal HTML (Array (Tuple ItemPersist (Maybe a)))
    arrayView' tupArr = D.div_ [] do
      tupArrNew <- traverse mkItemView tupArr
      tupArrFiltered <- pure $ filter (\t -> Keep == fst t) tupArrNew
      pure tupArrFiltered

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
