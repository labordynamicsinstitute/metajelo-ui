module Metajelo.UI where

import Control.Monad.State

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, loopS, loopW, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Concur.React.Run (runWidgetInDom)
import Control.Monad.Except.Trans (ExceptT(..), runExceptT)
import Control.Monad.Maybe.Trans (MaybeT(..), runMaybeT)
import Control.Plus (empty)
import Data.Array as A
import Data.Array.NonEmpty as NA
import Data.Array.NonEmpty (NonEmptyArray)
import Data.Bifunctor (lmap)
import Data.Either (Either(..), hush)
import Data.Foldable (fold, foldMap)
-- import Data.Functor ((<#>))
import Data.Maybe (Maybe(..), fromMaybe, isNothing, maybe)
import Data.Maybe.First (First(..))
import Data.Monoid (mempty)
import Data.String.Common (null)
import Data.String.NonEmpty (NonEmptyString, fromString, toString)
import Data.Symbol (class IsSymbol, SProxy(..))
import Data.Traversable (sequence)
import Data.Tuple (Tuple(..), fst, snd)
import Data.UUID as UUID
import Effect (Effect)
import Effect.Aff.Class (liftAff)
import Effect.Class (liftEffect)
import Effect.Class.Console (log)
import Effect.Exception as EX
import Effect.Now (nowDateTime)
import Global (encodeURIComponent)
import Metajelo.CSS.UI.ClassProps as MC
import Metajelo.CSS.Web.ClassProps as MWC
import Metajelo.FormUtil (CtrlSignal, Email, PolPolType(..), arrayView, checkBoxS
                         , checkPolicy, emailInput, errorDisplay, evTargetElem
                         , formatXsdDate, initDate, menuSignal
                         , nonEmptyArrayView, polPolTypeIs, runEffectInit, textInput, urlInput)
import Metajelo.Types as M
import Metajelo.View as MV
import Metajelo.XPaths as MX
import Metajelo.XPaths.Read as MXR
import Metajelo.XPaths.Write as MXW
import Nonbili.DOM (copyToClipboard)
import Option as Opt
import Prelude (Unit, bind, discard, join
               , map, pure, show, ($), (<$>), (<>), (>>=))
import Prim.Row as Prim.Row
import Text.URL.Validate (URL, urlToString)
import Web.DOM.Document (createElement) as DOM
import Web.DOM.Element (setAttribute) as DOM
import Web.File.File (toBlob) as File
import Web.File.FileList (item) as File
import Web.File.FileReader.Aff (readAsText) as File
import Web.HTML (window) as DOM
import Web.HTML.HTMLDocument (toDocument) as HTML
import Web.HTML.HTMLElement (HTMLElement)
import Web.HTML.HTMLElement (click) as DOM
import Web.HTML.HTMLElement (fromElement) as HTML
import Web.HTML.HTMLInputElement (files, fromElement) as HTMLIn
import Web.HTML.Window (document) as DOM

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

page :: ∀ a. Widget HTML a
page = do
   -- _ <- dyn $ formatSigArray (Tuple 0 [])
   D.div' [
       {- let mjStr = "\xD800" in D.div [MC.previewButtons] [
            downloadButton mjStr
          , copyButton mjStr
          ]
       -- ^^ Example string to fail: "\xD800"
     , -} D.div [MC.page] $ pure $ dyn $ accumulateMetajeloRecord
     ]

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
          _ <- D.button_ [MC.downloadBtn, P.onClick, P.disabled $ null str] $
            D.text "Download"
          _ <- liftEffect clicker
          pure $ go str
    errorBox = D.div_ [MWC.errorDisplayBox] $
      D.div_ [] $ D.span [MWC.errorDisplay] [D.text errorMsg]
    errorMsg = "Couldn't encode XML, please copy to clipboard instead."


mkDLAnchorAndClicker :: String -> Effect (Effect Unit)
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
      Just hEle -> DOM.click hEle
      Nothing -> log $
        "Couldn't create HTMLElement to click with encoded string"
        <> encTxt

uploadButtonSig :: Signal HTML (Opt.Option MetajeloRecordRowOpts)
uploadButtonSig = loopW Opt.empty $ \_ -> D.div_ [] do
  mjRec <- uploadButton
  pure $ fillMetajeloRecordExtra mjRec
  where
    uploadButton :: Widget HTML M.MetajeloRecord
    uploadButton = do
      targetEleMay <- D.input [P._type "file", evTargetElem <$> P.onChange]
      blobMay <- liftEffect $ runMaybeT do
        targetEle <- MaybeT targetEleMay
        targHtmlEle <- MaybeT $ pure $ HTMLIn.fromElement targetEle
        eleFiles <- MaybeT $ HTMLIn.files targHtmlEle
        file <- MaybeT $ pure $ File.item 0 eleFiles
        pure $ File.toBlob file
      case blobMay of
        Nothing -> uploadButton {- Maybe have an error msg here -}
        Just blob -> do
          fileTxt <- liftAff $ File.readAsText blob
          recResEi <- liftEffect $ runExceptT $ do
            parseEnv <- ExceptT $ xmlErr <$> (EX.try $ MX.getDefaultParseEnv fileTxt)
            ExceptT $ EX.try $ MXR.readRecord parseEnv
          case recResEi of
            Right recRes -> pure recRes
            Left err -> errorBox err            
    errorBox :: EX.Error -> Widget HTML M.MetajeloRecord
    errorBox err = D.div [] [
        uploadButton
      , D.div_ [MWC.errorDisplayBox] do
          D.div_ [] $ D.span [MWC.errorDisplay] [D.text $ errorMsg err]
      ]
    errorMsg err = "Couldn't decode MetajeloXML: " <> (show err)
    xmlErr = lmap (\_ -> EX.error
      "Error reading XML - please make sure it is well-formed.")

copyButton :: forall a. String -> Widget HTML a
copyButton cstr = dyn $ go cstr
  where
    go str = step str $ do
      _ <- D.button_ [MC.clipBtn, P.onClick, P.disabled $ null str] $
        D.text "Copy to Clipboard"
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

-- | Recomputes View-components of the Model-View from the Model
-- | (i.e. XML-based record). These fill functions are, in a sense,
-- | the inverse of the accumulate functions (objectively speaking;
-- | the types do not lign up as exact inverses).
fillMetajeloRecordExtra :: M.MetajeloRecord ->  Opt.Option MetajeloRecordRowOpts
fillMetajeloRecordExtra mjRec = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "identifier_opt") (Just identifier_opt)
    get >>= Opt.maySetOptState (SProxy :: _ "_numRelIds") (Just _numRelIds)
    get >>= Opt.maySetOptState (SProxy :: _ "relId_opts") (Just relId_opts)
    get >>= Opt.maySetOptState (SProxy :: _ "_numSupProds") (Just _numSupProds)
    get >>= Opt.maySetOptState (SProxy :: _ "supProd_opts") (Just supProd_opts)
  ) mjOptsInit
  where
    mjOptsInit = Opt.fromRecord mjRec
    identifier_opt = Opt.fromRecord mjRec.identifier
    _numRelIds = NA.length mjRec.relatedIdentifiers
    relId_opts = Opt.fromRecord <$> mjRec.relatedIdentifiers
    _numSupProds =  NA.length mjRec.supplementaryProducts
    --TODO: as supProd_opts involves "Extra" view data, it needs a fill function:
    supProd_opts = fillSProdExtra <$> mjRec.supplementaryProducts

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

fillSProdExtra :: M.SupplementaryProduct -> Opt.Option SupplementaryProductRowOpts
fillSProdExtra sProd = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "basicMetadata_opt")
      (Just basicMetadata_opt)
    get >>= Opt.maySetOptState (SProxy :: _ "resourceID_opt") resourceID_opt
    get >>= Opt.maySetOptState (SProxy :: _ "resourceType_opt")
      (Just resourceType_opt)
    get >>= Opt.maySetOptState (SProxy :: _ "_numFormats")
      (Just _numFormats)
    get >>= Opt.maySetOptState (SProxy :: _ "resMdsOpts_opt") resMdsOpts_opt
    get >>= Opt.maySetOptState (SProxy :: _ "locationOpts_opt")
      (Just locationOpts_opt)
  ) sProdOptInit
  where
    sProdOptInit = Opt.fromRecord sProd
    basicMetadata_opt = Opt.fromRecord sProd.basicMetadata
    resourceID_opt = Opt.fromRecord <$> sProd.resourceID
    resourceType_opt = Opt.fromRecord sProd.resourceType
    _numFormats = A.length sProd.format
    resMdsOpts_opt = fillResourceMDSExtra <$> sProd.resourceMetadataSource
    locationOpts_opt = fillLocationRowExtra sProd.location

-- | ViewModel for Location
type LocationRowExtra r = (
  institutionID_opt :: Opt.Option (M.BaseIdRows ())
, _numPolicies :: Int
, institutionContact_opt :: Opt.Option InstitutionContactRowOpts
, institutionPolicies_opt :: PartialPols
, iSustain_opt :: Opt.Option InstitutionSustainabilityRowOpts
| r
)
-- | Decorated state (Model + ViewModel) for Location
type LocationRowOpts = LocationRowExtra M.LocationRows

fillLocationRowExtra :: M.Location -> Opt.Option LocationRowOpts
fillLocationRowExtra loc = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "institutionID_opt")
      (Just institutionID_opt)
    get >>= Opt.maySetOptState (SProxy :: _ "_numPolicies")
      (Just _numPolicies)
    get >>= Opt.maySetOptState (SProxy :: _ "iSustain_opt")
      (Just iSustain_opt)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionContact_opt")
      (Just institutionContact_opt)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionPolicies_opt")
      (Just iPol_opts)
  ) locOptInit
  where
    locOptInit = Opt.fromRecord loc
    institutionID_opt = Opt.fromRecord loc.institutionID
    _numPolicies = NA.length loc.institutionPolicies
    iSustain_opt = fillSustainExtra loc.institutionSustainability
    institutionContact_opt = fillIContactExtra loc.institutionContact
    iPol_opts = fillPolicyExtra <$> loc.institutionPolicies

type InstitutionContactExtraRows r = (
  email_Ei :: Either String Email | r
)

type InstitutionContactRowOpts =
  InstitutionContactExtraRows M.InstitutionContactRows

fillIContactExtra :: M.InstitutionContact
  -> Opt.Option InstitutionContactRowOpts
fillIContactExtra iCont = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "email_Ei")
      (Just $ Right iCont.emailAddress)
  ) (Opt.fromRecord iCont)

-- | ViewModel for InstitutionSustainability
type InstitutionSustainabilityExtraRows r = (
  missionUrl_Ei :: Either String URL
, fundingUrl_Ei :: Either String URL
| r
)
-- | Decorated state (Model + ViewModel) for InstitutionSustainability
type InstitutionSustainabilityRowOpts =
  InstitutionSustainabilityExtraRows M.InstitutionSustainabilityRows

fillSustainExtra :: M.InstitutionSustainability
  -> Opt.Option InstitutionSustainabilityRowOpts
fillSustainExtra sust = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "missionUrl_Ei")
      (Just missionUrl_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "fundingUrl_Ei")
      (Just fundingUrl_Ei)
  ) sustOptInit
  where
    sustOptInit = Opt.fromRecord sust
    missionUrl_Ei = Right sust.missionStatementURL
    fundingUrl_Ei = Right sust.fundingStatementURL

type InstitutionPolicyExtraRows r = (
  policy_str :: NonEmptyString
, polPolType :: PolPolType
, policy_ei :: Either String M.Policy
| r
)

type InstitutionPolicyRowOpts =
  InstitutionPolicyExtraRows M.InstitutionPolicyRows

fillPolicyExtra :: M.InstitutionPolicy
  -> Opt.Option InstitutionPolicyRowOpts
fillPolicyExtra iPolRec = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "policy_str") policyStrMay
    get >>= Opt.maySetOptState (SProxy :: _ "polPolType")
      (Just $ polPolTypeIs iPolRec.policy)
    get >>= Opt.maySetOptState (SProxy :: _ "policy_ei")
      (Just $ Right iPolRec.policy)
  ) iPolRecInit
  where
    iPolRecInit = Opt.fromRecord iPolRec
    policyStrMay = case iPolRec.policy of
      M.FreeTextPolicy txtPol -> Just txtPol
      M.RefPolicy url -> fromString $ urlToString url

-- | ViewModel for ResourceMetadataSource
type ResourceMetadataSourceExtraRows r = (
  url_Ei :: Either String URL
| r
)
-- | Decorated state (Model + ViewModel) for ResourceMetadataSource
type ResourceMetadataSourceRowOpts =
  ResourceMetadataSourceExtraRows M.ResourceMetadataSourceRows

fillResourceMDSExtra :: M.ResourceMetadataSource
  -> Opt.Option ResourceMetadataSourceRowOpts
fillResourceMDSExtra resMDS = execState (do
  get >>= Opt.maySetOptState (SProxy :: _ "url_Ei")
    (Just url_Ei)
  ) resMDSOptInit
  where
    resMDSOptInit = Opt.fromRecord resMDS
    url_Ei = Right resMDS.url

type MayOpt a = Maybe (Opt.Option a)
type PartialRelIds = NonEmptyArray (Opt.Option M.RelatedIdentifierRows)
type PartialProds = NonEmptyArray (Opt.Option SupplementaryProductRowOpts)
type PartialPols = NonEmptyArray (Opt.Option InstitutionPolicyRowOpts)

accumulateMetajeloRecord :: Signal HTML (Opt.Option MetajeloRecordRowOpts)
accumulateMetajeloRecord = loopS Opt.empty \recOpt' -> D.div_ [MC.record] do
  uploadedRec <- uploadButtonSig
  let uploadedRecMay = (Opt.getSubset uploadedRec :: Maybe M.MetajeloRecord)
  let upOrInRec = if isNothing uploadedRecMay then recOpt' else uploadedRec
  recOpt <- accumulateMetajeloRecUI upOrInRec
  -- let sWait = accumulateMetajeloRecUI recOpt'
  -- modDateTime <- runEffectInit initDate nowDateTime
  let modDateTime = initDate
  let xsdDateStr_ei = formatXsdDate modDateTime
  let xsdDateInitMay = hush xsdDateStr_ei -- TODO: also retain either for errors
  let xsdDateLastMay = Opt.get (SProxy :: _ "lastModified") recOpt
  xsdDateMay <- pure $ case (First xsdDateLastMay) <> (First xsdDateInitMay) of
    First x -> x
  newRec <- pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "lastModified") xsdDateMay
  ) recOpt
  let newRecMay = Opt.getSubset newRec
  display $ recWidg newRecMay
  pure newRec
  where
{-     dateTimeSigOn sWait = justWait
      initDate
      (runEffectOnS nowDateTime sWait)
      pure -}
    recWidg :: forall a. Maybe M.MetajeloRecord ->  Widget HTML a
    recWidg recMay = do
      recMay' <- liftEffect $ sequence $ finalizeRecord <$> recMay
      D.div [MC.recPreview] [
        do
          mjStr <- liftEffect $ mjStrEff recMay'
          D.div [MC.previewButtons] [downloadButton mjStr, copyButton mjStr]
      , D.br'
      , fold $ MV.mkRecordWidget <$> recMay'
      ]
      where
      mjStrEff rm = maybe (pure "") MXW.recordToString rm

finalizeRecord :: M.MetajeloRecord -> Effect M.MetajeloRecord
finalizeRecord recIn = do
  --TODO: handle this error in a more UX-friendly way:
  xsdDateStr <- join $ MXR.rightOrThrow <$> formatXsdDate <$> nowDateTime
  pure $ recIn { lastModified = xsdDateStr }

-- | Accumulates user input values (values generated from user input)
-- | for the Metajelo Record.
accumulateMetajeloRecUI ::  CtrlSignal HTML (Opt.Option MetajeloRecordRowOpts)
accumulateMetajeloRecUI recOpt = do
  idOpt <- genRecIdent $ getOpt (SProxy :: _ "identifier_opt") recOpt
  let idMay = Opt.getAll idOpt
  dateMay <- D.div_ [MC.date] <$> textInput $ Opt.get (SProxy :: _ "date") recOpt

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
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "identifier_opt") (Just idOpt)
    get >>= Opt.maySetOptState (SProxy :: _ "identifier") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "date") dateMay

    get >>= Opt.maySetOptState (SProxy :: _ "_numRelIds") (Just _numRelIds)
    get >>= Opt.maySetOptState (SProxy :: _ "relId_opts") relIdOpts
    get >>= Opt.maySetOptState (SProxy :: _ "relatedIdentifiers") relIdsMay

    get >>= Opt.maySetOptState (SProxy :: _ "_numSupProds") (Just _numSupProds)
    get >>= Opt.maySetOptState (SProxy :: _ "supProd_opts") supProdOpts
    get >>= Opt.maySetOptState (SProxy :: _ "supplementaryProducts") supProdsMay
  ) recOpt

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
  identOpt <- D.div_ [] $ D.span_ [MC.institutionId] $ accumulateIdent $
    getOpt (SProxy :: _ "institutionID_opt") locOpt
  let identMay = Opt.getAll identOpt
  instNameMay <- D.div_ [] $ D.span_ [MC.institutionName] $ textInput $
    Opt.get (SProxy :: _ "institutionName") locOpt
  instTypeMay <- D.div_ [] $ D.span_ [MC.institutionType] $ menuSignal $
    Opt.get (SProxy :: _ "institutionType") locOpt
  display D.br'
  sOrgMay <- D.div_ [] $ D.span_ [MC.superOrg] $ textInput $
    join $ Opt.get (SProxy :: _ "superOrganizationName") locOpt
  icOpt <- accumulateContact $ getOpt (SProxy :: _ "institutionContact_opt") locOpt
  let icMay = Opt.getSubset icOpt
  sustainOpt <- accumulateSustain $ getOpt (SProxy :: _ "iSustain_opt") locOpt
  let sustainMay = Opt.getSubset sustainOpt
  polsOptTup <- policySigArray $ Tuple
    (Opt.getWithDefault 1 (SProxy :: _ "_numPolicies") locOpt)
    (Opt.get (SProxy :: _ "institutionPolicies_opt") locOpt)
  let _numPolicies = fst polsOptTup
  let polsOpt = snd polsOptTup
  let polsMay = join $ (map sequence) $ ((map Opt.getSubset) <$> polsOpt)
{- 
  prodsTup <- supProdSigArray $ Tuple
    (Opt.getWithDefault 0 (SProxy :: _ "_numSupProds") recOpt)
    (Opt.get (SProxy :: _ "supProd_opts") recOpt)
  let _numSupProds = fst prodsTup
  let supProdOpts = snd prodsTup
  let supProdsMay = join $ (map sequence) $ ((map Opt.getSubset) <$> supProdOpts) -}

  versioning <- D.div_ [] $ D.span_ [MC.versioning] $ checkBoxS $
    Opt.getWithDefault false (SProxy :: _ "versioning") locOpt
  newLoc <- pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "institutionID_opt") (Just identOpt)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionID") identMay
    get >>= Opt.maySetOptState (SProxy :: _ "institutionName") instNameMay
    get >>= Opt.maySetOptState (SProxy :: _ "institutionType") instTypeMay
    get >>= Opt.maySetOptState (SProxy :: _ "superOrganizationName") (Just sOrgMay)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionContact_opt") (Just icOpt)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionContact") icMay
    get >>= Opt.maySetOptState (SProxy :: _ "iSustain_opt") (Just sustainOpt)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionSustainability") sustainMay
    get >>= Opt.maySetOptState (SProxy :: _ "_numPolicies") (Just _numPolicies)
    get >>= Opt.maySetOptState (SProxy :: _ "institutionPolicies_opt") polsOpt
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
  idMay <- D.div_ [] $ D.span_ [MC.id] $ textInput $ Opt.get (SProxy :: _ "id") oldId
  idTypeMay <- D.div_ [] $ D.span_ [MC.idType] $ menuSignal $
    Opt.get (SProxy :: _ "idType") oldId
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "id") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "idType") idTypeMay
  ) oldId

genRecIdent :: CtrlSignal HTML (Opt.Option (M.BaseIdRows ()))
genRecIdent oldId = do
  let idMay = Opt.get (SProxy :: _ "id") oldId
  idMayNew <- case idMay of
    Just idOld -> pure $ Just idOld
    Nothing -> do
      uuid <- runEffectInit UUID.emptyUUID UUID.genUUID
      pure $ do
        pfx <- urnPrefix
        uuidNES <- fromString $ UUID.toString uuid
        pure $ pfx <> uuidNES
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "id") idMayNew
    get >>= Opt.maySetOptState (SProxy :: _ "idType") (Just M.URN)
  ) oldId
  where
    urnPrefix = fromString "urn:uuid:"

accumulateRelatedIdent :: CtrlSignal HTML (MayOpt M.RelatedIdentifierRows)
accumulateRelatedIdent oldIdMay = D.div_ [MC.relatedId] do
  idMay <- D.div_ [] $ D.span_ [MC.id] $ textInput $ Opt.get (SProxy :: _ "id") oldId
  idTypeMay <- D.div_ [] $ D.span_ [MC.idType] $ menuSignal $
    Opt.get (SProxy :: _ "idType") oldId
  relTypeMay <- D.div_ [] $ D.span_ [MC.relType] $ menuSignal $
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
  titleMay <- D.div_ [] $ D.span_ [MC.title] $ textInput $
    Opt.get (SProxy :: _ "title") oldBMD
  creatorMay <- D.div_ [] $ D.span_ [MC.creator] $ textInput $
    Opt.get (SProxy :: _ "creator") oldBMD
  pubYearMay <- D.div_ [] $ D.span_ [MC.pubyear] $ textInput $
    Opt.get (SProxy :: _ "publicationYear") oldBMD
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "title") titleMay
    get >>= Opt.maySetOptState (SProxy :: _ "creator") creatorMay
    get >>= Opt.maySetOptState (SProxy :: _ "publicationYear") pubYearMay
  ) oldBMD

accumulateResType :: CtrlSignal HTML (Opt.Option M.ResourceTypeRows)
accumulateResType oldRT = D.div_ [MC.resourceType] do
  genTypMay <- D.div_ [] $ D.span_ [MC.resourceTypeGen] $ menuSignal $
    Opt.get (SProxy :: _ "generalType") oldRT
  descMay <- D.div_ [] $ D.span_ [MC.resourceTypeDescr] $ textInput $
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
  url_Ei <- D.div_ [] $ D.span_ [MC.url] $ urlInput $
    Opt.getWithDefault (Left "") (SProxy :: _ "url_Ei") oldRMDS
  let urlMay = hush url_Ei
  relTypMay <- D.div_ [] $ D.span_ [MC.relType] $ menuSignal $
    Opt.get (SProxy :: _ "relationType") oldRMDS
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "url_Ei")
      (Just url_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "url")
      urlMay
    get >>= Opt.maySetOptState (SProxy :: _ "relationType") relTypMay
  ) oldRMDS

accumulateContact :: CtrlSignal HTML (Opt.Option InstitutionContactRowOpts)
accumulateContact oldIC = D.div_ [MC.institutionContact] do
  email_Ei <- D.div_ [] $ D.span_ [MC.contactEmail] $ emailInput $
    Opt.getWithDefault (Left "") (SProxy :: _ "email_Ei") oldIC
  let emailMay = hush email_Ei
  contactTypMay <- D.div_ [] $ D.span_ [MC.contactType] $ menuSignal $
    Opt.get (SProxy :: _ "contactType") oldIC
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "email_Ei")
      (Just email_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "emailAddress")
      emailMay
    get >>= Opt.maySetOptState (SProxy :: _ "contactType") contactTypMay
  ) oldIC

accumulatePolicy :: CtrlSignal HTML (MayOpt InstitutionPolicyRowOpts)
accumulatePolicy oldPolMay = D.div_ [MC.institutionPolicy] do
  polPolTypeMay <- D.div_ [] $ D.span_ [MC.policy] $ menuSignal $ Just $
    Opt.getWithDefault FreeTextPolicy (SProxy :: _ "polPolType") oldPol
  let polPolType = fromMaybe FreeTextPolicy polPolTypeMay
  txtInMay <- D.div_ [] $ D.span_ [MC.policy] $ textInput $
    Opt.get (SProxy :: _ "policy_str") oldPol
  let policy_ei = checkPolicy polPolType $ maybe "" toString txtInMay
  display $ case policy_ei of
    Right _ -> mempty
    Left err -> errorDisplay $ Just err
  let policyMay = hush policy_ei
  polTypeMay <- D.div_ [] $ D.span_ [MC.policyType] $ menuSignal $
    Opt.get (SProxy :: _ "policyType") oldPol
  appliesToProd <- D.div_ [] $ D.span_ [MC.applies] $ menuSignal $
    Opt.get (SProxy :: _ "appliesToProduct") oldPol
  pure $ Just $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "polPolType") (Just polPolType)
    get >>= Opt.maySetOptState (SProxy :: _ "policy_str") txtInMay
    get >>= Opt.maySetOptState (SProxy :: _ "policy_ei") (Just policy_ei)
    get >>= Opt.maySetOptState (SProxy :: _ "policy") policyMay
    get >>= Opt.maySetOptState (SProxy :: _ "policyType") polTypeMay
    get >>= Opt.maySetOptState (SProxy :: _ "appliesToProduct") appliesToProd
  ) oldPol
  where
    oldPol = fromMaybe Opt.empty oldPolMay



 -- | The first element of the tuple is the (desired) number of policies
policySigArray :: CtrlSignal HTML (Tuple Int (Maybe PartialPols))
policySigArray instPoliciesMay = D.div_ [MC.institutionPolicies] do
  nonEmptyArrayView accumulatePolicy instPoliciesMay

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