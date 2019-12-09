module Metajelo.Forms.InstitutionPolicy where

import Prelude (class Monad, bind, discard, pure, ($), (<#>), (<$>), (<<<))

import Concur.Core (Widget)
import Concur.Core.FRP (step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Applicative ((<$))
import Data.Array.NonEmpty (NonEmptyArray)
import Data.Either (Either(..))
import Data.Foldable (foldMap)
import Data.Maybe (Maybe(..))
import Data.Newtype (class Newtype)
import Data.String.NonEmpty (toString)
import Data.Tuple (Tuple)
import Effect.Class (liftEffect)
import Effect.Class.Console (logShow)
import Formless as F
import Formless.Validation (Validation, hoistFnE)
import Metajelo.FormUtil (CtrlSignal, IdentityField, MKFState, MKValidators, PolPolType(..), errorDisplay, formSaveButton, initFormState, labelSig', menu, nonEmptyArrayView)
import Metajelo.Types as M
import Metajelo.CSS.UI.ClassProps as MC
import Metajelo.Validation as V
import Metajelo.View (ipolicyWidg)
import Text.URL.Validate (parsePublicURL, urlToString)


newtype InstPolicyForm r f = InstPolicyForm (r (
    polPolType :: IdentityField f PolPolType
  , policy ::  f String String M.Policy
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
, policy :: String
, policyType :: Maybe M.PolicyType
, appliesToProd :: Maybe Boolean
}

initialInputsRecord :: InputRecord
initialInputsRecord = {
  polPolType: FreeTextPolicy
, policy: ""
, policyType: Nothing
, appliesToProd: Nothing
}

pol2ZeroArg :: M.Policy -> PolPolType
pol2ZeroArg (M.FreeTextPolicy _) = FreeTextPolicy
pol2ZeroArg (M.RefPolicy _) = RefPolicy

polStrContent :: M.Policy -> String
polStrContent (M.FreeTextPolicy txt) = toString txt
polStrContent (M.RefPolicy url) = urlToString url

outToInRec ::  Maybe M.InstitutionPolicy -> InputRecord
outToInRec Nothing = initialInputsRecord
outToInRec (Just outRec) = {
  polPolType: pol2ZeroArg outRec.policy
, policy: polStrContent outRec.policy
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
      D.span_ [MC.policy] $ menu fstate.form proxies.polPolType
    , D.input [
        P.defaultValue $ F.getInput proxies.policy fstate.form
      , (F.setValidate proxies.policy <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.policy fstate.form
    , D.span_ [MC.policyType] $ menu fstate.form proxies.policyType
    , D.span_ [MC.applies] $ menu fstate.form proxies.appliesToProd
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

policySignal :: CtrlSignal HTML (Maybe M.InstitutionPolicy)
policySignal instPolicyMay = D.div_ [MC.institutionPolicy] do
  sig instPolicyMay
  where
    sig ipMay = step ipMay do
      inputs <- pure $ F.wrapInputFields $ outToInRec ipMay
      instPolicy <- D.div' [
        policyForm (initFormState inputs validators)
      , foldMap ipolicyWidg ipMay
      ]
      liftEffect $ logShow instPolicy
      pure $ sig $ Just instPolicy

checkPolicy :: ∀ m. Monad m => Validation InstPolicyForm m String String M.Policy
checkPolicy = hoistFnE $ \form str ->
  let pType = F.getInput proxies.polPolType form
  in case pType of
    FreeTextPolicy -> (V.readNEStringEi str) <#> M.FreeTextPolicy
    RefPolicy -> (parsePublicURL str) <#> M.RefPolicy

 -- | The first element of the tuple is the (desired) number of policies
policySigArray :: CtrlSignal HTML (Tuple Int (Maybe (NonEmptyArray M.InstitutionPolicy)))
policySigArray instPoliciesMay = D.div_ [MC.institutionPolicies] do
  nonEmptyArrayView policySignal instPoliciesMay
