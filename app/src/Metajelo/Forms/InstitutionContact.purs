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
import Metajelo.FormUtil (IdentityField, MKFState, MKValidators, errorDisplay, formSaveButton, initFormState, menu)
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
type Validators = MKValidators InstContactForm
type FState = MKFState InstContactForm

type InputRecord = {
  email1:: String
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

contactForm :: FState -> Widget HTML M.InstitutionContact
contactForm fstate = do
  query <- D.div' [
      D.div' [D.text "Email"]
    , D.input [
        P.value $ F.getInput proxies.email1 fstate.form
      , (F.setValidate proxies.email1 <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.email1 fstate.form
    , D.div' [D.text "Contact type: ",  menu fstate.form proxies.contactType]
    , D.div' [ F.submit <$ formSaveButton fstate]
    ]
  res <- F.eval query fstate
  case res of
    Left fstate' -> contactForm fstate'
    Right out -> do
      let form = F.unwrapOutputFields out
      pure {emailAddress: form.email1, contactType: form.contactType}

contactSignal :: Maybe M.InstitutionContact
  -> Signal HTML (Maybe M.InstitutionContact)
contactSignal instContactMay = step instContactMay do
  inputs <- pure $ F.wrapInputFields $ outToInRec instContactMay
  instContact <- D.div' [
    D.h2' [D.text "Institution Contact"]
  , contactForm (initFormState inputs validators)
  , foldMap contactWidg instContactMay
  ]
  pure $ contactSignal $ Just instContact

