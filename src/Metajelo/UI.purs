module Metajelo.UI where

import Prelude (Unit, bind, discard, identity, join, pure, show, unit, void, ($), (<>), (<$>), (==), (>>=))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, loopS, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Concur.React.Run (runWidgetInDom)
import Control.Monad.State
import Data.Array.NonEmpty (NonEmptyArray)
import Data.Foldable (fold, foldMap)
import Data.Maybe (Maybe(..))
import Data.Show (show)
import Data.String.NonEmpty (NonEmptyString, fromString, toString)
import Data.Symbol (class IsSymbol, SProxy(..))
import Data.Tuple (Tuple(..), fst, snd)
import Effect (Effect)
import Metajelo.Forms as MF
import Metajelo.FormUtil (CtrlSignal, checkBoxS, foldf, labelSig', menuSignal, textInput, textInput', urlInput, consoleShow)
import Metajelo.Types as M
import Metajelo.View as MV
import Option as Opt
import Prim.Row as Prim.Row
import Text.URL.Validate (URL)
import Type.Equality (class TypeEquals)

import Data.Newtype (class Newtype, unwrap, wrap)
import Data.Semigroup.First (First(..))

main :: Effect Unit
main = pure unit

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

-- | Decorated state (Model + ViewModel) for Location
type LocationRowOpts = (
  institutionID_opt :: Opt.Option (M.BaseIdRows ())
, _numPolicies :: Int
, iSustain_opt :: Opt.Option M.InstitutionSustainabilityRows
| M.LocationRows
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
  Opt.Option M.InstitutionSustainabilityRows ->
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

testWidget :: forall a. Widget HTML a
testWidget = dyn $ loopS Nothing \oldNameMay -> D.div_ [] do
  instNameMay <- textInput Nothing
  -- If I remove the line below, then New Name is always Nothing
  instNameMay <- pure $ unwrap (First instNameMay <> First oldNameMay)
  display $ D.div' [D.text $ "Old Name: " <> (show oldNameMay)]
  display $ D.div' [D.text $ "New Name: " <> (show instNameMay)]
  pure instNameMay
  where
  textInput :: Maybe String -> Signal HTML (Maybe String)
  textInput ms = step ms do
    newTxt <- D.input [P.unsafeTargetValue <$> P.onChange]
    pure $ textInput (Just newTxt)

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
    display $ D.div' [D.text $ "Contact" <> (show icMay)]  -- FIXME: DEBUG
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
    display $ D.div' [D.text $ "Testing ID: " <> ( show (Opt.get (SProxy :: _ "institutionID") newLoc))] -- FIXME: DEBUG
    display $ D.div' [D.text $ "Testing: Name" <> ( show (Opt.get (SProxy :: _ "institutionName") newLoc))] -- FIXME: DEBUG
    newLocMay <- pure $ injectLocationFields -- TODO: use sequencing to get newLocMay from newLoc
      identMay
      instNameMay
      instTypeMay
      sOrgMay
      icMay
      sustainMay
      polsMay
      versioning
    _ <- consoleShow $ "identMay: " <> show (Opt.get (SProxy :: _ "institutionID") newLoc) -- FIXME
    _ <- consoleShow $ "instNameMay: " <> show (Opt.get (SProxy :: _ "institutionName") newLoc) -- FIXME
    _ <- consoleShow $ "instTypeMay: " <> show (Opt.get (SProxy :: _ "institutionType") newLoc) -- FIXME
    _ <- consoleShow $ "sOrgMay: " <> show (Opt.get (SProxy :: _ "superOrganizationName") newLoc) -- FIXME
    _ <- consoleShow $ "icMay: " <> show (Opt.get (SProxy :: _ "institutionContact") newLoc) -- FIXME
    _ <- consoleShow $ "sustainMay: " <> show (Opt.get (SProxy :: _ "institutionSustainability") newLoc) -- FIXME
    _ <- consoleShow $ "polsMay: " <> show (Opt.get (SProxy :: _ "institutionPolicies") newLoc) -- FIXME
    _ <- consoleShow $ "versioning: " <> show (versioning) -- FIXME

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
 -- dyn $ accumulateLocationLoopDebug2

injectSustainFields ::
  Opt.Option M.InstitutionSustainabilityRows ->
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
  Opt.Option M.InstitutionSustainabilityRows ->
  Maybe URL ->
  Maybe URL ->
  Opt.Option M.InstitutionSustainabilityRows
injectSustainFieldsOpt
  oldOpt
  missionUrlMay
  fundingUrlMay = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "missionStatementURL")
      missionUrlMay
    get >>= Opt.maySetOptState (SProxy :: _ "fundingStatementURL")
      fundingUrlMay
  ) oldOpt

accumulateSustain :: String ->
  CtrlSignal HTML (Opt.Option M.InstitutionSustainabilityRows)
accumulateSustain idLabel oldSust = labelSig' D.h3' idLabel do
  missionUrlMay <- urlInput D.span' "Mission Statement URL: " $
    Opt.get (SProxy :: _ "missionStatementURL") oldSust
  fundingUrlMay <- urlInput D.span' "Funding Statement URL: " $
    Opt.get (SProxy :: _ "fundingStatementURL") oldSust
  pure $ injectSustainFieldsOpt oldSust missionUrlMay fundingUrlMay

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