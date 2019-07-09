module Metajelo.Forms where

import Prelude (Void, bind, join, pure, show, ($), (<$>), (<#>), (<<<))

import Concur.Core (Widget)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Applicative ((<$))
import Control.Category ((>>>))
import Data.Array ((:))
import Data.Bounded (class Bounded, bottom)
import Data.Either (Either(..), hush)
import Data.Enum (class BoundedEnum, class Enum, upFromIncluding)
import Data.Eq (class Eq)
import Data.Generic.Rep (class Generic)
import Data.Generic.Rep.Enum as GEnum
import Data.Maybe (Maybe(..), maybe)
import Data.Monoid (mempty)
import Data.Newtype (class Newtype, unwrap, wrap)
import Data.Symbol (class IsSymbol, SProxy)
import Data.Time.Duration (Milliseconds(..))
import Data.Variant (Variant)
-- import Data.Unfoldable1 (singleton)
import Formless as F
import Formless.Internal.Transform as Internal
import Metajelo.Types as M
import Metajelo.Validation as V
import Metajelo.XPaths.Read as MR
import Prim.Row (class Cons)
import Text.Email.Validate (EmailAddress)

-- import Metajelo.Types
-- import URL.Validator                        (urlToString)

-- TODO: https://pursuit.purescript.org/packages/purescript-generics-rep
-- Note: Common practice to use `Void` to represent "no error possible"
newtype InstContactForm r f = InstContactForm (r (
    email1 :: f V.FieldError String EmailAddress
  , email2 :: f V.FieldError String EmailAddress
  , contactType :: f Void
    MayInstitutionContactType (Maybe M.InstitutionContactType)
  ))
derive instance newtypeInstContactForm :: Newtype (InstContactForm r f) _

proxies :: F.SProxies InstContactForm
proxies = F.mkSProxies (F.FormProxy :: F.FormProxy InstContactForm)

-- Some type helpers
type InputForm = InstContactForm Record F.InputField
type OutputForm = InstContactForm Record F.OutputField
type Validators = InstContactForm Record (F.Validation InstContactForm (Widget HTML))
type FState = F.State InstContactForm (Widget HTML)

initialInputs :: InputForm
initialInputs = F.wrapInputFields {
  email1: ""
, email2: ""
, contactType: wrap Nothing
}

validators :: Validators
validators = InstContactForm {
  email1: V.emailFormat
, email2: V.equalsEmail1 >>> V.emailFormat
, contactType: V.dummyUnwrap -- V.readSimpleType MR.readInstitutionContactType
}


menuChooseTxt :: forall a. Widget HTML a
menuChooseTxt = D.text "--Please choose an option--"

-- pleaseChooseOptionMay :: forall a. Widget HTML (Maybe a)
-- pleaseChooseOptionMay = D.option [P.value Nothing] [menuChooseTxt]

pleaseChooseOption :: forall a. Widget HTML a
pleaseChooseOption = D.option' [menuChooseTxt]

-- typedDropdownMenu :: forall a s form. BoundedEnum a => IsSymbol s =>
--   SProxy s -> FState -> Widget HTML (F.Query form)
-- typedDropdownMenu proxy fstate = D.select [
--   P.value $ F.getInput proxy fstate.form
-- , (F.set proxy <<< P.unsafeTargetValue) <$> P.onChange
-- ] $ -- pleaseChooseOption :
--   allVals <#> (\v -> D.option [P.value v] [D.text $ show v])
--   where
--     allVals :: Array a
--     allVals = upFromIncluding bottom

-- typedOptionalDropdownMenu :: forall a. BoundedEnum a => Widget HTML (Maybe a)
--   where allVals = upFromIncluding bottom

instContactWidg :: FState -> Widget HTML M.InstitutionContact
instContactWidg fstate = do
  query <- D.div' [
      D.div' [D.text "Email"]
    , D.input
      [ P.value $ F.getInput proxies.email1 fstate.form
        -- This will help us avoid hitting the server on every single key press.
      , (F.asyncSetValidate debounceTime proxies.email1 <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.email1 fstate.form
    , D.div' [D.text "Confirm Email"]
    , D.input
      [ P.value $ F.getInput proxies.email2 fstate.form
      , (F.asyncSetValidate debounceTime proxies.email2 <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.email2 fstate.form
    , menu fstate.form proxies.contactType
    , D.div' [F.submit <$ D.button [P.onClick] [D.text "Submit"]]
    ]
  res <- F.eval query fstate
  case res of
    Left fstate' -> instContactWidg fstate'
    Right out -> do
      let form = F.unwrapOutputFields out
      pure {emailAddress: form.email1, contactType: form.contactType}
  where
    errorDisplay = maybe mempty (\err -> D.div [P.style {color: "red"}] [D.text $ V.toText err])
    debounceTime = Milliseconds 300.0



--- Utilities ---

-- This should be in Formless
initState :: InputForm -> Validators -> FState
initState form validations =
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
    }
  }

class IsOption a where
  toOptionValue :: a -> String
  toOptionLabel :: a -> String
  fromOptionValue :: String -> a

-- instance isOptionString :: IsOption String where
--   toOptionValue = identity
--   toOptionLabel = identity
--   fromOptionValue = identity

_ictToString :: Maybe M.InstitutionContactType -> String
_ictToString (Just v) = show v
_ictToString Nothing = ""

instance isOptionMaybeInstitutionContactType
  :: IsOption (Maybe M.InstitutionContactType) where
    toOptionValue = _ictToString
    toOptionLabel = _ictToString
    fromOptionValue = join <<< hush <<< MR.readInstitutionContactType

newtype MayInstitutionContactType =
  MayInstitutionContactType (Maybe M.InstitutionContactType)
derive instance newtypeMayInstitutionContactType
  :: Newtype MayInstitutionContactType _
derive newtype instance eqMayInstitutionContactType
  :: Eq MayInstitutionContactType
derive newtype instance isOptionMayInstitutionContactType
  :: IsOption MayInstitutionContactType

derive instance genericMayInstitutionContactType :: Generic MayInstitutionContactType _
instance boundedEnumMaybeInstitutionContactType
  :: BoundedEnum MayInstitutionContactType where
  cardinality = GEnum.genericCardinality
  toEnum = GEnum.genericToEnum
  fromEnum = GEnum.genericFromEnum

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

