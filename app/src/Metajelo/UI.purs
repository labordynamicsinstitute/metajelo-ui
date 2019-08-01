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
import Metajelo.FormUtil (checkBoxS, labelSig', menuSignal, textInput, urlInput)
import Metajelo.Types as M
import Metajelo.View as MV
import URL.Validator (URL)

main :: Effect Unit
main = pure unit

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page


injectLocationFields ::
  Maybe M.InstitutionID ->
  Maybe String ->
  Maybe M.InstitutionType ->
  Maybe String ->
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


-- TODO: revise Metajelo.Types, etc to use NonEmptyString as well
-- TODO: also add strip to textInput output filter (not textInput itself
--       which would prevent user from typing spaces)
injectIdentFields ::
  Maybe NonEmptyString ->
  Maybe M.IdentifierType ->
  Maybe M.Identifier
injectIdentFields
  (Just id)
  (Just idType) = pure $ {
    id: toString id
  , idType: idType
  }
injectIdentFields _ _ = Nothing

accumulateIdent :: String -> Signal HTML (Maybe M.Identifier)
accumulateIdent idLabel = labelSig' D.h3' idLabel do
  idMay0 <- textInput D.span' "Record Identifier: "
  idMay <- pure $ join $ fromString <$> idMay0 -- TODO: consolidate
  idTypeMay <- labelSig' D.span' "Identifier Type" $ menuSignal Nothing
  pure $ injectIdentFields idMay idTypeMay

accumulateLocation :: Maybe M.Location -> Signal HTML (Maybe M.Location)
accumulateLocation locMay = labelSig' D.h1' "Location" do
  identMay <- accumulateIdent "Identifier"
  instNameMay <- textInput D.span' "Institution Name: "
  display $ D.div' [D.text $ "Testing: " <> (show instNameMay)] -- FIXME: DEBUG
  instTypeMay <- labelSig' D.h3' "Institution Type" $ menuSignal Nothing
  display D.br'
  sOrgMay <- textInput D.span' "Super Organization (optional): "
  icMay <- MF.contactSignal Nothing
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
  display $ locWidg
  pure newLocMay
  where
    locWidg :: forall a. Widget HTML a
    locWidg = D.div' [
      D.h3' [D.text "Last submitted location summary for this product:"]
    , D.br'
    , foldMap (\loc -> fold $ MV.spacify $ MV.locElems loc) locMay
    ]

page :: forall a. Widget HTML a
page = do
  dyn $ accumulateLocation Nothing


