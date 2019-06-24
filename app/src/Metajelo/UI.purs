module Metajelo.UI where

import Prelude                              (Unit, bind, pure, unit, ($), (<>))

import Concur.React.Run                     (runWidgetInDom)
import Concur.React.DOM                     (div, span, text)
import Concur.React.Props                   (className)
import Data.Unfoldable1                     (singleton)
import Effect                               (Effect)
import Effect.Exception                     as EX
import Effect.Exception                     (Error)
import Metajelo.Forms                       as MF
import Metajelo.XPaths                      as MXP

main :: Effect Unit
main = pure unit
