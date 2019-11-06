module Metajelo.UI where

import Prelude (Unit, bind, discard, join, pure, unit, ($), (>>=))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, loopS)
import Concur.React (HTML)
import Concur.React.DOM as D
-- import Concur.React.Props as P
import Concur.React.Run (runWidgetInDom)
import Control.Monad.State
import Data.Array.NonEmpty (NonEmptyArray)
import Data.Either (Either(..), hush)
import Data.Foldable (fold, foldMap)
import Data.Maybe (Maybe(..))
import Data.String.NonEmpty (NonEmptyString)
import Data.Symbol (class IsSymbol, SProxy(..))
import Data.Tuple (Tuple(..), fst, snd)
import Effect (Effect)
import Metajelo.Forms as MF
import Metajelo.FormUtil (CtrlSignal, checkBoxS, labelSig', menuSignal, textInput, urlInput, consoleShow)
import Metajelo.Types as M
import Metajelo.View as MV
import Option as Opt
import Prim.Row as Prim.Row
import Text.URL.Validate (URL)

-- import Data.Newtype (unwrap)
-- import Data.Semigroup.First (First(..))

main :: Effect Unit
main = pure unit

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

-- | ViewModel for Location
type LocationRowExtra r = (
  institutionID_opt :: Opt.Option (M.BaseIdRows ())
, _numPolicies :: Int
, iSustain_opt :: Opt.Option InstitutionSustainabilityRowOpts
| r
)
-- | Decorated state (Model + ViewModel) for Location
type LocationRowOpts = LocationRowExtra M.LocationRows

-- | ViewModel for InstitutionSustainability
type InstitutionSustainabilityExtraRows r = (
  missionUrl_Ei :: Either String URL
, fundingUrl_Ei :: Either String URL
| r
)
-- | Decorated state (Model + ViewModel) for InstitutionSustainability
type InstitutionSustainabilityRowOpts = InstitutionSustainabilityExtraRows
  (M.InstitutionSustainabilityRows)

injectLocationFieldsOpt ::
  Opt.Option LocationRowOpts ->
  Opt.Option (M.BaseIdRows ()) ->
  Maybe M.InstitutionID ->
  Maybe NonEmptyString ->
  Maybe M.InstitutionType ->
  Maybe NonEmptyString ->
  Maybe M.InstitutionContact ->
  Opt.Option InstitutionSustainabilityRowOpts ->
  Maybe M.InstitutionSustainability ->
  Int ->
  Maybe (NonEmptyArray M.InstitutionPolicy) ->
  Boolean ->
  Opt.Option LocationRowOpts
injectLocationFieldsOpt
  oldOpt
  institutionID_opt
  institutionIDMay
  institutionNameMay
  institutionTypeMay
  superOrganizationName
  institutionContactMay
  iSustain_opt
  institutionSustainabilityMay
  _numPolicies
  institutionPoliciesMay
  versioning = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "institutionID_opt")
      (Just institutionID_opt)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionID") institutionIDMay
    get >>= Opt.maySetOptState (SProxy :: _ "institutionName") institutionNameMay
    get >>= Opt.maySetOptState (SProxy :: _ "institutionType") institutionTypeMay
    get >>= Opt.maySetOptState (SProxy :: _ "superOrganizationName")
      (Just superOrganizationName)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionContact")
      institutionContactMay
    get >>= Opt.maySetOptState (SProxy :: _ "iSustain_opt")
      (Just iSustain_opt)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionSustainability")
      institutionSustainabilityMay
    get >>= Opt.maySetOptState (SProxy :: _ "_numPolicies") (Just _numPolicies)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionPolicies")
      institutionPoliciesMay
    get >>= Opt.maySetOptState (SProxy :: _ "versioning") (Just versioning)
  ) oldOpt

accumulateLocation ::  Signal HTML (Opt.Option LocationRowOpts)
accumulateLocation = labelSig' D.h1' "Location" $
  loopS Opt.empty \locOpt -> D.div_ [] do
    identOpt <- accumulateIdent "Identifier" $
      getOpt (SProxy :: _ "institutionID_opt") locOpt
    let identMay = Opt.getAll identOpt
    instNameMay <- textInput D.span' "Institution Name: " $
      Opt.get (SProxy :: _ "institutionName") locOpt
    instTypeMay <- labelSig' D.h3' "Institution Type" $ menuSignal $
      Opt.get (SProxy :: _ "institutionType") locOpt
    display D.br'
    sOrgMay <- textInput D.span' "Super Organization (optional): " $
      join $ Opt.get (SProxy :: _ "superOrganizationName") locOpt
    icMay <- MF.contactSignal $ Opt.get (SProxy :: _ "institutionContact") locOpt
    sustainOpt <- accumulateSustain "Institution Sustainability:" $
      getOpt (SProxy :: _ "iSustain_opt") locOpt
    let sustainMay = Opt.getSubset sustainOpt
    polsMayTup <- MF.policySigArray $ Tuple
      (Opt.getWithDefault 1 (SProxy :: _ "_numPolicies") locOpt)
      (Opt.get (SProxy :: _ "institutionPolicies") locOpt)
    let _numPolicies = fst polsMayTup
    let polsMay = snd polsMayTup
    versioning <- labelSig' D.span' "versioning? " $ checkBoxS $
      Opt.getWithDefault false (SProxy :: _ "versioning") locOpt
    newLoc <- pure $ injectLocationFieldsOpt locOpt
      identOpt
      identMay
      instNameMay
      instTypeMay
      sOrgMay
      icMay
      sustainOpt
      sustainMay
      _numPolicies
      polsMay
      versioning
    let newLocMay = Opt.getSubset newLoc
    display $ locWidg newLocMay
    pure newLoc
  where
    locWidg :: forall a. Maybe M.Location ->  Widget HTML a
    locWidg locMay = D.div' [
      D.h3' [D.text "Last submitted location summary for this product:"]
    , D.br'
    , foldMap (\loc -> fold $ MV.spacify $ MV.locElems loc) locMay
    ]

page :: ∀ a. Widget HTML a
page = do
   dyn $ accumulateLocation

injectSustainFieldsOpt ::
  Opt.Option InstitutionSustainabilityRowOpts ->
  Either String URL ->
  Maybe URL ->
  Either String URL ->
  Maybe URL ->
  Opt.Option InstitutionSustainabilityRowOpts
injectSustainFieldsOpt
  oldOpt
  missionUrl_Ei
  missionUrlMay
  fundingUrl_Ei
  fundingUrlMay = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "missionUrl_Ei")
      (Just missionUrl_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "missionStatementURL")
      missionUrlMay
    get >>= Opt.maySetOptState (SProxy :: _ "fundingUrl_Ei")
      (Just fundingUrl_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "fundingStatementURL")
      fundingUrlMay
  ) oldOpt

accumulateSustain :: String ->
  CtrlSignal HTML (Opt.Option InstitutionSustainabilityRowOpts)
accumulateSustain idLabel oldSust = labelSig' D.h3' idLabel do
  missionUrl_Ei <- urlInput D.span' "Mission Statement URL: " $
    Opt.getWithDefault (Left "") (SProxy :: _ "missionUrl_Ei") oldSust
  let missionUrlMay = hush missionUrl_Ei
  fundingUrl_Ei <- urlInput D.span' "Funding Statement URL: " $
    Opt.getWithDefault (Left "") (SProxy :: _ "fundingUrl_Ei") oldSust
  let fundingUrlMay = hush fundingUrl_Ei
  pure $ injectSustainFieldsOpt oldSust
    missionUrl_Ei
    missionUrlMay
    fundingUrl_Ei
    fundingUrlMay

injectIdentFieldsOpt ::
  Opt.Option (M.BaseIdRows ()) ->
  Maybe NonEmptyString ->
  Maybe M.IdentifierType ->
  Opt.Option (M.BaseIdRows ())
injectIdentFieldsOpt
  oldOpt
  idMay
  idTypeMay = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "id") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "idType") idTypeMay
  ) oldOpt

accumulateIdent :: String -> CtrlSignal HTML (Opt.Option (M.BaseIdRows ()))
accumulateIdent idLabel oldId = labelSig' D.h3' idLabel do
  idMay <- textInput D.span' "Record Identifier: " $
    Opt.get (SProxy :: _ "id") oldId
  idTypeMay <- labelSig' D.span' "Identifier Type" $ menuSignal $
    Opt.get (SProxy :: _ "idType") oldId
  pure $ injectIdentFieldsOpt oldId idMay idTypeMay

-- TODO: PR to purescript-option
getOpt ::
  forall label option option' proxy suboption.
  IsSymbol label =>
  Prim.Row.Cons label (Opt.Option suboption) option' option =>
  proxy label ->
  Opt.Option option ->
  Opt.Option suboption
getOpt = Opt.getWithDefault Opt.empty