module Metajelo.UI where


import Affjax (Error, Response, get, printError) as AJ
import Affjax.ResponseFormat (string) as AJ
import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, loopS, loopW, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Concur.React.Run (runWidgetInDom)
import Control.Apply ((*>))
import Control.Monad.Except.Trans (ExceptT(..), runExceptT)
import Control.Monad.Maybe.Trans (MaybeT(..), runMaybeT)
import Control.Monad.State
import Control.Monad.Writer (runWriter)
import Control.Plus (empty)
import Data.Array as A
import Data.Array.NonEmpty as NA
import Data.Array.NonEmpty (NonEmptyArray)
import Data.Bifunctor (lmap)
import Data.Either (Either(..), hush)
import Data.Foldable (fold, foldMap)
import Data.Functor (void, (<#>), (<$))
import Data.Maybe (Maybe(..), fromMaybe, isNothing, maybe)
import Data.Maybe.First (First(..))
import Data.Monoid (mempty)
import Data.Newtype (unwrap)
import Data.String.Common (null)
import Data.String.NonEmpty (NonEmptyString, fromString, toString)
import Data.Symbol (class IsSymbol, SProxy(..))
import Data.Traversable (sequence)
import Data.Tuple (Tuple(..), fst, snd)
import Data.UUID as UUID
import Data.Void (Void, absurd)
import DataCite.JSON.Decode.Simple (JSONWithErr, readRecordJSON)
import DataCite.Types (Resource)
import Effect (Effect)
import Effect.Aff.Class (liftAff)
import Effect.Class (liftEffect)
import Effect.Class.Console (log)
import Effect.Exception as EX
import Effect.Now (nowDateTime)
import Effect.Unsafe (unsafePerformEffect)
import Foreign (MultipleErrors)
import Global (encodeURIComponent)
import Metajelo.CSS.UI.ClassProps as MC
import Metajelo.CSS.Web.ClassProps as MWC
import Metajelo.CSS.UI.Util as MCU
import Metajelo.FormUtil (CtrlSignal, Email, PolPolType(..), arrayView, checkBoxS
                         , checkPolicy, dateInput, emailInput
                         , errorDisplay, evTargetElem, getInputTextLE, menuSignal
                         , mkDesc, natInput
                         , nonEmptyArrayView, polPolTypeIs, runEffectInit
                         , showDescSig, textInput, urlInput)
import Metajelo.Types as M
import Metajelo.View as MV
import Metajelo.XPaths as MX
import Metajelo.XPaths.Read as MXR
import Metajelo.XPaths.Write as MXW
import Nonbili.DOM (copyToClipboard)
import Option as Opt
import Prelude (Unit, bind, discard, join
               , map, pure, show, unit, ($), (<$>), (<>), (>>=))
import Prim.Row as Prim.Row
import Text.URL.Validate (URL, parsePublicURL, urlToString)
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

--TODO: add a CSS style here with a ::before label
uploadButtonSig :: Signal HTML (Opt.Option MetajeloRecordRowOpts)
uploadButtonSig = loopW Opt.empty $ \_ -> D.div_ [] do
  mjRec <- uploadButton
  -- log $ "loading date: " <> (show $ mjRec.date)
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

type DataCiteRetrieval = Maybe (JSONWithErr (Either MultipleErrors Resource))

-- In `dataCiteButtonSig`, it is probably better to do something like
-- Elm (https://github.com/purescript-concur/purescript-concur-react/blob/master/examples/src/Test/TheElmArchitecture.purs#L32)
-- rather than relying on `getElementbyId`.
-- Even better my be reactRef :
-- https://github.com/purescript-concur/purescript-concur-react/blob/master/src/Concur/React/Widgets.purs#L30
dataCiteButtonSig :: Signal HTML DataCiteRetrieval
dataCiteButtonSig = loopW Nothing $ \_ -> D.div_ [] dataCiteButton
  where
    dcDoiInputId = MCU.mjUiClassPfx <> "dataCiteDOI_Input"
    dCiteJsonUrlPfx = "https://api.datacite.org/dois/"
    dataCiteButton :: Widget HTML DataCiteRetrieval
    dataCiteButton = D.div_ [] do
      void $ D.button_ [P.onClick] $ D.text "Retrieve DataCite Record"
      doiMay :: Maybe String <- D.span [] [
          D.input [P._id dcDoiInputId, P.placeholder "Input DOI here"]
        , (D.button_ [P.onClick] $ D.text "Retrieve") *> getInputTextLE dcDoiInputId
        , Nothing <$ (D.button_ [P.onClick] $ D.text "Cancel")
        ]
      case doiMay of
        Nothing -> dataCiteButton
        Just doi -> case parsePublicURL $ dCiteJsonUrlPfx <> doi of
          Left err -> errorBox $ EX.error err
          Right jsonUrl -> do
            res <- liftAff $ AJ.get AJ.string $ urlToString jsonUrl
            processResponse res
    processResponse :: Either AJ.Error (AJ.Response String)
      ->  Widget HTML DataCiteRetrieval
    processResponse res = case res of
      Left err -> errorBox $ EX.error $
        "GET /api response failed to decode: " <> AJ.printError err
      Right response -> pure $ Just $ readRecordJSON response.body
    errorBox :: EX.Error -> Widget HTML DataCiteRetrieval
    errorBox err = D.div [] [
        dataCiteButton
      , D.div_ [MWC.errorDisplayBox] do
          D.div_ [] $ D.span [MWC.errorDisplay] [D.text $ errorMsg err]
      ]
    errorMsg err = "In DataCite retrieval: " <> (show err)

fillWithDataCite :: Opt.Option SupplementaryProductRowOpts -> Resource
  -> Opt.Option SupplementaryProductRowOpts
fillWithDataCite spOpt dcRes = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "basicMetadata_opt") (Just bMDnew)
  ) spOpt
  where
    bMDorig = getOpt (SProxy :: _ "basicMetadata_opt") spOpt
    titlesOrigMay = Opt.get (SProxy :: _ "titles") bMDorig
    dcTitles = (\t -> t.title) <$> dcRes.data.attributes.titles
    titlesNew = maybe dcTitles (\ts -> ts <> dcTitles) titlesOrigMay
    _numTitles = NA.length titlesNew
    creatorsOrigMay = Opt.get (SProxy :: _ "creators") bMDorig
    dcCreators = (\c -> c.name) <$> dcRes.data.attributes.creators
    creatorsNew = maybe dcCreators (\cs -> cs <> dcCreators) creatorsOrigMay
    _numCreators = NA.length creatorsNew
    bMDnew :: Opt.Option BasicMetadataRowOpts
    bMDnew = execState (do
        get >>= Opt.maySetOptState (SProxy :: _ "titles") (Just titlesNew)
        get >>= Opt.maySetOptState (SProxy :: _ "_numTitles")
          (Just _numTitles)
        get >>= Opt.maySetOptState (SProxy :: _ "creators") (Just creatorsNew)
        get >>= Opt.maySetOptState (SProxy :: _ "_numCreators")
          (Just _numCreators)
      ) bMDorig

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
, date_Ei :: Either String M.XsdDate
, _numRelIds :: Int
, relId_opts :: PartialRelIds
, _numSupProds :: Int
, supProd_opts :: PartialProds
, descs_on :: Boolean
| r
)
-- | Decorated state (Model + ViewModel) for MetajeloRecord
type MetajeloRecordRowOpts = MetajeloRecordExtra M.MetajeloRecordRows

-- | Recomputes View-components of the Model-View from the Model
-- | (i.e. XML-based record). These fill functions are, in a sense,
-- | the inverse of the accumulate functions (objectively speaking;
-- | the types do not lign up as exact inverses).
fillMetajeloRecordExtra :: M.MetajeloRecord -> Opt.Option MetajeloRecordRowOpts
fillMetajeloRecordExtra mjRec = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "identifier_opt") (Just identifier_opt)
    get >>= Opt.maySetOptState (SProxy :: _ "date_Ei") (Just $ Right mjRec.date)
    get >>= Opt.maySetOptState (SProxy :: _ "_numRelIds") (Just _numRelIds)
    get >>= Opt.maySetOptState (SProxy :: _ "relId_opts") (Just relId_opts)
    get >>= Opt.maySetOptState (SProxy :: _ "_numSupProds") (Just _numSupProds)
    get >>= Opt.maySetOptState (SProxy :: _ "supProd_opts") (Just supProd_opts)
    get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just true)
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
  basicMetadata_opt :: Opt.Option BasicMetadataRowOpts
, resourceID_opt :: Opt.Option (M.BaseIdRows ())
, resourceType_opt :: Opt.Option M.ResourceTypeRows
, _numFormats :: Int
, resMdsOpts_opt :: Opt.Option ResourceMetadataSourceRowOpts
, locationOpts_opt :: Opt.Option LocationRowOpts
, descs_on :: Boolean
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
    get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just true)
  ) sProdOptInit
  where
    sProdOptInit = Opt.fromRecord sProd
    basicMetadata_opt = fillBasicMetadataExtra sProd.basicMetadata
    resourceID_opt = Opt.fromRecord <$> sProd.resourceID
    resourceType_opt = Opt.fromRecord sProd.resourceType
    _numFormats = A.length sProd.format
    resMdsOpts_opt = fillResourceMDSExtra <$> sProd.resourceMetadataSource
    locationOpts_opt = fillLocationRowExtra sProd.location

type BasicMetadataExtraRows r = (
  _numTitles :: Int
, _numCreators :: Int | r
)

type BasicMetadataRowOpts = BasicMetadataExtraRows M.BasicMetadataRows

fillBasicMetadataExtra :: M.BasicMetadata -> Opt.Option BasicMetadataRowOpts
fillBasicMetadataExtra bMD = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "_numTitles")
      (Just _numTitles)
    get >>= Opt.maySetOptState (SProxy :: _ "_numCreators")
      (Just _numCreators)
  ) (Opt.fromRecord bMD)
  where
    _numTitles = NA.length bMD.titles
    _numCreators = NA.length bMD.creators

-- | ViewModel for Location
type LocationRowExtra r = (
  institutionID_opt :: Opt.Option (M.BaseIdRows ())
, _numPolicies :: Int
, institutionContact_opt :: Opt.Option InstitutionContactRowOpts
, institutionPolicies_opt :: PartialPols
, iSustain_opt :: Opt.Option InstitutionSustainabilityRowOpts
, descs_on :: Boolean
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
    get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just true)
  ) locOptInit
  where
    locOptInit = Opt.fromRecord loc
    institutionID_opt = Opt.fromRecord loc.institutionID
    _numPolicies = NA.length loc.institutionPolicies
    iSustain_opt = fillSustainExtra loc.institutionSustainability
    institutionContact_opt = fillIContactExtra loc.institutionContact
    iPol_opts = fillPolicyExtra <$> loc.institutionPolicies

type InstitutionContactExtraRows r = (
  email_Ei :: Either String Email
, descs_on :: Boolean | r
)

type InstitutionContactRowOpts =
  InstitutionContactExtraRows M.InstitutionContactRows

fillIContactExtra :: M.InstitutionContact
  -> Opt.Option InstitutionContactRowOpts
fillIContactExtra iCont = execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "email_Ei")
      (Just $ Right iCont.emailAddress)
    get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just true)
  ) (Opt.fromRecord iCont)

-- | ViewModel for InstitutionSustainability
type InstitutionSustainabilityExtraRows r = (
  missionUrl_Ei :: Either String URL
, fundingUrl_Ei :: Either String URL
, descs_on :: Boolean
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
    get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just true)
  ) sustOptInit
  where
    sustOptInit = Opt.fromRecord sust
    missionUrl_Ei = Right sust.missionStatementURL
    fundingUrl_Ei = Right sust.fundingStatementURL

type InstitutionPolicyExtraRows r = (
  policy_str :: NonEmptyString
, polPolType :: PolPolType
, policy_ei :: Either String M.Policy
, descs_on :: Boolean
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
    get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just true)
  ) iPolRecInit
  where
    iPolRecInit = Opt.fromRecord iPolRec
    policyStrMay = case iPolRec.policy of
      M.FreeTextPolicy txtPol -> Just txtPol
      M.RefPolicy url -> fromString $ urlToString url

-- | ViewModel for ResourceMetadataSource
type ResourceMetadataSourceExtraRows r = (
  url_Ei :: Either String URL
, descs_on :: Boolean
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
  get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just true)
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
  display $ D.div_ [MC.recordHeader] empty
  D.div_ [MC.recFlexBox] do
    newRec <- D.div_ [MC.recEditor] do
      let descsOnInit = Opt.getWithDefault true (SProxy :: _ "descs_on") recOpt'
      descsOn <- showDescSig descsOnInit
      uploadedRec <- uploadButtonSig
      let uploadedRecMay = (Opt.getSubset uploadedRec :: Maybe M.MetajeloRecord)
      let upOrInRec = if isNothing uploadedRecMay then recOpt' else uploadedRec
      recOpt <- accumulateMetajeloRecUI upOrInRec
      let xsdDateLastMay = Opt.get (SProxy :: _ "lastModified") recOpt
      let nowTime = unsafePerformEffect nowDateTime
      -- pure $ unsafePerformEffect $ log $ ("nowTime is: " <> (show nowTime))
      xsdDateMay <- pure $ case (First xsdDateLastMay) <> (First $ Just nowTime) of
        First x -> x
      -- pure $ unsafePerformEffect $ log $ ("xsdDateMay is: " <> (show xsdDateMay))
      pure $ execState (do
        get >>= Opt.maySetOptState (SProxy :: _ "lastModified") xsdDateMay
        get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just descsOn)
      ) recOpt
    let newRecMay = Opt.getSubset newRec
    D.div_ [MC.sideBar] $ display $ makeSidebar newRecMay unit 0
    pure newRec

recWidg :: forall a. Maybe M.MetajeloRecord ->  Widget HTML a
recWidg recMay = do
  recMay' <- liftEffect $ sequence $ finalizeRecord <$> recMay
  D.div [MC.recPreview] [
    D.div_ [MC.recPreviewHeader] empty
  , do
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
  nowTime <- nowDateTime
  pure $ recIn { lastModified = nowTime }

-- | Accumulates user input values (values generated from user input)
-- | for the Metajelo Record.
accumulateMetajeloRecUI :: CtrlSignal HTML (Opt.Option MetajeloRecordRowOpts)
accumulateMetajeloRecUI recOpt = do
  let descsOn = Opt.getWithDefault true (SProxy :: _ "descs_on") recOpt
  display $ mkDesc "recordEle" descsOn
  display $ mkDesc "recordTypeCTyp" descsOn
  idOpt <- genRecIdent $ getOpt (SProxy :: _ "identifier_opt") recOpt
  let idMay = Opt.getAll idOpt
  let dateInTest = Opt.getWithDefault (Left "") (SProxy :: _ "date_Ei") recOpt
  date_Ei <- D.div_ [MC.date] do
    display $ D.div_ [MC.dateHeader] empty
    display $ mkDesc "dateEle" descsOn
    dateInput $ Opt.getWithDefault (Left "") (SProxy :: _ "date_Ei") recOpt
  let dateMay = hush date_Ei
  relIdsTup <- relIdSigArray $ Tuple
    (Opt.getWithDefault 0 (SProxy :: _ "_numRelIds") recOpt)
    (Opt.get (SProxy :: _ "relId_opts") recOpt)
  let _numRelIds = fst relIdsTup
  let relIdOpts = snd relIdsTup
  let relIdsMay = join $ (map sequence) $ ((map Opt.getAll) <$> relIdOpts)

  prodsTup <- supProdSigArray descsOn $ Tuple
    (Opt.getWithDefault 0 (SProxy :: _ "_numSupProds") recOpt)
    (Opt.get (SProxy :: _ "supProd_opts") recOpt)
  let _numSupProds = fst prodsTup
  let supProdOpts = snd prodsTup
  let supProdsMay = join $ (map sequence) $ ((map Opt.getSubset) <$> supProdOpts)
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "identifier_opt") (Just idOpt)
    get >>= Opt.maySetOptState (SProxy :: _ "identifier") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "date_Ei") (Just date_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "date") dateMay

    get >>= Opt.maySetOptState (SProxy :: _ "_numRelIds") (Just _numRelIds)
    get >>= Opt.maySetOptState (SProxy :: _ "relId_opts") relIdOpts
    get >>= Opt.maySetOptState (SProxy :: _ "relatedIdentifiers") relIdsMay

    get >>= Opt.maySetOptState (SProxy :: _ "_numSupProds") (Just _numSupProds)
    get >>= Opt.maySetOptState (SProxy :: _ "supProd_opts") supProdOpts
    get >>= Opt.maySetOptState (SProxy :: _ "supplementaryProducts") supProdsMay
    get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just descsOn)
  ) recOpt

accumulateSuppProd :: CtrlSignal HTML (MayOpt SupplementaryProductRowOpts)
accumulateSuppProd prodOptMay = D.div_ [MC.product] do
  display $ D.div_ [MC.productHeader] empty
  dataCiteJsonWMay <- dataCiteButtonSig
  prodOpt <- pure $ case dataCiteJsonWMay of
    Nothing -> prodOpt0
    Just dataCiteJsonW ->
      let dataCiteJsonTup@(Tuple dCiteEi _) = runWriter $ unwrap dataCiteJsonW
      in case dCiteEi of
        Right dCite -> fillWithDataCite prodOpt0 dCite
        Left _ -> prodOpt0
  -- TODO : add datacite error handling
  let descsOn = Opt.getWithDefault true (SProxy :: _ "descs_on") prodOpt
  display $ mkDesc "supplementaryProductEle" descsOn
  basicMdOpt <- accumulateBasicMetadata $
    getOpt (SProxy :: _ "basicMetadata_opt") prodOpt
  let basicMdMay = Opt.getSubset basicMdOpt
  redIdOpt <- D.div_ [MC.resourceId] do
    display $ D.div_ [MC.resourceIdHeader] empty
    accumulateIdent descsOn $ getOpt (SProxy :: _ "resourceID_opt") prodOpt
  let resIdMay = Opt.getAll redIdOpt
  resTypeOpt <- accumulateResType descsOn $
    getOpt (SProxy :: _ "resourceType_opt") prodOpt
  let resTypeMay = Opt.getSubset resTypeOpt
  formatsTup <- formatSigArray descsOn $ Tuple
    (Opt.getWithDefault 0 (SProxy :: _ "_numFormats") prodOpt)
    (Opt.getWithDefault [] (SProxy :: _ "format") prodOpt)
  let _numFormats = fst formatsTup
  let formats = snd formatsTup
  resMdOpt <- accumulateResMdSource $ fromMaybe Opt.empty
    $ updateDescOn (SProxy :: _ "resMdsOpts_opt") prodOpt descsOn
  let resMdMay = Opt.getSubset resMdOpt
  locOptMay <- accumulateLocation
    $ updateDescOn (SProxy :: _ "locationOpts_opt") prodOpt descsOn
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
    get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just descsOn)
  ) prodOpt
  -- TODO: move to sidebar when full preview unavailable
  -- let newProdMay = Opt.getSubset newProd
  -- display $ prodWidg newProdMay
  pure $ Just newProd
  where
    prodOpt0 = fromMaybe Opt.empty prodOptMay
    prodWidg :: forall a. Maybe M.SupplementaryProduct ->  Widget HTML a
    prodWidg prodMay = D.div [MC.prodPreview] [
      D.div_ [MC.prodPreviewHeader] empty
    , D.br'
    , fold $ MV.mkSupplementaryProductWidget <$> prodMay
    ]

supProdSigArray :: Boolean -> CtrlSignal HTML (Tuple Int (Maybe PartialProds))
supProdSigArray descsOn prodsMayOld =
  D.div_ [MC.products] do
    display $ D.div_ [MC.productsHeader] empty
    display $ mkDesc "supplementaryProductsEle" descsOn
    D.div_ [MC.productList]
      $ nonEmptyArrayView accumulateSuppProd $ Tuple (fst prodsMayOld) prodsMay
  where
    prodsMay = (snd prodsMayOld) <#> (\ps -> ps <#> (\p -> execState (do
      get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just descsOn)
    ) p))

accumulateLocation :: CtrlSignal HTML (MayOpt LocationRowOpts)
accumulateLocation locOptMay = D.div_ [MC.location] do
  display $ D.div_ [MC.locationHeader] empty
  let descsOn = Opt.getWithDefault true (SProxy :: _ "descs_on") locOpt
  display $ mkDesc "locationEle" descsOn
  identOpt <- D.div_ [] $ D.span_ [MC.institutionId] $ accumulateIdent descsOn $
    getOpt (SProxy :: _ "institutionID_opt") locOpt
  let identMay = Opt.getAll identOpt
  instNameMay <- D.div_ [MC.institutionName] do
    display $ D.div_ [MC.institutionNameHeader] empty
    textInput $ Opt.get (SProxy :: _ "institutionName") locOpt
  instTypeMay <- D.div_ [MC.institutionType] do
    display $ D.div_ [MC.institutionTypeHeader] empty
    menuSignal $ Opt.get (SProxy :: _ "institutionType") locOpt
  display D.br'
  sOrgMay <- D.div_ [MC.superOrg] do
    display $ D.div_ [MC.superOrgHeader] empty
    textInput $ join $ Opt.get (SProxy :: _ "superOrganizationName") locOpt
  icOpt <- accumulateContact
    $ getOpt (SProxy :: _ "institutionContact_opt") locOpt
  let icMay = Opt.getSubset icOpt
  sustainOpt <- accumulateSustain $ getOpt (SProxy :: _ "iSustain_opt") locOpt
  let sustainMay = Opt.getSubset sustainOpt
  polsOptTup <- policySigArray descsOn $ Tuple
    (Opt.getWithDefault 1 (SProxy :: _ "_numPolicies") locOpt)
    (Opt.get (SProxy :: _ "institutionPolicies_opt") locOpt)
  let _numPolicies = fst polsOptTup
  let polsOpt = snd polsOptTup
  let polsMay = join $ (map sequence) $ ((map Opt.getSubset) <$> polsOpt)

  versioning <- D.div_ [MC.versioning] do
    display $ D.div_ [MC.versioningHeader] empty
    checkBoxS $ Opt.getWithDefault false (SProxy :: _ "versioning") locOpt
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
    get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just descsOn)
  ) locOpt
  -- TODO: move to sidebar when full preview unavailable
  -- let newLocMay = Opt.getSubset newLoc
  -- display $ locWidg newLocMay
  pure $ Just newLoc
  where
    locOpt = fromMaybe Opt.empty locOptMay
    locWidg :: forall a. Maybe M.Location ->  Widget HTML a
    locWidg locMay = D.div [MC.locPreview] [
      D.div_ [MC.locPreviewHeader] empty
    , D.br'
    , foldMap (\loc -> fold $ MV.spacify $ MV.locElems loc) locMay
    ]

accumulateSustain ::
  CtrlSignal HTML (Opt.Option InstitutionSustainabilityRowOpts)
accumulateSustain oldSust = D.div_ [MC.sustainability] do
  display $ D.div_ [MC.sustainabilityHeader] empty
  missionUrl_Ei <- D.span_ [MC.missionStatement] do
    display $ D.div_ [MC.missionStatementHeader] empty
    urlInput $
      Opt.getWithDefault (Left "") (SProxy :: _ "missionUrl_Ei") oldSust
  let missionUrlMay = hush missionUrl_Ei
  fundingUrl_Ei <- D.span_ [MC.fundingStatement] do
    display $ D.div_ [MC.fundingStatementHeader] empty
    urlInput $
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

accumulateIdent :: Boolean -> CtrlSignal HTML (Opt.Option (M.BaseIdRows ()))
accumulateIdent descsOn oldId = D.div_ [MC.identifier] do
  idMay <- D.div_ [MC.id] $ do
    display $ D.div_ [MC.idHeader] empty
    textInput $ Opt.get (SProxy :: _ "identifier") oldId
  idTypeMay <- D.div_ [MC.idType] $ do
    display $ D.div_ [MC.idTypeHeader] empty
    display $ mkDesc "identifierTypeSTyp" descsOn
    menuSignal $ Opt.get (SProxy :: _ "identifierType") oldId
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "identifier") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "identifierType") idTypeMay
  ) oldId

genRecIdent :: CtrlSignal HTML (Opt.Option (M.BaseIdRows ()))
genRecIdent oldId = do
  let idMay = Opt.get (SProxy :: _ "identifier") oldId
  idMayNew <- case idMay of
    Just idOld -> pure $ Just idOld
    Nothing -> do
      uuid <- runEffectInit UUID.emptyUUID UUID.genUUID
      pure $ do
        pfx <- urnPrefix
        uuidNES <- fromString $ UUID.toString uuid
        pure $ pfx <> uuidNES
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "identifier") idMayNew
    get >>= Opt.maySetOptState (SProxy :: _ "identifierType") (Just M.URN)
  ) oldId
  where
    urnPrefix = fromString "urn:uuid:"

accumulateRelatedIdent :: CtrlSignal HTML (MayOpt M.RelatedIdentifierRows)
accumulateRelatedIdent oldIdMay = D.div_ [MC.relatedId] do
  display $ D.div_ [MC.relatedIdHeader] empty
  idMay <- D.div_ [MC.id] $ textInput
    $ Opt.get (SProxy :: _ "identifier") oldId
  idTypeMay <- D.div_ [MC.idType] $ menuSignal $
    Opt.get (SProxy :: _ "identifierType") oldId
  relTypeMay <- D.div_ [MC.relType] do
    display $ D.div_ [MC.relTypeHeader] empty
    menuSignal $ Opt.get (SProxy :: _ "relationType") oldId
  pure $ Just $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "identifier") idMay
    get >>= Opt.maySetOptState (SProxy :: _ "identifierType") idTypeMay
    get >>= Opt.maySetOptState (SProxy :: _ "relationType") relTypeMay
  ) oldId
  where oldId = (fromMaybe Opt.empty oldIdMay)

relIdSigArray :: CtrlSignal HTML (Tuple Int (Maybe PartialRelIds))
relIdSigArray relIdsMay =
  D.div_ [MC.relatedIds] do
    display $ D.div_ [MC.relatedIdsHeader] empty
    D.div_ [MC.relatedIdList] $
      nonEmptyArrayView accumulateRelatedIdent relIdsMay

accumulateBasicMetadata :: CtrlSignal HTML (Opt.Option BasicMetadataRowOpts)
accumulateBasicMetadata oldBMD = D.div_ [MC.basicMetadata] do
  display $ D.div_ [MC.basicMetadataHeader] empty
  titlesTup <- titleSigArray $ Tuple
    (Opt.getWithDefault 1 (SProxy :: _ "_numTitles") oldBMD)
    (Opt.get (SProxy :: _ "titles") oldBMD)
  let _numTitles = fst titlesTup
  let titles = snd titlesTup
  creatorsTup <- creatorSigArray $ Tuple
    (Opt.getWithDefault 1 (SProxy :: _ "_numCreators") oldBMD)
    (Opt.get (SProxy :: _ "creators") oldBMD)
  let _numCreators = fst creatorsTup
  let creators = snd creatorsTup
  pubYearMay <- D.div_ [MC.pubyear] do
    display $ D.div_ [MC.pubyearHeader] empty
    natInput $ Opt.get (SProxy :: _ "publicationYear") oldBMD
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "titles") titles
    get >>= Opt.maySetOptState (SProxy :: _ "_numTitles") (Just _numTitles)
    get >>= Opt.maySetOptState (SProxy :: _ "creators") creators
    get >>= Opt.maySetOptState (SProxy :: _ "_numCreators") (Just _numCreators)
    get >>= Opt.maySetOptState (SProxy :: _ "publicationYear") pubYearMay
  ) oldBMD

accumulateResType :: Boolean -> CtrlSignal HTML (Opt.Option M.ResourceTypeRows)
accumulateResType descsOn oldRT = D.div_ [MC.resourceType] do
  display $ D.div_ [MC.resourceTypeHeader] empty
  display $ mkDesc "resourceTypeEle" descsOn
  display $ mkDesc "resourceTypeSTyp" descsOn
  genTypMay <- D.div_ [MC.resourceTypeGen] do
    display $ D.div_ [MC.resourceTypeGenHeader] empty
    menuSignal $ Opt.get (SProxy :: _ "generalType") oldRT
  descMay <- D.div_ [MC.resourceTypeDescr] do
    display $ D.div_ [MC.resourceTypeDescrHeader] empty
    textInput $ join $ fromString <$> Opt.get (SProxy :: _ "description") oldRT
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "description") (toString <$> descMay)
    get >>= Opt.maySetOptState (SProxy :: _ "generalType") genTypMay
  ) oldRT

formatSignal :: CtrlSignal HTML (Maybe M.Format)
formatSignal formatMay = D.div_ [MC.format] do
  display $ D.div_ [MC.formatHeader] empty
  textInput formatMay

formatSigArray :: Boolean -> CtrlSignal HTML (Tuple Int (Array M.Format))
formatSigArray descsOn formats = D.div_ [MC.formatList] do
  display $ D.div_ [MC.formatListHeader] empty
  display $ mkDesc "formatEle" descsOn
  arrayView formatSignal formats

titleSignal :: CtrlSignal HTML (Maybe NonEmptyString)
titleSignal titleMay = D.div_ [MC.title] do
  display $ D.div_ [MC.titleHeader] empty
  textInput titleMay

titleSigArray :: CtrlSignal HTML (Tuple Int (Maybe (NonEmptyArray NonEmptyString)))
titleSigArray titles = D.div_ [MC.titleList] do
  nonEmptyArrayView titleSignal titles

creatorSignal :: CtrlSignal HTML (Maybe NonEmptyString)
creatorSignal creatorMay = D.div_ [MC.creator] do
  display $ D.div_ [MC.creatorHeader] empty
  textInput creatorMay

creatorSigArray :: CtrlSignal HTML (Tuple Int (Maybe (NonEmptyArray NonEmptyString)))
creatorSigArray creators = D.div_ [MC.creatorList] do
  nonEmptyArrayView creatorSignal creators

accumulateResMdSource ::
  CtrlSignal HTML (Opt.Option ResourceMetadataSourceRowOpts)
accumulateResMdSource oldRMDS = D.div_ [MC.resourceMDSource] do
  display $ D.div_ [MC.resourceMDSourceHeader] empty
  let descsOn = Opt.getWithDefault true (SProxy :: _ "descs_on") oldRMDS
  url_Ei <- D.div_ [MC.url] $ urlInput $
    Opt.getWithDefault (Left "") (SProxy :: _ "url_Ei") oldRMDS
  let urlMay = hush url_Ei
  relTypMay <- D.div_ [MC.relType] $ do
    display $ D.div [MC.relTypeHeader] empty
    display $ mkDesc "relationTypeSTyp" descsOn
    menuSignal $ Opt.get (SProxy :: _ "relationType") oldRMDS
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "url_Ei")
      (Just url_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "url")
      urlMay
    get >>= Opt.maySetOptState (SProxy :: _ "relationType") relTypMay
  ) oldRMDS

accumulateContact :: CtrlSignal HTML (Opt.Option InstitutionContactRowOpts)
accumulateContact oldIC = D.div_ [MC.institutionContact] do
  display $ D.div_ [MC.institutionContactHeader] empty
  email_Ei <- D.div_ [MC.contactEmail] do
    display $ D.div_ [MC.contactEmailHeader] empty
    emailInput $ Opt.getWithDefault (Left "") (SProxy :: _ "email_Ei") oldIC
  let emailMay = hush email_Ei
  contactTypMay <- D.div_ [MC.contactType] do
    display $ D.div_ [MC.contactTypeHeader] empty
    menuSignal $ Opt.get (SProxy :: _ "contactType") oldIC
  pure $ execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "email_Ei")
      (Just email_Ei)
    get >>= Opt.maySetOptState (SProxy :: _ "emailAddress")
      emailMay
    get >>= Opt.maySetOptState (SProxy :: _ "contactType") contactTypMay
  ) oldIC

accumulatePolicy :: CtrlSignal HTML (MayOpt InstitutionPolicyRowOpts)
accumulatePolicy oldPolMay = D.div_ [MC.institutionPolicy] do
  display $ D.div_ [MC.institutionPolicyHeader] empty
  let descsOn = Opt.getWithDefault true (SProxy :: _ "descs_on") oldPol
  polPolTypeMay <- D.div_ [MC.policy] do
    display $ D.div_ [MC.policyHeader] empty
    menuSignal $ Just $
      Opt.getWithDefault FreeTextPolicy (SProxy :: _ "polPolType") oldPol
  let polPolType = fromMaybe FreeTextPolicy polPolTypeMay
  txtInMay <- D.div_ [MC.policy] $ textInput $
    Opt.get (SProxy :: _ "policy_str") oldPol
  let policy_ei = checkPolicy polPolType $ maybe "" toString txtInMay
  display $ case policy_ei of
    Right _ -> mempty
    Left err -> errorDisplay $ Just err
  let policyMay = hush policy_ei
  polTypeMay <- D.div_ [MC.policyType] do
    display $ D.div_ [MC.policyTypeHeader] empty
    menuSignal $ Opt.get (SProxy :: _ "policyType") oldPol
  appliesToProd <- D.div_ [MC.applies] $ do
    display $ D.div_ [MC.appliesHeader] empty
    display $ mkDesc "appliesToProductAttr" descsOn
    menuSignal $ Opt.get (SProxy :: _ "appliesToProduct") oldPol
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
policySigArray :: Boolean -> CtrlSignal HTML (Tuple Int (Maybe PartialPols))
policySigArray descsOn polsMayOld = D.div_ [MC.institutionPolicies] do
  display $ D.div_ [MC.institutionPoliciesHeader] empty
  display $ mkDesc "institutionPoliciesEle" descsOn
  nonEmptyArrayView accumulatePolicy $ Tuple (fst polsMayOld) polsMay
  where
    polsMay = (snd polsMayOld) <#> (\ps -> ps <#> (\p -> execState (do
      get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just descsOn)
    ) p))

-- TODO: PR to purescript-option
getOpt ::
  forall label option option' proxy suboption.
  IsSymbol label =>
  Prim.Row.Cons label (Opt.Option suboption) option' option =>
  proxy label ->
  Opt.Option option ->
  Opt.Option suboption
getOpt = Opt.getWithDefault Opt.empty


-- Used for updating an option in the view-model, typically to inject data
-- from higher up in the component tree to lower down.
-- Type is something like, x? and y? need Cons/Lack constraints:
-- Sproxy a -> Opt.option (x?) -> Boolean -> Maybe (Opt.option y?)
updateDescOn sprxy anOpt descsOn = ((Opt.get sprxy anOpt)
  <#> (\lo -> execState (do
    get >>= Opt.maySetOptState (SProxy :: _ "descs_on") (Just descsOn)) lo
    )
  )

makeSidebar :: forall a. Maybe M.MetajeloRecord -> Unit -> Int -> Widget HTML a
makeSidebar recMay dataCite ix = createTabWidget tabPages 0
  where
    tabPages = [previewTP, dataCiteTP]
    previewTP = {
        tab: D.text "Preview"
      , page: recWidg recMay
      }
    dataCiteTP = {
        tab: D.text "DataCite Retrieval"
      , page: D.text "TODO"
    }

type Tab = Widget HTML Void
type Page = Widget HTML Void
type TabPage = {
  tab :: Tab
, page :: Page
}

createTabWidget :: forall a. Array TabPage -> Int -> Widget HTML a
createTabWidget tPages ix0 = do
  tabSel <- tabPageDiv' [
    D.nav [MC.sideBarNav] $ tabIndexer tabs
  , ix0 <$ pageAt ix0
  ]
  createTabWidget tPages tabSel
  where
    tabIndexer :: Array Tab -> Array (Widget HTML Int)
    tabIndexer ts = map mkIxedTw $ A.zip (0 `A.(..)` A.length ts) ts
      where
        mkIxedTw :: Tuple Int Tab -> Widget HTML Int
        mkIxedTw ixtb = do
          void $ D.div [P.onClick, MC.sideBarTab] [absurd <$> snd ixtb]
          pure (fst ixtb)
    tabs = (\tp -> tp.tab) <$> tPages
    pages :: Array Page
    pages = (\tp -> tp.page) <$> tPages
    emptyPage :: Page
    emptyPage = D.div' [D.text "No pages to show!"]
    pageAt :: Int -> Page
    pageAt ix = fromMaybe emptyPage (pages A.!! ix)
    tabPageDiv' :: D.El'
    tabPageDiv' els =
      D.div [MC.sideBarGrid] [
        D.div [MC.sideBarMenu] [
          D.div [MC.sideBarCol] els
        ]
      ]
