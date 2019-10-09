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
import Metajelo.FormUtil (CtrlSignal, checkBoxS, labelSig', menuSignal, textInput, urlInput {- , consoleShow -})
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

-- | Decorated state (Model + ViewModel) for Location
type LocationRowOpts = (
  institutionID_opt :: Opt.Option (M.BaseIdRows ())
, _numPolicies :: Int
, iSustain_opt :: Opt.Option InstitutionSustainabilityRowOpts
| M.LocationRows
)

type InstitutionSustainabilityRowOpts = (
  missionUrl_Ei :: Either String URL
, fundingUrl_Ei :: Either String URL
| M.InstitutionSustainabilityRows
)

injectLocationFields ::
  Maybe M.InstitutionID ->
  Maybe NonEmptyString ->
  Maybe M.InstitutionType ->
  Maybe NonEmptyString ->
  Maybe M.InstitutionContact ->
  Maybe M.InstitutionSustainability ->
  Maybe (NonEmptyArray M.InstitutionPolicy) ->
  Boolean ->
  Maybe M.Location
injectLocationFields
  (Just institutionID)
  (Just institutionName)
  (Just institutionType)
  superOrganizationName
  (Just institutionContact)
  (Just institutionSustainability)
  (Just institutionPolicies)
  versioning = pure $ {
    institutionID: institutionID
  , institutionName: institutionName
  , institutionType: institutionType
  , superOrganizationName: superOrganizationName
  , institutionContact: institutionContact
  , institutionSustainability: institutionSustainability
  , institutionPolicies: institutionPolicies
  , versioning: versioning
  }
injectLocationFields _ _ _ _ _ _ _ _ = Nothing

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
    let identMay = injectIdentFields identOpt
    instNameMay <- textInput D.span' "Institution Name: " $
      Opt.get (SProxy :: _ "institutionName") locOpt
    instTypeMay <- labelSig' D.h3' "Institution Type" $ menuSignal $
      Opt.get (SProxy :: _ "institutionType") locOpt
    display D.br'
    sOrgMay <- textInput D.span' "Super Organization (optional): " $
      join $ Opt.get (SProxy :: _ "superOrganizationName") locOpt
    icMay <- MF.contactSignal $ Opt.get (SProxy :: _ "institutionContact") locOpt
    -- display $ D.div' [D.text $ "Contact" <> (show icMay)]  -- FIXME: DEBUG
    sustainOpt <- accumulateSustain "Institution Sustainability:" $
      getOpt (SProxy :: _ "iSustain_opt") locOpt
    let sustainMay = injectSustainFields sustainOpt
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
    newLocMay <- pure $ injectLocationFields -- TODO: use sequencing to get newLocMay from newLoc
      identMay
      instNameMay
      instTypeMay
      sOrgMay
      icMay
      sustainMay
      polsMay
      versioning
{-     _ <- consoleShow $ "identMay: " <> show (Opt.get (SProxy :: _ "institutionID") newLoc) -- FIXME
    _ <- consoleShow $ "instNameMay: " <> show (Opt.get (SProxy :: _ "institutionName") newLoc) -- FIXME
    _ <- consoleShow $ "instTypeMay: " <> show (Opt.get (SProxy :: _ "institutionType") newLoc) -- FIXME
    _ <- consoleShow $ "sOrgMay: " <> show (Opt.get (SProxy :: _ "superOrganizationName") newLoc) -- FIXME
    _ <- consoleShow $ "icMay: " <> show (Opt.get (SProxy :: _ "institutionContact") newLoc) -- FIXME
    _ <- consoleShow $ "sustainMay: " <> show (Opt.get (SProxy :: _ "institutionSustainability") newLoc) -- FIXME
    _ <- consoleShow $ "polsMay: " <> show (Opt.get (SProxy :: _ "institutionPolicies") newLoc) -- FIXME
    _ <- consoleShow $ "versioning: " <> show (versioning) -- FIXME -}

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
 -- testWidget
   dyn $ accumulateLocation

injectSustainFields ::
  Opt.Option InstitutionSustainabilityRowOpts ->
  Maybe M.InstitutionSustainability
injectSustainFields sustOpt = go
  (Opt.get (SProxy :: _ "missionStatementURL") sustOpt)
  (Opt.get (SProxy :: _ "fundingStatementURL") sustOpt)
  where
    go (Just mission) (Just funding) = pure $ {
      missionStatementURL: mission
    , fundingStatementURL: funding
    }
    go _ _ = Nothing

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

injectIdentFields :: -- TODO: use "sequence"
  Opt.Option (M.BaseIdRows ()) -> Maybe M.Identifier
injectIdentFields idOpt = go
  (Opt.get (SProxy :: _ "id") idOpt)
  (Opt.get (SProxy :: _ "idType") idOpt)
  where
    go (Just id) (Just idType) = pure $ {
      id: id
    , idType: idType
    }
    go _ _ = Nothing

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