module Metajelo.Forms.InstitutionContact where

import Prelude (Unit, bind, discard, pure, unit, ($), (<$>), (<<<))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Alt ((<|>))
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

type QueryWithFState form r = {
  query :: Maybe (F.Query form)
, fstate :: FState
, result :: Maybe r
}

qwf :: forall form r. F.Query form -> FState -> Maybe r -> QueryWithFState form r
qwf query fstate res = {
  query: Just query
, fstate: fstate
, result: res
}


qwfPureState :: forall form r. FState -> QueryWithFState form r
qwfPureState st = {
  query: Nothing
, fstate: st
, result: Nothing
}

type InputRecord = {
  email1 :: String
, contactType :: Maybe M.InstitutionContactType
}

initialInputsRecord :: InputRecord
initialInputsRecord = {
  email1: ""
, contactType: Nothing
}

outToInRec ::  Maybe M.InstitutionContact -> InputRecord
outToInRec Nothing = initialInputsRecord
outToInRec (Just outRec) = let email = toString outRec.emailAddress in {
  email1: email
, contactType: outRec.contactType
}

validators :: Validators
validators = InstContactForm {
  email1: V.emailFormat
, contactType: V.dummy
}


-- TODO: make type synonym for this:
contactForm :: QueryWithFState InstContactForm M.InstitutionContact -> Signal HTML (QueryWithFState InstContactForm M.InstitutionContact)
contactForm qwFstate = step qwFstate do
  query <- D.div' [
    D.div' [D.text "Email"]
  , D.input [
        P.value $ F.getInput proxies.email1 qwFstate.fstate.form
      , (F.setValidate proxies.email1 <<< P.unsafeTargetValue) <$> P.onChange
    ]
  , errorDisplay $ F.getError proxies.email1 qwFstate.fstate.form
  , D.div' [D.text "Contact type: ",  menu qwFstate.fstate.form proxies.contactType]
  , D.div' [ F.submit <$ D.button [P.onClick] [D.text "Submit"]]
  ]
  res <- F.eval query qwFstate.fstate
  case res of
    Left fstate' -> pure $ contactForm $ qwf query fstate' Nothing
    Right out -> do
      let form = F.unwrapOutputFields out
      let ic = {emailAddress: form.email1, contactType: form.contactType}
      pure $ contactForm $ qwf query qwFstate.fstate (Just ic)
  where
    errorDisplay = maybe mempty (\err ->
      D.div [P.style {color: "red"}] [D.text $ V.toText err]
    )



contactSignal :: Maybe M.InstitutionContact
  -> Signal HTML (Maybe M.InstitutionContact)
contactSignal instContactMay = D.div_ [] do
  let inputs = (F.wrapInputFields $ outToInRec instContactMay)
  display $ D.h2' [D.text "Institution Contact"]
  formData <- contactForm $ qwfPureState (initState inputs validators)
  display $ foldMap contactWidg instContactMay
  pure formData.result


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
