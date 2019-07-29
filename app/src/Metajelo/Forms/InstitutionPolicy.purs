module Metajelo.Forms.InstitutionPolicy where

import Prelude (class Monad, bind, join, pure, show, ($), (<$>), (<#>), (<<<), (<>))

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
import Formless.Validation (Validation(..), hoistFn_, hoistFnE, hoistFnE_)
import Metajelo.FormUtil (class IsOption, IdentityField, MKFState, MKValidators, PolPolType(..), formSaveButton, initFormState, menu)
import Metajelo.Types as M
import Metajelo.Validation as V
import Metajelo.View (ipolicyWidg)
import URL.Validator (URL, parsePublicURL, urlToString)


newtype InstPolicyForm r f = InstPolicyForm (r (
    polPolType :: IdentityField f PolPolType
  , policy ::  f V.FieldError String M.Policy
  , policyType :: IdentityField f (Maybe M.PolicyType)
  , appliesToProd :: IdentityField f (Maybe Boolean)
  ))

derive instance newtypeInstPolicyForm :: Newtype (InstPolicyForm r f) _

proxies :: F.SProxies InstPolicyForm
proxies = F.mkSProxies (F.FormProxy :: F.FormProxy InstPolicyForm)

-- Some type helpers
type InputForm = InstPolicyForm Record F.InputField
type Validators = MKValidators InstPolicyForm
type FState = MKFState InstPolicyForm

type InputRecord = {
  polPolType :: PolPolType
, policy :: M.Policy
, policyType :: Maybe M.PolicyType
, appliesToProd :: Maybe Boolean
}

initialInputsRecord :: InputRecord
initialInputsRecord = {
  polPolType: FreeTextPolicy
, policy: FreeTextPolicy ""
, policyType: Nothing
, appliesToProd: Nothing
}

pol2ZeroArg :: M.Policy -> PolPolType
pol2ZeroArg (M.FreeTextPolicy _) = FreeTextPolicy
pol2ZeroArg (M.RefPolicy _) = RefPolicy

outToInRec ::  Maybe M.InstitutionPolicy -> InputRecord
outToInRec Nothing = initialInputsRecord
outToInRec (Just outRec) = {
  polPolType: pol2ZeroArg outRec.policy
, policy: Just outRec.policy
, policyType: outRec.policyType
, appliesToProd: outRec.appliesToProduct
}

validators :: Validators
validators = InstPolicyForm {
  polPolType: V.dummy
, policy: checkPolicy
, policyType: V.dummy
, appliesToProd: V.dummy
}

-- TODO: add help tooltip (hover?) for reference policy, etc.
policyForm :: FState -> Widget HTML M.InstitutionPolicy
policyForm fstate = do
  query <- D.div' [
      D.div' [D.text "Policy: ",  menu fstate.form proxies.polPolType]
    , D.input [
        P.value $ F.getInput proxies.policy fstate.form
      , (F.setValidate proxies.policy <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.policy fstate.form
    , D.div' [D.text "Policy type: ",  menu fstate.form proxies.policyType]
    , D.div' [D.text "Applies to product? ",  menu fstate.form proxies.appliesToProd]
    , D.div' [ F.submit <$ formSaveButton fstate]
    ]
  res <- F.eval query fstate
  case res of
    Left fstate' -> policyForm fstate'
    Right out -> do
      let form = F.unwrapOutputFields out
      pure {
        policy: form.policy
      , policyType: form.policyType
      , appliesToProduct: form.appliesToProd
      }
  where
    -- TODO: refactor to FormUtil:
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


checkPolicy :: ∀ v. Monad m => Validation InstPolicyForm m String String M.Policy
checkPolicy = hoistFnE_ $ \form str ->
  let pType = F.getInput proxies.polPolType form
  in case pType of
    FreeTextPolicy -> Right str
    RefPolicy -> parsePublicURL str <#> M.RefPolicy
