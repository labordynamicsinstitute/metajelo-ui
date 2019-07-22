module Metajelo.Forms.InstitutionContact where

import Prelude (class Eq, Unit, bind, discard, pure, unit, (==), ($), (<$>), (<<<))

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
import Data.Newtype (class Newtype, unwrap)
import Formless as F
import Formless.Internal.Transform as Internal
import Metajelo.FormUtil (IdentityField, menu)
import Metajelo.Types as M
import Metajelo.Validation as V
import Metajelo.View (contactWidg)
import React.SyntheticEvent (SyntheticMouseEvent)
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
, lastResult :: Maybe r
}

qwf :: forall form r. F.Query form -> FState -> Maybe r -> Maybe r ->  QueryWithFState form r
qwf query fstate res oldRes = {
  query: Just query
, fstate: fstate
, result: res
, lastResult: oldRes
}


qwfPureState :: forall form r. FState -> QueryWithFState form r
qwfPureState st = {
  query: Nothing
, fstate: st
, result: Nothing
, lastResult: Nothing
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
  , D.div' [ F.submit <$ submit ]
  ]
  res <- F.eval query qwFstate.fstate
  case res of
    Left fstate' -> pure $ contactForm $ qwf query fstate' Nothing qwFstate.lastResult
    Right out -> do
      let form = F.unwrapOutputFields out
      let ic = {emailAddress: form.email1, contactType: form.contactType}
      pure $ contactForm $ qwf query qwFstate.fstate (Just ic) (Just ic)
  where
    errorDisplay = maybe mempty (\err ->
      D.div [P.style {color: "red"}] [D.text $ V.toText err]
    )
    submit = saveButton initialInputsRecord (outToInRec qwFstate.lastResult) (outToInRec qwFstate.result)

saveButton :: forall a. Eq a => a -> a -> a -> Widget HTML SyntheticMouseEvent
saveButton init old new = D.button [P.onClick] [ D.text 
  if new == init then "unedited"
  else if new == old then "unchanged"
  else "Save"
]

contactSignal :: Maybe M.InstitutionContact
  -> Signal HTML (Maybe M.InstitutionContact)
contactSignal instContactMay = D.div_ [] do
  let inputs = (F.wrapInputFields $ outToInRec instContactMay)
  display $ D.h2' [D.text "Institution Contact"]
  formData <- contactForm $ qwfPureState (initState inputs validators)
  display $ foldMap contactWidg instContactMay
  pure formData.result

-- TODO: move to FormUtils and make InputForm a type param
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
