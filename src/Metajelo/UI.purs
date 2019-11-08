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
  labelSig, labelSig', menuSignal, nonEmptyArrayView, textInput,
  urlInput, consoleShow)
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
   dyn $ accumulateSuppProd

{- type MetajeloRecordExtra r = (
  identifier_opt :: Opt.Option (M.BaseIdRows ())
, 

) -}

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

{- accumulateMetajeloRecord ::  Signal HTML (Opt.Option SupplementaryProductRowOpts)
accumulateMetajeloRecord = labelSig' D.h1' "Supplementary Product" $
  loopS Opt.empty \recOpt -> D.div_ [] do
    basicMdOpt <- accumulateBasicMetaData $ 
      getOpt (SProxy :: _ "basicMetadata_opt") recOpt
    let basicMdMay = Opt.getAll basicMdOpt
    redIdOpt <- accumulateIdent "Resource ID" $
      getOpt (SProxy :: _ "resourceID_opt") recOpt
    let resIdMay = Opt.getAll redIdOpt
    resTypeOpt <- accumulateResType $
      getOpt (SProxy :: _ "resourceType_opt") recOpt
    let resTypeMay = Opt.getSubset resTypeOpt
    formatsTup <- formatSigArray $ Tuple
      (Opt.getWithDefault 0 (SProxy :: _ "_numFormats") recOpt)
      (Opt.getWithDefault [] (SProxy :: _ "format") recOpt)
    let _numFormats = fst formatsTup
    let formats = snd formatsTup
    resMdOpt <- accumulateResMdSource $
      getOpt (SProxy :: _ "resMdsOpts_opt") recOpt
    let resMdMay = Opt.getSubset resMdOpt
    locOpt <- accumulateLocation $
      getOpt (SProxy :: _ "locationOpts_opt") recOpt
    let locMay = Opt.getSubset locOpt
    newProd <- pure $ execState (do
      get >>= Opt.maySetOptState (SProxy :: _ "basicMetadata_opt")
        (Just basicMdOpt)
      get >>= Opt.maySetOptState (SProxy :: _ "basicMetadata") basicMdMay
      get >>= Opt.maySetOptState (SProxy :: _ "resourceID_opt") (Just redIdOpt)
      get >>= Opt.maySetOptState (SProxy :: _ "resourceID") (Just resIdMay)
      get >>= Opt.maySetOptState (SProxy :: _ "resourceType_opt")
        (Just resTypeOpt)
      get >>= Opt.maySetOptState (SProxy :: _ "resourceType") resTypeMay
      get >>= Opt.maySetOptState (SProxy :: _ "_numFormats") (Just _numFormats)
      get >>= Opt.maySetOptState (SProxy :: _ "format") (Just formats)
      get >>= Opt.maySetOptState (SProxy :: _ "resMdsOpts_opt") (Just resMdOpt)
      get >>= Opt.maySetOptState (SProxy :: _ "resourceMetadataSource")
        (Just resMdMay)
      get >>= Opt.maySetOptState (SProxy :: _ "locationOpts_opt") (Just locOpt)
      get >>= Opt.maySetOptState (SProxy :: _ "location") locMay
    ) recOpt
    let newProdMay = Opt.getSubset newProd
    display $ prodWidg newProdMay
    pure newProd
  where
    prodWidg :: forall a. Maybe M.SupplementaryProduct ->  Widget HTML a
    prodWidg prodMay = D.div' [
      D.h3' [D.text "Product preview:"]
    , D.br'
    , fold $ MV.mkSupplementaryProductWidget <$> prodMay
    ]
   -}

accumulateSuppProd ::  Signal HTML (Opt.Option SupplementaryProductRowOpts)
accumulateSuppProd = labelSig' D.h1' "Supplementary Product" $
  loopS Opt.empty \prodOpt -> D.div_ [] do
    basicMdOpt <- accumulateBasicMetaData $ 
      getOpt (SProxy :: _ "basicMetadata_opt") prodOpt
    let basicMdMay = Opt.getAll basicMdOpt
    redIdOpt <- accumulateIdent "Resource ID" $
      getOpt (SProxy :: _ "resourceID_opt") prodOpt
    let resIdMay = Opt.getAll redIdOpt
    resTypeOpt <- accumulateResType $
      getOpt (SProxy :: _ "resourceType_opt") prodOpt
    let resTypeMay = Opt.getSubset resTypeOpt
    formatsTup <- formatSigArray $ Tuple
      (Opt.getWithDefault 0 (SProxy :: _ "_numFormats") prodOpt)
      (Opt.getWithDefault [] (SProxy :: _ "format") prodOpt)
    let _numFormats = fst formatsTup
    let formats = snd formatsTup
    resMdOpt <- accumulateResMdSource $
      getOpt (SProxy :: _ "resMdsOpts_opt") prodOpt
    let resMdMay = Opt.getSubset resMdOpt
    locOpt <- accumulateLocation $
      getOpt (SProxy :: _ "locationOpts_opt") prodOpt
    let locMay = Opt.getSubset locOpt
    newProd <- pure $ execState (do
      get >>= Opt.maySetOptState (SProxy :: _ "basicMetadata_opt")
        (Just basicMdOpt)
      get >>= Opt.maySetOptState (SProxy :: _ "basicMetadata") basicMdMay
      get >>= Opt.maySetOptState (SProxy :: _ "resourceID_opt") (Just redIdOpt)
      get >>= Opt.maySetOptState (SProxy :: _ "resourceID") (Just resIdMay)
      get >>= Opt.maySetOptState (SProxy :: _ "resourceType_opt")
        (Just resTypeOpt)
      get >>= Opt.maySetOptState (SProxy :: _ "resourceType") resTypeMay
      get >>= Opt.maySetOptState (SProxy :: _ "_numFormats") (Just _numFormats)
      get >>= Opt.maySetOptState (SProxy :: _ "format") (Just formats)
      get >>= Opt.maySetOptState (SProxy :: _ "resMdsOpts_opt") (Just resMdOpt)
      get >>= Opt.maySetOptState (SProxy :: _ "resourceMetadataSource")
        (Just resMdMay)
      get >>= Opt.maySetOptState (SProxy :: _ "locationOpts_opt") (Just locOpt)
      get >>= Opt.maySetOptState (SProxy :: _ "location") locMay
    ) prodOpt
    let newProdMay = Opt.getSubset newProd
    display $ prodWidg newProdMay
    pure newProd
  where
    prodWidg :: forall a. Maybe M.SupplementaryProduct ->  Widget HTML a
    prodWidg prodMay = D.div' [
      D.h3' [D.text "Product preview:"]
    , D.br'
    , fold $ MV.mkSupplementaryProductWidget <$> prodMay
    ]


accumulateLocation ::  CtrlSignal HTML (Opt.Option LocationRowOpts)
accumulateLocation locOpt = labelSig' D.h1' "Location" do
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
  newLoc <- pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "institutionID_opt") (Just identOpt)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionID") identMay
    get >>= Opt.maySetOptState (SProxy :: _ "institutionName") instNameMay
    get >>= Opt.maySetOptState (SProxy :: _ "institutionType") instTypeMay
    get >>= Opt.maySetOptState (SProxy :: _ "superOrganizationName") (Just sOrgMay)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionContact") icMay
    get >>= Opt.maySetOptState (SProxy :: _ "iSustain_opt") (Just sustainOpt)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionSustainability") sustainMay
    get >>= Opt.maySetOptState (SProxy :: _ "_numPolicies") (Just _numPolicies)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionPolicies") polsMay
    get >>= Opt.maySetOptState (SProxy :: _ "versioning") (Just versioning)
  ) locOpt
  let newLocMay = Opt.getSubset newLoc
  display $ locWidg newLocMay
  pure newLoc
  where
    locWidg :: forall a. Maybe M.Location ->  Widget HTML a
    locWidg locMay = D.div' [
      D.h3' [D.text "Location preview:"]
    , D.br'
    , foldMap (\loc -> fold $ MV.spacify $ MV.locElems loc) locMay
    ]

accumulateSustain :: String ->
  CtrlSignal HTML (Opt.Option InstitutionSustainabilityRowOpts)
accumulateSustain idLabel oldSust = labelSig' D.h3' idLabel do
  missionUrl_Ei <- urlInput D.span' "Mission Statement URL: " $
    Opt.getWithDefault (Left "") (SProxy :: _ "missionUrl_Ei") oldSust
  let missionUrlMay = hush missionUrl_Ei
  fundingUrl_Ei <- urlInput D.span' "Funding Statement URL: " $
    Opt.getWithDefault (Left "") (SProxy :: _ "fundingUrl_Ei") oldSust
  let fundingUrlMay = hush fundingUrl_Ei
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "missionUrl_Ei")
      (Just missionUrl_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "missionStatementURL")
      missionUrlMay
    get >>= Opt.maySetOptState (SProxy :: _ "fundingUrl_Ei")
      (Just fundingUrl_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "fundingStatementURL")
      fundingUrlMay
  ) oldSust

accumulateIdent :: String -> CtrlSignal HTML (Opt.Option (M.BaseIdRows ()))
accumulateIdent idLabel oldId = labelSig' D.h3' idLabel do
  idMay <- textInput D.span' "Record Identifier: " $
    Opt.get (SProxy :: _ "id") oldId
  idTypeMay <- labelSig' D.span' "Identifier Type" $ menuSignal $
    Opt.get (SProxy :: _ "idType") oldId
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "id") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "idType") idTypeMay
  ) oldId

accumulateRelatedIdent :: CtrlSignal HTML (Opt.Option M.RelatedIdentifierRows)
accumulateRelatedIdent oldId = labelSig' D.h3' "Related Identifier: " do
  idMay <- textInput D.span' "Record Identifier: " $
    Opt.get (SProxy :: _ "id") oldId
  idTypeMay <- labelSig' D.span' "Identifier Type" $ menuSignal $
    Opt.get (SProxy :: _ "idType") oldId
  relTypeMay <- labelSig' D.span' "Relation Type" $ menuSignal $
    Opt.get (SProxy :: _ "relType") oldId
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "id") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "idType") idTypeMay
    get >>= Opt.maySetOptState (SProxy :: _ "relType") relTypeMay
  ) oldId

relIdSigArray :: CtrlSignal HTML (Tuple Int (Maybe (NonEmptyArray M.RelatedIdentifier)))
relIdSigArray relIdsMay = labelSig' D.h2' "Related Identifiers" $
  nonEmptyArrayView accumulateRelatedIdent relIdsMay
  
accumulateBasicMetaData :: CtrlSignal HTML (Opt.Option M.BasicMetadataRows)
accumulateBasicMetaData oldBMD = labelSig' D.h3' "Basic Metadata" do
  titleMay <- textInput D.span' "Title: " $
    Opt.get (SProxy :: _ "title") oldBMD
  creatorMay <- textInput D.span' "Creator: " $
    Opt.get (SProxy :: _ "creator") oldBMD
  pubYearMay <- textInput D.span' "Publication Year: " $
    Opt.get (SProxy :: _ "publicationYear") oldBMD
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "title") titleMay
    get >>= Opt.maySetOptState (SProxy :: _ "creator") creatorMay
    get >>= Opt.maySetOptState (SProxy :: _ "publicationYear") pubYearMay
  ) oldBMD

accumulateResType :: CtrlSignal HTML (Opt.Option M.ResourceTypeRows)
accumulateResType oldRT = labelSig' D.h3' "Resource Type" do
  descMay <- textInput D.span' "Description: " $
    join $ fromString <$> Opt.get (SProxy :: _ "description") oldRT
  genTypMay <- labelSig' D.span' "General Type: " $ menuSignal $
    Opt.get (SProxy :: _ "generalType") oldRT
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "description") (toString <$> descMay)
    get >>= Opt.maySetOptState (SProxy :: _ "generalType") genTypMay
  ) oldRT

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
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "url_Ei")
      (Just url_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "url")
      urlMay
    get >>= Opt.maySetOptState (SProxy :: _ "relationType") relTypMay
  ) oldRMDS

-- TODO: PR to purescript-option
getOpt ::
  forall label option option' proxy suboption.
  IsSymbol label =>
  Prim.Row.Cons label (Opt.Option suboption) option' option =>
  proxy label ->
  Opt.Option option ->
  Opt.Option suboption
getOpt = Opt.getWithDefault Opt.empty