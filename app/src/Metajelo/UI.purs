module Metajelo.UI where

import Prelude (Unit, bind, discard, pure, unit, ($), (<>))

import Concur.Core (Widget)
import Concur.Core.FRP (Signal, display, dyn, step)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Run (runWidgetInDom)
import Data.Maybe (Maybe(..))
import Data.Show (show)
import Effect (Effect)
import Metajelo.Forms as MF
import Metajelo.Types as M


-- TODO: extract this example as a library and use to accumulate values as below:
-- TODO: https://github.com/natefaubion/purescript-heterogeneous/blob/master/test/Record.purs#L150-L19
-- -- | Accumulator type for `MetajeloRecord`, with each field
-- -- | wrapped in `Maybe`.
-- type MetajeloRecordPartial = {
  
-- --   identifier :: Maybe Identifier
-- -- , date :: Maybe XsdDate
-- --   -- ^ The date of the original creation of this metadata record
-- -- , lastModified :: Maybe XsdDate
-- --   -- ^ The date of the most recent modification of this recocrd
-- -- , relatedIdentifiers :: Maybe NonEmptyArray RelatedIdentifier
-- -- , supplementaryProducts :: Maybe NonEmptyArray SupplementaryProduct
-- --   -- ^ The link to the set of supplemenary products
-- }

main :: Effect Unit
main = pure unit

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

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


