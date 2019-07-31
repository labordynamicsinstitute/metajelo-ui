module Metajelo.UI where

import Prelude (Unit, bind, discard, pure, show, unit, ($), (<>), (<$>), (==), (<<<))

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
import Effect (Effect)
import Metajelo.Forms as MF
import Metajelo.FormUtil (labelSig', menuSignal)
import Metajelo.Types as M
import Metajelo.View as MV

main :: Effect Unit
main = pure unit

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

locNameSig :: Maybe String -> Signal HTML (Maybe String)
locNameSig nameMay = step nameMay do
  newName <- D.div' [
    D.h3' [D.text "Institution Name"]
  , D.input [P.unsafeTargetValue <$> P.onChange]
  ]
  pure $ locNameSig $ if newName == "" then Nothing else Just newName

-- locNameSig :: Maybe String -> Signal HTML (Maybe String)
-- locNameSig nameMay = D.div_ [] do
--   display $ D.h3' [D.text "Institution Name"]
--   newName <- step "" $ D.input [pure <<< P.unsafeTargetValue <$> P.onChange]
--   pure $ if newName == "" then Nothing else Just newName

injectLocationFields ::
  Maybe M.InstitutionID ->
  Maybe String ->
  Maybe M.InstitutionType ->
  Maybe (Maybe String) ->
  Maybe M.InstitutionContact ->
  Maybe M.InstitutionSustainability ->
  Maybe (NonEmptyArray M.InstitutionPolicy) ->
  Maybe Boolean ->
  Maybe M.Location
injectLocationFields
  (Just institutionID)
  (Just institutionName)
  (Just institutionType)
  (Just superOrganizationName)
  (Just institutionContact)
  (Just institutionSustainability)
  (Just institutionPolicies)
  (Just versioning) = pure $ {
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

accumulateLocation :: Maybe M.Location -> Signal HTML (Maybe M.Location)
accumulateLocation locMay = D.div_ [] do
  display $ D.h1' [D.text "Location"]
  instNameMay <- locNameSig Nothing
  display $ D.div' [D.text $ "Testing: " <> (show instNameMay)] -- FIXME: DEBUG
  instTypeMay <- labelSig' D.h3' "Institution Type" $ menuSignal Nothing
  icMay <- MF.contactSignal Nothing
  polsMay <- MF.policySigArray Nothing
  newLocMay <- pure $ injectLocationFields
    Nothing
    instNameMay
    instTypeMay
    Nothing
    icMay
    Nothing
    polsMay
    Nothing
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


