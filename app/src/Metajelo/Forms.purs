module Metajelo.Forms where

import Prelude (class Show, Void, bind, join, pure, show, (+), (-), ($), (<$>), (<#>), (<<<))

import Concur.Core (Widget)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Applicative ((<$))
import Control.Category ((>>>))
import Data.Array ((:))
import Data.Bounded (class Bounded, bottom)
import Data.Either (Either(..), hush)
import Data.Enum (class BoundedEnum, class Enum, upFromIncluding, Cardinality(..), cardinality, fromEnum, toEnum)
import Data.Eq (class Eq)
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

-- Note: Common practice to use `Void` to represent "no error possible"

-- | No validation is needed for this field type, as the input and ouput
-- | types (`io`) are the same.
type IdentityField f io = f Void io io

newtype InstContactForm r f = InstContactForm (r (
    email1 :: f V.FieldError String EmailAddress
  , email2 :: f V.FieldError String EmailAddress
  , contactType :: IdentityField f (Maybe M.InstitutionContactType)
  ))
derive instance newtypeInstContactForm :: Newtype (InstContactForm r f) _

proxies :: F.SProxies InstContactForm
proxies = F.mkSProxies (F.FormProxy :: F.FormProxy InstContactForm)

-- Some type helpers
type InputForm = InstContactForm Record F.InputField
-- type OutputForm = InstContactForm Record F.OutputField
type Validators = InstContactForm Record (F.Validation InstContactForm (Widget HTML))
type FState = F.State InstContactForm (Widget HTML)

initialInputs :: InputForm
initialInputs = F.wrapInputFields {
  email1: ""
, email2: ""
, contactType: Nothing
}

validators :: Validators
validators = InstContactForm {
  email1: V.emailFormat
, email2: V.equalsEmail1 >>> V.emailFormat
, contactType: V.dummy
}


menuChooseTxt :: forall a. Widget HTML a
menuChooseTxt = D.text "--Please choose an option--"

pleaseChooseOption :: forall a. Widget HTML a
pleaseChooseOption = D.option' [menuChooseTxt]


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
    , D.div' [D.text "Contact type: ", menu fstate.form proxies.contactType]
    , D.div' [ F.submit <$ D.button [P.onClick] [D.text "Submit"]]
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

mayToString :: forall a. Show a => Maybe a -> String
mayToString (Just v) = show v
mayToString Nothing = ""

emptyMeansOptional :: forall a. Show a => Maybe a -> String
emptyMeansOptional mayV = case mayV of
  Nothing -> "(optional)"
  x -> mayToString x

instance isOptionMaybeInstitutionContactType
  :: IsOption (Maybe M.InstitutionContactType) where
    toOptionValue = mayToString
    toOptionLabel = emptyMeansOptional
    fromOptionValue = join <<< hush <<< MR.readInstitutionContactType

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

