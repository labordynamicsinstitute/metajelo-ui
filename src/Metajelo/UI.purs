module Metajelo.UI where

import Prelude (Unit, bind, discard, join, map, pure, unit, ($), (<$>), (>>=), (<>))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, loopS, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Concur.React.Run (runWidgetInDom)
import Control.Monad.State
import Control.Plus (empty)
import Data.Array.NonEmpty (NonEmptyArray)
import Data.Either (Either(..), hush)
import Data.Foldable (fold, foldMap)
import Data.Maybe (Maybe(..), fromMaybe, maybe)
import Data.String.NonEmpty (fromString,toString)
import Data.Symbol (class IsSymbol, SProxy(..))
import Data.Traversable (sequence)
import Data.Tuple (Tuple(..), fst, snd)
import Effect (Effect)
import Effect.Class (liftEffect)
import Effect.Class.Console (log)
import Global (encodeURIComponent)
import Metajelo.Forms as MF
import Metajelo.FormUtil (CtrlSignal, arrayView, checkBoxS, dateTimeSig, formatXsdDate,
  initDate, labelSig, labelSig', menuSignal, nonEmptyArrayView, textInput,
  urlInput, consoleShow)
import Metajelo.Types as M
import Metajelo.View as MV
import Metajelo.XPaths.Write as MXW
-- import Metajelo.CSS.UI.ClassNames as MCN
import Metajelo.CSS.UI.ClassProps as MC
import Metajelo.CSS.Web.ClassProps as MWC -- TODO: change occurrences to something UI-specific!
-- import Metajelo.CSS.UI.Util (cList)
import Nonbili.DOM (copyToClipboard)
import Option as Opt
import Prim.Row as Prim.Row
import Text.URL.Validate (URL)
import Web.HTML (window) as DOM
import Web.DOM.Document (createElement) as DOM
import Web.DOM.Element (setAttribute) as DOM
import Web.HTML.HTMLDocument (toDocument) as HTML
import Web.HTML.HTMLElement (HTMLElement)
import Web.HTML.HTMLElement (click) as DOM
import Web.HTML.HTMLElement (fromElement) as HTML
import Web.HTML.Window (document) as DOM

-- import Data.Newtype (unwrap)
-- import Data.Semigroup.First (First(..))

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

page :: ∀ a. Widget HTML a
page = do
   -- _ <- dyn $ formatSigArray (Tuple 0 [])
   D.div' [
       let mjStr = "Foo\nBar\n" in D.div' [downloadButton mjStr, copyButton mjStr]
       -- ^^ Example string to fail: "\xD800"
     , D.div [MC.page] $ pure $ dyn $ accumulateMetajeloRecord
     ]
   --D.text "Hi"

utf8DataAttr :: String
utf8DataAttr = "data:text/plain;charset=utf-8"

downloadButton :: forall a. String -> Widget HTML a
downloadButton mjStr = D.div_ [] $ do
  let encodedMjStrMay = encodeURIComponent(mjStr)
  dlClicker <- liftEffect $
    mkDLAnchorAndClicker $ fromMaybe "" encodedMjStrMay
  maybe errorBox (downloadBtn dlClicker) encodedMjStrMay
  where
    downloadBtn :: Effect Unit -> String -> Widget HTML a
    downloadBtn clicker cstr  = do
      dyn $ go cstr
      where
        go str = step str $ do
          _ <- D.button_ [P.onClick] $ D.text "Download"
          _ <- liftEffect clicker
          pure $ go str
    errorBox = D.div_ [MWC.errorDisplayBox] $
      D.span [MWC.errorDisplay] [D.text errorMsg]
    errorMsg = "Couldn't encode XML, please copy to clipboard instead."


mkDLAnchorAndClicker :: String -> Effect (Effect Unit) -- (Maybe HTMLElement)
mkDLAnchorAndClicker encTxt = do
  win <- DOM.window
  hdoc <- DOM.document win
  let doc = HTML.toDocument hdoc
  aEle <- DOM.createElement "a" doc
  DOM.setAttribute "download" "metajelo.xml" aEle
  DOM.setAttribute "href" (utf8DataAttr <> "," <> encTxt) aEle
  pure $ clickAMay $ HTML.fromElement aEle
  where
    clickAMay :: Maybe HTMLElement -> Effect Unit
    clickAMay hEleMay =  case hEleMay of
      Just hEle -> do
        log "got a click"
        DOM.click hEle
      Nothing -> log $
        "Couldn't create HTMLElement to click with encoded string"
        <> encTxt



copyButton :: forall a. String -> Widget HTML a
copyButton cstr = dyn $ go cstr
  where
    go str = step str $ do
      _ <- D.button_ [P.onClick] $ D.text "Copy to Clipboard"
      _ <- liftEffect $ copyToClipboard str
      pure $ go str

-- | ViewModel for MetajeloRecord
type MetajeloRecordExtra r = (
  identifier_opt :: Opt.Option (M.BaseIdRows ())
, _numRelIds :: Int
, relId_opts :: PartialRelIds
, _numSupProds :: Int
, supProd_opts :: PartialProds
| r
)
-- | Decorated state (Model + ViewModel) for MetajeloRecord
type MetajeloRecordRowOpts = MetajeloRecordExtra M.MetajeloRecordRows

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

type MayOpt a = Maybe (Opt.Option a)
type PartialRelIds = NonEmptyArray (Opt.Option M.RelatedIdentifierRows)
type PartialProds = NonEmptyArray (Opt.Option SupplementaryProductRowOpts)

accumulateMetajeloRecord ::  Signal HTML (Opt.Option MetajeloRecordRowOpts)
accumulateMetajeloRecord = loopS Opt.empty \recOpt -> D.div_ [MC.record] do
  idOpt <- D.div_ [MC.recordId] do
    accumulateIdent $ getOpt (SProxy :: _ "identifier_opt") recOpt
  let idMay = Opt.getAll idOpt
  dateMay <- D.div_ [MC.date] <$> textInput $ Opt.get (SProxy :: _ "date") recOpt
  -- modDateTime <- dateTimeSig
  let modDateTime = initDate
  let xsdDateStr_ei = formatXsdDate modDateTime
  let xsdDateMay = hush xsdDateStr_ei -- TODO: also retain either for errors

  relIdsTup <- relIdSigArray $ Tuple
    (Opt.getWithDefault 0 (SProxy :: _ "_numRelIds") recOpt)
    (Opt.get (SProxy :: _ "relId_opts") recOpt)
  let _numRelIds = fst relIdsTup
  let relIdOpts = snd relIdsTup
  let relIdsMay = join $ (map sequence) $ ((map Opt.getAll) <$> relIdOpts)

  prodsTup <- supProdSigArray $ Tuple
    (Opt.getWithDefault 0 (SProxy :: _ "_numSupProds") recOpt)
    (Opt.get (SProxy :: _ "supProd_opts") recOpt)
  let _numSupProds = fst prodsTup
  let supProdOpts = snd prodsTup
  let supProdsMay = join $ (map sequence) $ ((map Opt.getSubset) <$> supProdOpts)
  newRec <- pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "identifier_opt") (Just idOpt)
    get >>= Opt.maySetOptState (SProxy :: _ "identifier") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "date") dateMay
    get >>= Opt.maySetOptState (SProxy :: _ "lastModified") xsdDateMay

    get >>= Opt.maySetOptState (SProxy :: _ "_numRelIds") (Just _numRelIds)
    get >>= Opt.maySetOptState (SProxy :: _ "relId_opts") relIdOpts
    get >>= Opt.maySetOptState (SProxy :: _ "relatedIdentifiers") relIdsMay

    get >>= Opt.maySetOptState (SProxy :: _ "_numSupProds") (Just _numSupProds)
    get >>= Opt.maySetOptState (SProxy :: _ "supProd_opts") supProdOpts
    get >>= Opt.maySetOptState (SProxy :: _ "supplementaryProducts") supProdsMay
  ) recOpt
  let newRecMay = Opt.getSubset newRec
  display $ recWidg newRecMay
  pure newRec
  where
    recWidg :: forall a. Maybe M.MetajeloRecord ->  Widget HTML a
    recWidg recMay = D.div [MC.recPreview] [
      do
        mjStr <- liftEffect mjStrEff
        -- TODO: make greay of mjStr is empty:
        D.div' [downloadButton mjStr, copyButton mjStr]
    , D.br'
    , fold $ MV.mkRecordWidget <$> recMay
    ]
      where
      mjStrEff = maybe (pure "") MXW.recordToString recMay

-- FIXME: check how the header is grouped into these?
accumulateSuppProd :: CtrlSignal HTML (MayOpt SupplementaryProductRowOpts)
accumulateSuppProd prodOptMay = D.div_ [MC.product] do
  basicMdOpt <- accumulateBasicMetaData $
    getOpt (SProxy :: _ "basicMetadata_opt") prodOpt
  let basicMdMay = Opt.getAll basicMdOpt
  redIdOpt <- D.div_ [MC.resourceId] do
    accumulateIdent $ getOpt (SProxy :: _ "resourceID_opt") prodOpt
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
  locOptMay <- accumulateLocation $
    Opt.get (SProxy :: _ "locationOpts_opt") prodOpt
  let locMay = join $ Opt.getSubset <$> locOptMay
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
    get >>= Opt.maySetOptState (SProxy :: _ "locationOpts_opt") locOptMay
    get >>= Opt.maySetOptState (SProxy :: _ "location") locMay
  ) prodOpt
  let newProdMay = Opt.getSubset newProd
  display $ prodWidg newProdMay
  pure $ Just newProd
  where
    prodOpt = fromMaybe Opt.empty prodOptMay
    prodWidg :: forall a. Maybe M.SupplementaryProduct ->  Widget HTML a
    prodWidg prodMay = D.div [MC.prodPreview] [
      D.br'
    , fold $ MV.mkSupplementaryProductWidget <$> prodMay
    ]

supProdSigArray :: CtrlSignal HTML (Tuple Int (Maybe PartialProds))
supProdSigArray prodsMay =
  D.div_ [MC.products] $ D.span_ [MC.productsHeader] do
    D.div_ [MC.productList] $ nonEmptyArrayView accumulateSuppProd prodsMay

accumulateLocation :: CtrlSignal HTML (MayOpt LocationRowOpts)
accumulateLocation locOptMay = D.div_ [MC.location] do
  identOpt <- D.span_ [MC.institutionId] $ accumulateIdent $
    getOpt (SProxy :: _ "institutionID_opt") locOpt
  let identMay = Opt.getAll identOpt
  instNameMay <- textInput $
    Opt.get (SProxy :: _ "institutionName") locOpt
  instTypeMay <- D.span_ [MC.institutionType] $ menuSignal $
    Opt.get (SProxy :: _ "institutionType") locOpt
  display D.br'
  sOrgMay <- D.span_ [MC.superOrg] $ textInput $
    join $ Opt.get (SProxy :: _ "superOrganizationName") locOpt
  icMay <- MF.contactSignal $ Opt.get (SProxy :: _ "institutionContact") locOpt
  sustainOpt <- accumulateSustain $ getOpt (SProxy :: _ "iSustain_opt") locOpt
  let sustainMay = Opt.getSubset sustainOpt
  polsMayTup <- MF.policySigArray $ Tuple
    (Opt.getWithDefault 1 (SProxy :: _ "_numPolicies") locOpt)
    (Opt.get (SProxy :: _ "institutionPolicies") locOpt)
  let _numPolicies = fst polsMayTup
  let polsMay = snd polsMayTup
  versioning <- D.span_ [MC.versioning] $ checkBoxS $
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
  pure $ Just newLoc
  where
    locOpt = fromMaybe Opt.empty locOptMay
    locWidg :: forall a. Maybe M.Location ->  Widget HTML a
    locWidg locMay = D.div [MC.locPreview] [
      D.br'
    , foldMap (\loc -> fold $ MV.spacify $ MV.locElems loc) locMay
    ]

accumulateSustain :: CtrlSignal HTML (Opt.Option InstitutionSustainabilityRowOpts)
accumulateSustain oldSust = D.div_ [MC.sustainability] do
  missionUrl_Ei <- D.span_ [MC.missionStatement] $ urlInput $
    Opt.getWithDefault (Left "") (SProxy :: _ "missionUrl_Ei") oldSust
  let missionUrlMay = hush missionUrl_Ei
  fundingUrl_Ei <-  D.span_ [MC.fundingStatement] $ urlInput $
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

accumulateIdent :: CtrlSignal HTML (Opt.Option (M.BaseIdRows ()))
accumulateIdent oldId = D.div_ [MC.identifier] do
  idMay <- D.span_ [MC.id] $ textInput $ Opt.get (SProxy :: _ "id") oldId
  idTypeMay <- D.span_ [MC.idType] $ menuSignal $
    Opt.get (SProxy :: _ "idType") oldId
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "id") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "idType") idTypeMay
  ) oldId

accumulateRelatedIdent :: CtrlSignal HTML (MayOpt M.RelatedIdentifierRows)
accumulateRelatedIdent oldIdMay = D.div_ [MC.relatedId] do
  idMay <- D.span_ [MC.id] $ textInput $ Opt.get (SProxy :: _ "id") oldId
  idTypeMay <- D.span_ [MC.idType] $ menuSignal $
    Opt.get (SProxy :: _ "idType") oldId
  relTypeMay <- D.span_ [MC.relType] $ menuSignal $
    Opt.get (SProxy :: _ "relType") oldId
  pure $ Just $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "id") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "idType") idTypeMay
    get >>= Opt.maySetOptState (SProxy :: _ "relType") relTypeMay
  ) oldId
  where oldId = (fromMaybe Opt.empty oldIdMay)

relIdSigArray :: CtrlSignal HTML (Tuple Int (Maybe PartialRelIds))
relIdSigArray relIdsMay =
  D.div_ [MC.relatedIds] $ D.span_ [MC.relatedIdsHeader] do
    D.div_ [MC.relatedIdList] $
      nonEmptyArrayView accumulateRelatedIdent relIdsMay

accumulateBasicMetaData :: CtrlSignal HTML (Opt.Option M.BasicMetadataRows)
accumulateBasicMetaData oldBMD = D.div_ [MC.basicMetadata] do
  titleMay <- D.span_ [MC.title] $ textInput $
    Opt.get (SProxy :: _ "title") oldBMD
  creatorMay <- D.span_ [MC.creator] $ textInput $
    Opt.get (SProxy :: _ "creator") oldBMD
  pubYearMay <- D.span_ [MC.pubyear] $ textInput $
    Opt.get (SProxy :: _ "publicationYear") oldBMD
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "title") titleMay
    get >>= Opt.maySetOptState (SProxy :: _ "creator") creatorMay
    get >>= Opt.maySetOptState (SProxy :: _ "publicationYear") pubYearMay
  ) oldBMD

accumulateResType :: CtrlSignal HTML (Opt.Option M.ResourceTypeRows)
accumulateResType oldRT = D.div_ [MC.resourceType] do
  genTypMay <- D.span_ [MC.resourceTypeGen] $ menuSignal $
    Opt.get (SProxy :: _ "generalType") oldRT
  descMay <- D.span_ [MC.resourceTypeDescr] $ textInput $
    join $ fromString <$> Opt.get (SProxy :: _ "description") oldRT
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "description") (toString <$> descMay)
    get >>= Opt.maySetOptState (SProxy :: _ "generalType") genTypMay
  ) oldRT

formatSignal :: CtrlSignal HTML (Maybe M.Format)
formatSignal formatMay = D.div_ [MC.format] do
  tooltipS $ textInput formatMay

formatSigArray :: CtrlSignal HTML (Tuple Int (Array M.Format))
formatSigArray formats = D.div_ [MC.formatList] $ arrayView formatSignal formats

accumulateResMdSource :: CtrlSignal HTML (Opt.Option ResourceMetadataSourceRowOpts)
accumulateResMdSource oldRMDS = D.div_ [MC.resourceMDSource] do
  url_Ei <- D.span_ [MC.url] $ urlInput $
    Opt.getWithDefault (Left "") (SProxy :: _ "url_Ei") oldRMDS
  let urlMay = hush url_Ei
  relTypMay <- D.span_ [MC.relType] $ menuSignal $
    Opt.get (SProxy :: _ "relationType") oldRMDS
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "url_Ei")
      (Just url_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "url")
      urlMay
    get >>= Opt.maySetOptState (SProxy :: _ "relationType") relTypMay
  ) oldRMDS

tooltip :: forall a. Widget HTML a
tooltip = D.div_ [MC.tooltip] empty

tooltipS :: forall a. Signal HTML a -> Signal HTML a
tooltipS sigIn = D.div_ [MC.tooltip] sigIn

-- TODO: PR to purescript-option
getOpt ::
  forall label option option' proxy suboption.
  IsSymbol label =>
  Prim.Row.Cons label (Opt.Option suboption) option' option =>
  proxy label ->
  Opt.Option option ->
  Opt.Option suboption
getOpt = Opt.getWithDefault Opt.empty