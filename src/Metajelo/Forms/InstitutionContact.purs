module Metajelo.Forms.InstitutionContact where

import Prelude (bind, pure, ($), (<$>), (<<<))

import Concur.Core (Widget)
import Concur.Core.FRP (step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Applicative ((<$))
import Data.Either (Either(..))
import Data.Foldable (foldMap)
import Data.Maybe (Maybe(..))
import Data.Newtype (class Newtype)
import Formless as F
import Metajelo.FormUtil (CtrlSignal, IdentityField, MKFState, MKValidators, errorDisplay, formSaveButton, initFormState, labelSig', menu)
import Metajelo.Types as M
import Metajelo.UI.CSS.ClassProps as MC
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
        P.defaultValue $ F.getInput proxies.email1 fstate.form
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

contactSignal :: CtrlSignal HTML (Maybe M.InstitutionContact)
contactSignal instContactMay =
  labelSig' D.h2' "Institution Contact" [MC.institutionContact] $
    sig instContactMay
    where
      sig icMay = step icMay do
        inputs <- pure $ F.wrapInputFields $ outToInRec icMay
        instContact <- D.div' [
          contactForm (initFormState inputs validators)
        , foldMap contactWidg icMay
        ]
        pure $ sig $ Just instContact

