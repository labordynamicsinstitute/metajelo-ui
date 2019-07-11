module Metajelo.UI where

import Prelude (Unit, bind, pure, unit, ($), (<>))

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


main :: Effect Unit
main = pure unit

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

page :: forall a. Widget HTML a
page = do
  dyn $ MF.contactSignal Nothing


