module Metajelo.Forms.InstitutionPolicy where

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
import Metajelo.FormUtil (IdentityField, MKFState, MKValidators, formSaveButton, initFormState, menu)
import Metajelo.Types as M
import Metajelo.Validation as V
import Metajelo.View (ipolicyWidg)
import URL.Validator (URL, urlToString)

-- FIXME: consider the form: might need to use a local type like:
data PolPolType
  = FreeTextPolicy
  | RefPolicy
-- FIXME: this uses 0-arg constructors and could be used for dropdown or radio box.

newtype InstPolicyForm r f = InstPolicyForm (r (
    polPolType :: IdentityField f (Maybe String)
  , policyTxt ::  f V.FieldError (Maybe String) (Maybe URL)
  , policyType :: IdentityField f (Maybe M.PolicyType)
  , appliesToProd :: IdentityField f (Maybe Boolean)
  ))
-- newtype InstPolicyForm r f = InstPolicyForm (r (
--     policyUrl :: f V.FieldError (Maybe String) (Maybe URL)
--   , policyTxt :: IdentityField f (Maybe String)
--   , policyType :: IdentityField f (Maybe M.PolicyType)
--   , appliesToProd :: IdentityField f (Maybe Boolean)
--   ))
derive instance newtypeInstPolicyForm :: Newtype (InstPolicyForm r f) _

proxies :: F.SProxies InstPolicyForm
proxies = F.mkSProxies (F.FormProxy :: F.FormProxy InstPolicyForm)

-- Some type helpers
type InputForm = InstPolicyForm Record F.InputField
-- type OutputForm = InstPolicyForm Record F.OutputField
type Validators = MKValidators InstPolicyForm
type FState = MKFState InstPolicyForm

type InputRecord = {
  policyUrl :: Maybe String
, policyTxt :: Maybe String
, policyType :: Maybe M.PolicyType
, appliesToProd :: Maybe Boolean
}

initialInputsRecord :: InputRecord
initialInputsRecord = {
  policyUrl: Nothing
, policyTxt: Nothing
, policyType: Nothing
, appliesToProd: Nothing
}

outToInRec ::  Maybe M.InstitutionPolicy -> InputRecord
outToInRec Nothing = initialInputsRecord
outToInRec (Just outRec) = {
  policyUrl: case outRec.policy of
    FreeTextPolicy _ => Nothing
    RefPolicy url => Just $ urlToString url
, policyTxt: case outRec.policy of
    FreeTextPolicy txt => Just txt
    RefPolicy _ => Nothing
, policyType: outRec.policyType
, appliesToProd: outRec.appliesToProduct
}

validators :: Validators
validators = InstPolicyForm {
  policyUrl: V.emailFormat
, policyType: V.dummy
}
--TODO: need a validator that checks if either policyUrl or policyTxt is completed.

policyForm :: FState -> Widget HTML M.InstitutionPolicy
policyForm fstate = do
  query <- D.div' [
      D.div' [D.text "Email"]
    , D.input [
        P.value $ F.getInput proxies.policyUrl fstate.form
      , (F.setValidate proxies.policyUrl <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.policyUrl fstate.form
    , D.div' [D.text "Policy type: ",  menu fstate.form proxies.policyType]
    , D.div' [ F.submit <$ formSaveButton fstate]
    ]
  res <- F.eval query fstate
  case res of
    Left fstate' -> policyForm fstate'
    Right out -> do
      let form = F.unwrapOutputFields out
      pure {emailAddress: form.policyUrl, policyType: form.policyType}
  where
    errorDisplay = maybe mempty (\err ->
      D.div [P.style {color: "red"}] [D.text $ V.toText err]
    )

policySignal :: Maybe M.InstitutionPolicy
  -> Signal HTML (Maybe M.InstitutionPolicy)
policySignal instPolicyMay = step instPolicyMay do
  inputs <- pure $ F.wrapInputFields $ outToInRec instPolicyMay
  instPolicy <- D.div' [
    D.h2' [D.text "Institution Policy"]
  , policyForm (initFormState inputs validators)
  , foldMap ipolicyWidg instPolicyMay
  ]
  pure $ policySignal $ Just instPolicy

