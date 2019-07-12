module Metajelo.UI where

import Prelude (Unit, bind, discard, pure, unit, ($), (<>))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Run (runWidgetInDom)
import Data.Array.NonEmpty (NonEmptyArray)
import Data.Foldable (fold, foldMap)
import Data.Maybe (Maybe(..))
import Data.Show (show)
import Effect (Effect)
import Metajelo.Forms as MF
import Metajelo.Types as M
import Metajelo.View as MV

main :: Effect Unit
main = pure unit

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

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
  icMay <- MF.contactSignal Nothing
  newLocMay <- pure $ injectLocationFields
    Nothing
    Nothing
    Nothing
    Nothing
    icMay
    Nothing
    Nothing
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

-- TODO: so far just a test of retrieving data from signals
accumulateRecord :: String -> Signal HTML String
accumulateRecord str = D.div_ [] do
  ic <- MF.contactSignal Nothing
  let icString = show $ ic
  let newStr = "Completed Data from forms:\n" <> icString
  display $ D.text newStr
  pure newStr

page :: forall a. Widget HTML a
page = do
  dyn $ accumulateRecord ""


