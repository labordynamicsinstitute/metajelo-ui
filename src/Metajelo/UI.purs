module Metajelo.UI where

import Prelude (Unit, bind, discard, join, pure, show, unit, void, ($), (<>), (<$>), (==), (<<<))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Concur.React.Run (runWidgetInDom)
import Data.Array.NonEmpty (NonEmptyArray)
import Data.Foldable (fold, foldMap)
import Data.Maybe (Maybe(..))
import Data.Show (show)
import Data.String.NonEmpty (NonEmptyString, fromString, toString)
import Effect (Effect)
import Metajelo.Forms as MF
import Metajelo.FormUtil (checkBoxS, labelSig', menuSignal, textInput, urlInput, consoleShow)
import Metajelo.Types as M
import Metajelo.View as MV
import Text.URL.Validate (URL)

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

page :: forall a. Widget HTML a
page = do
  dyn $ accumulateLocation Nothing

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


