module Metajelo.Forms.InstitutionContact where

import Prelude (bind, pure, ($), (<$>), (<<<))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Applicative ((<$))
import Control.Category ((>>>))
import Data.Either (Either(..))
import Data.Foldable (foldMap)
import Data.Maybe (Maybe(..), maybe)
import Data.Monoid (mempty)
import Data.Newtype (class Newtype)
import Formless as F
import Formless.Internal.Transform as Internal
import Metajelo.FormUtil (IdentityField, menu)
import Metajelo.Types as M
import Metajelo.Validation as V
import Metajelo.View (contactWidg)
import Text.Email.Validate (EmailAddress, toString)

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


type InputRecord = {
  email1:: String
, email2:: String
, contactType :: Maybe M.InstitutionContactType
}

initialInputsRecord :: InputRecord
initialInputsRecord = {
  email1: ""
, email2: ""
, contactType: Nothing
}

outToInRec ::  Maybe M.InstitutionContact -> InputRecord
outToInRec Nothing = initialInputsRecord
outToInRec (Just outRec) = let email = toString outRec.emailAddress in {
  email1: email
, email2: email
, contactType: outRec.contactType
}

validators :: Validators
validators = InstContactForm {
  email1: V.emailFormat
, email2: V.equalsEmail1 >>> V.emailFormat
, contactType: V.dummy
}

contactForm :: FState -> Widget HTML M.InstitutionContact
contactForm fstate = do
  query <- D.div' [
      D.div' [D.text "Email"]
    , D.input [
        P.value $ F.getInput proxies.email1 fstate.form
      , (F.setValidate proxies.email1 <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.email1 fstate.form
    , D.div' [D.text "Confirm Email"]
    , D.input [
        P.value $ F.getInput proxies.email2 fstate.form
      , (F.setValidate proxies.email2 <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.email2 fstate.form
    , D.div' [D.text "Contact type: ",  menu fstate.form proxies.contactType]
    , D.div' [ F.submit <$ D.button [P.onClick] [D.text "Submit"]]
    ]
  res <- F.eval query fstate
  case res of
    Left fstate' -> contactForm fstate'
    Right out -> do
      let form = F.unwrapOutputFields out
      pure {emailAddress: form.email1, contactType: form.contactType}
  where
    errorDisplay = maybe mempty (\err ->
      D.div [P.style {color: "red"}] [D.text $ V.toText err]
    )



contactSignal :: Maybe M.InstitutionContact
  -> Signal HTML (Maybe M.InstitutionContact)
contactSignal instContactMay = step instContactMay do
  inputs <- pure $ F.wrapInputFields $ outToInRec instContactMay
  instContact <- D.div' [
    D.h2' [D.text "Institution Contact"]
  , contactForm (initState inputs validators)
  , foldMap contactWidg instContactMay
  ]
  pure $ contactSignal $ Just instContact


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
