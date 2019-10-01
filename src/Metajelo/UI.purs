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
import Effect (Effect)
import Metajelo.Forms as MF
import Metajelo.FormUtil (checkBoxS, labelSig', menuSignal, textInput, urlInput, consoleShow)
import Metajelo.Types as M
import Metajelo.View as MV
import Option as Opt
import Prim.Row as Prim.Row
import Text.URL.Validate (URL)
import Type.Equality (class TypeEquals)

main :: Effect Unit
main = pure unit

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

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
  Opt.Option M.LocationRows ->
  Maybe M.InstitutionID ->
  Maybe NonEmptyString ->
  Maybe M.InstitutionType ->
  Maybe NonEmptyString ->
  Maybe M.InstitutionContact ->
  Maybe M.InstitutionSustainability ->
  Maybe (NonEmptyArray M.InstitutionPolicy) ->
  Boolean ->
  Opt.Option M.LocationRows
injectLocationFieldsOpt
  oldOpt
  institutionIDMay
  institutionNameMay
  institutionTypeMay
  superOrganizationName
  institutionContactMay
  institutionSustainabilityMay
  institutionPoliciesMay
  versioning = execState (do
    get >>= maySetOptState (SProxy :: _ "institutionID") institutionIDMay
    get >>= maySetOptState (SProxy :: _ "institutionName") institutionNameMay
    get >>= maySetOptState (SProxy :: _ "institutionType") institutionTypeMay
    get >>= maySetOptState (SProxy :: _ "superOrganizationName")
      (Just superOrganizationName)
    get >>= maySetOptState (SProxy :: _ "institutionContact")
      institutionContactMay
    get >>= maySetOptState (SProxy :: _ "institutionSustainability")
      institutionSustainabilityMay
    get >>= maySetOptState (SProxy :: _ "institutionPolicies")
      institutionPoliciesMay
    get >>= maySetOptState (SProxy :: _ "versioning") (Just versioning)
  ) oldOpt

 -- FIXME: DEBUG
accumulateLocationLoopDebug1 ::  Signal HTML (Opt.Option M.LocationRows)
accumulateLocationLoopDebug1 = labelSig' D.h1' "Location" $ loopS Opt.empty \locOpt -> D.div_ [] do
  instNameMay <- textInput D.span' "Institution Name: "
  display $ D.div' [D.text $ "Testing: " <> (show instNameMay)]
  pure locOpt

 -- FIXME: DEBUG
accumulateLocationLoopDebug2 ::  Signal HTML (Maybe NonEmptyString)
accumulateLocationLoopDebug2 = labelSig' D.h1' "Location" $ loopS Nothing \oldNameMay -> D.div_ [] do
  instNameMay <- textInput D.span' "Institution Name: "
  display $ D.div' [D.text $ "Old Name: " <> (show oldNameMay)]
  display $ D.div' [D.text $ "New Name: " <> (show instNameMay)]
  pure instNameMay

accumulateLocationLoop ::  Signal HTML (Opt.Option M.LocationRows)
accumulateLocationLoop = labelSig' D.h1' "Location" $ loopS Opt.empty \locOpt -> D.div_ [] do
  identMay <- accumulateIdent "Identifier"
  instNameMay <- textInput D.span' "Institution Name: "
  display $ D.div' [D.text $ "Testing: " <> (show instNameMay)] -- FIXME: DEBUG
  instTypeMay <- labelSig' D.h3' "Institution Type" $ menuSignal Nothing
  display D.br'
  sOrgMay <- textInput D.span' "Super Organization (optional): "
  icMay <- contactSignalInit
  display $ D.div' [D.text $ "Contact" <> (show icMay)]  -- FIXME: DEBUG
  missionUrlMay <- urlInput D.span' "Mission Statement URL: "
  fundingUrlMay <- urlInput D.span' "Funding Statement URL: "
  sustainMay <- pure $ injectSustainFields missionUrlMay fundingUrlMay
  polsMay <- MF.policySigArray Nothing
  versioning <- labelSig' D.span' "versioning? " $ checkBoxS false
  newLoc <- pure $ injectLocationFieldsOpt locOpt
    identMay
    instNameMay
    instTypeMay
    sOrgMay
    icMay
    sustainMay
    polsMay
    versioning
  display $ D.div' [D.text $ "Testing2: " <> ( show (Opt.get (SProxy :: _ "institutionName") newLoc))] -- FIXME: DEBUG
  newLocMay <- pure $ injectLocationFields -- TODO: use sequencing to get newLocMay from newLoc
    (tryNew identMay $ Opt.get (SProxy :: _ "institutionID") newLoc)
    (tryNew instNameMay $ Opt.get (SProxy :: _ "institutionName") newLoc)
    (tryNew instTypeMay $ Opt.get (SProxy :: _ "institutionType") newLoc)
    (tryNew sOrgMay (join $ Opt.get (SProxy :: _ "superOrganizationName") newLoc))
    (tryNew icMay $ Opt.get (SProxy :: _ "institutionContact") newLoc)
    (tryNew sustainMay $ Opt.get (SProxy :: _ "institutionSustainability") newLoc)
    (tryNew polsMay $ Opt.get (SProxy :: _ "institutionPolicies") newLoc)
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
    contactSignalInit = MF.contactSignal Nothing
    locWidg :: forall a. Maybe M.Location ->  Widget HTML a
    locWidg locMay = D.div' [
      D.h3' [D.text "Last submitted location summary for this product:"]
    , D.br'
    , foldMap (\loc -> fold $ MV.spacify $ MV.locElems loc) locMay
    ]

tryNew :: ∀ a. Maybe a -> Maybe a -> Maybe a
tryNew new@(Just _) _ = new
tryNew _ old = old

-- FIXME: FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME
-- FIXME: FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME
-- FIXME: accumulation does not work; stale values are dropped upon re-render
-- FIXME: this is because Maybe Location does not contain partial info
-- FIXME: FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME
-- FIXME: FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME FIXME

accumulateLocation :: Maybe M.Location -> Signal HTML (Maybe M.Location)
accumulateLocation locMay = labelSig' D.h1' "Location" do
  identMay <- accumulateIdent "Identifier"
  instNameMay <- textInput D.span' "Institution Name: "
  display $ D.div' [D.text $ "Testing: " <> (show instNameMay)] -- FIXME: DEBUG
  instTypeMay <- labelSig' D.h3' "Institution Type" $ menuSignal Nothing
  display D.br'
  sOrgMay <- textInput D.span' "Super Organization (optional): "
  icMay <- contactSignalInit
  display $ D.div' [D.text $ "Contact" <> (show icMay)]  -- FIXME: DEBUG
  missionUrlMay <- urlInput D.span' "Mission Statement URL: "
  fundingUrlMay <- urlInput D.span' "Funding Statement URL: "
  sustainMay <- pure $ injectSustainFields missionUrlMay fundingUrlMay
  polsMay <- MF.policySigArray Nothing
  versioning <- labelSig' D.span' "versioning? " $ checkBoxS false
  newLocMay <- pure $ injectLocationFields
    identMay
    instNameMay
    instTypeMay
    sOrgMay
    icMay
    sustainMay
    polsMay
    versioning
  _ <- consoleShow $ "identMay: " <> show identMay -- FIXME
  _ <- consoleShow $ "instNameMay: " <> show instNameMay -- FIXME
  _ <- consoleShow $ "instTypeMay: " <> show instTypeMay -- FIXME
  _ <- consoleShow $ "sOrgMay: " <> show sOrgMay -- FIXME
  _ <- consoleShow $ "icMay: " <> show icMay -- FIXME
  _ <- consoleShow $ "sustainMay: " <> show sustainMay -- FIXME
  _ <- consoleShow $ "polsMay: " <> show polsMay -- FIXME
  _ <- consoleShow $ "versioning: " <> show versioning -- FIXME

  display $ locWidg
  pure newLocMay
  where
    contactSignalInit = MF.contactSignal Nothing
    locWidg :: forall a. Widget HTML a
    locWidg = D.div' [
      D.h3' [D.text "Last submitted location summary for this product:"]
    , D.br'
    , foldMap (\loc -> fold $ MV.spacify $ MV.locElems loc) locMay
    ]

page :: ∀ a. Widget HTML a
page = do
  -- dyn $ accumulateLocation Nothing
 dyn $ accumulateLocationLoopDebug2

injectSustainFields ::
  Maybe URL ->
  Maybe URL ->
  Maybe M.InstitutionSustainability
injectSustainFields
 (Just mission)
 (Just funding) = pure $ {
   missionStatementURL: mission
 , fundingStatementURL: funding
 }
injectSustainFields _ _ = Nothing

injectIdentFields ::
  Maybe NonEmptyString ->
  Maybe M.IdentifierType ->
  Maybe M.Identifier
injectIdentFields
  (Just id)
  (Just idType) = pure $ {
    id: id
  , idType: idType
  }
injectIdentFields _ _ = Nothing

accumulateIdent :: String -> Signal HTML (Maybe M.Identifier)
accumulateIdent idLabel = labelSig' D.h3' idLabel do
  idMay <- textInput D.span' "Record Identifier: "
  idTypeMay <- labelSig' D.span' "Identifier Type" $ menuSignal Nothing
  pure $ injectIdentFields idMay idTypeMay

setMay ::
  forall label option option' proxy value.
  IsSymbol label =>
  Prim.Row.Cons label value option' option =>
  proxy label ->
  Maybe value ->
  Opt.Option option ->
  Opt.Option option
setMay proxy vMay def = Opt.modify proxy go def
  where
  go :: value -> value
  go optVal = case vMay of
    Just v -> v
    Nothing -> optVal

maySetOptState :: forall label option option' proxy value.
  IsSymbol label =>
  Prim.Row.Cons label value option' option =>
  proxy label ->
  Maybe value ->
  Opt.Option option ->
  State (Opt.Option option) Unit
maySetOptState proxy vMay def = put $ setMay proxy vMay def
