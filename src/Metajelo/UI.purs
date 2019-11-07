module Metajelo.UI where

import Prelude (Unit, bind, discard, join, pure, unit, ($), (<$>), (>>=), (<>))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, loopS, step)
import Concur.React (HTML)
import Concur.React.DOM as D
-- import Concur.React.Props as P
import Concur.React.Run (runWidgetInDom)
import Control.Monad.State
import Data.Array.NonEmpty (NonEmptyArray)
import Data.Either (Either(..), hush)
import Data.Foldable (fold, foldMap)
import Data.Maybe (Maybe(..))
import Data.String.NonEmpty (NonEmptyString, fromString,toString)
import Data.Symbol (class IsSymbol, SProxy(..))
import Data.Tuple (Tuple(..), fst, snd)
import Effect (Effect)
import Metajelo.Forms as MF
import Metajelo.FormUtil (CtrlSignal, arrayView, checkBoxS,
  labelSig, labelSig', menuSignal, textInput, urlInput, consoleShow)
import Metajelo.Types as M
import Metajelo.View as MV
import Option as Opt
import Prim.Row as Prim.Row
import Text.URL.Validate (URL)

-- import Data.Newtype (unwrap)
-- import Data.Semigroup.First (First(..))

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

page :: ∀ a. Widget HTML a
page = do
   -- _ <- dyn $ formatSigArray (Tuple 0 [])
   dyn $ accumulateLocation

-- | ViewModel for SupplementaryProduct
type SupplementaryProductExtra r = (
  basicMetadata_opt :: Opt.Option M.BasicMetadataRows
, resourceID_opt :: Opt.Option (M.BaseIdRows ())
, resourceType_opt :: Opt.Option M.ResourceTypeRows
, _numFormats :: Int
, resMdsOpts_opt :: Opt.Option ResourceMetadataSourceRowOpts
, locationOpts_opt :: Opt.Option LocationRowOpts
| r
)
-- | Decorated state (Model + ViewModel) for SupplementaryProduct
type SupplementaryProductRowOpts =
  SupplementaryProductExtra M.SupplementaryProductRows

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
type InstitutionSustainabilityRowOpts =
  InstitutionSustainabilityExtraRows M.InstitutionSustainabilityRows

-- | ViewModel for ResourceMetadataSource
type ResourceMetadataSourceExtraRows r = (
  url_Ei :: Either String URL
| r
)
-- | Decorated state (Model + ViewModel) for ResourceMetadataSource
type ResourceMetadataSourceRowOpts =
  ResourceMetadataSourceExtraRows M.ResourceMetadataSourceRows

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
    -- | Updates the Model + ViewModel for a Location record
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
  where
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

accumulateIdent :: String -> CtrlSignal HTML (Opt.Option (M.BaseIdRows ()))
accumulateIdent idLabel oldId = labelSig' D.h3' idLabel do
  idMay <- textInput D.span' "Record Identifier: " $
    Opt.get (SProxy :: _ "id") oldId
  idTypeMay <- labelSig' D.span' "Identifier Type" $ menuSignal $
    Opt.get (SProxy :: _ "idType") oldId
  pure $ injectIdentFields oldId idMay idTypeMay
  where
    injectIdentFields ::
      Opt.Option (M.BaseIdRows ()) ->
      Maybe NonEmptyString ->
      Maybe M.IdentifierType ->
      Opt.Option (M.BaseIdRows ())
    injectIdentFields
      oldOpt idMay idTypeMay = execState (do
        get >>= Opt.maySetOptState (SProxy :: _ "id") idMay
        get >>= Opt.maySetOptState (SProxy :: _ "idType") idTypeMay
      ) oldOpt

accumulateBasicMetaData :: CtrlSignal HTML (Opt.Option M.BasicMetadataRows)
accumulateBasicMetaData oldBMD = labelSig' D.h3' "Basic Metadata" do
  titleMay <- textInput D.span' "Title: " $
    Opt.get (SProxy :: _ "title") oldBMD
  creatorMay <- textInput D.span' "Creator: " $
    Opt.get (SProxy :: _ "creator") oldBMD
  pubYearMay <- textInput D.span' "Publication Year: " $
    Opt.get (SProxy :: _ "publicationYear") oldBMD
  pure $ injectBMDFields oldBMD titleMay creatorMay pubYearMay
  where
    injectBMDFields ::
      Opt.Option (M.BasicMetadataRows) ->
      Maybe NonEmptyString ->
      Maybe NonEmptyString ->
      Maybe M.XsdDate ->
      Opt.Option (M.BasicMetadataRows)
    injectBMDFields oldOpt titleMay creatorMay pubYearMay = execState (do
        get >>= Opt.maySetOptState (SProxy :: _ "title") titleMay
        get >>= Opt.maySetOptState (SProxy :: _ "creator") creatorMay
        get >>= Opt.maySetOptState (SProxy :: _ "publicationYear") pubYearMay
      ) oldOpt

accumulateResType :: CtrlSignal HTML (Opt.Option M.ResourceTypeRows)
accumulateResType oldRT = labelSig' D.h3' "Resource Type" do
  descMay <- textInput D.span' "Description: " $
    join $ fromString <$> Opt.get (SProxy :: _ "description") oldRT
  genTypMay <- labelSig' D.span' "General Type: " $ menuSignal $
    Opt.get (SProxy :: _ "generalType") oldRT
  pure $ injectResTypeFields oldRT (toString <$> descMay) genTypMay
  where
    injectResTypeFields ::
      Opt.Option M.ResourceTypeRows ->
      Maybe String ->
      Maybe M.ResourceTypeGeneral ->
      Opt.Option M.ResourceTypeRows
    injectResTypeFields
      oldOpt descMay genTypMay = execState (do
        get >>= Opt.maySetOptState (SProxy :: _ "description") descMay
        get >>= Opt.maySetOptState (SProxy :: _ "generalType") genTypMay
      ) oldOpt

formatSignal :: CtrlSignal HTML (Maybe M.Format)
formatSignal formatMay = textInput D.h3' "Format: " formatMay

formatSigArray :: CtrlSignal HTML (Tuple Int (Array M.Format))
formatSigArray formats = labelSig (D.div' [
  D.h2' [D.text "Formats"], D.text tipText
]) $ arrayView formatSignal formats
  where
    tipText = "Technical format of the resource." <>
      "Use file extension or MIME type where possible."

accumulateResMdSource :: CtrlSignal HTML (Opt.Option ResourceMetadataSourceRowOpts)
accumulateResMdSource oldRMDS = labelSig' D.h3' "Resource Metadata Source" do
  url_Ei <- urlInput D.span' "URL: " $
    Opt.getWithDefault (Left "") (SProxy :: _ "url_Ei") oldRMDS
  let urlMay = hush url_Ei
  relTypMay <- labelSig' D.span' "Relation Type: " $ menuSignal $
    Opt.get (SProxy :: _ "relationType") oldRMDS
  pure $ injectResMdSourceFieldsOpt oldRMDS url_Ei urlMay relTypMay
  where
    injectResMdSourceFieldsOpt ::
      Opt.Option ResourceMetadataSourceRowOpts ->
      Either String URL ->
      Maybe URL ->
      Maybe M.RelationType ->
      Opt.Option ResourceMetadataSourceRowOpts
    injectResMdSourceFieldsOpt oldOpt url_Ei urlMay relTypMay = execState (do
        get >>= Opt.maySetOptState (SProxy :: _ "url_Ei")
          (Just url_Ei)
        get >>= Opt.maySetOptState (SProxy :: _ "url")
          urlMay
        get >>= Opt.maySetOptState (SProxy :: _ "relationType") relTypMay
      ) oldOpt

-- TODO: PR to purescript-option
getOpt ::
  forall label option option' proxy suboption.
  IsSymbol label =>
  Prim.Row.Cons label (Opt.Option suboption) option' option =>
  proxy label ->
  Opt.Option option ->
  Opt.Option suboption
getOpt = Opt.getWithDefault Opt.empty