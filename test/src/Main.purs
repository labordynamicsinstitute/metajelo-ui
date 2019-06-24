module Test.Main where

import Prelude

import Effect                            (Effect)
import Effect.Aff                        (Aff)
import Effect.Class                      (liftEffect)
import Effect.Console                    (logShow)
import Test.Unit.Assert                  as Assert
import Text.Email.Validate               as EA
import URL.Validator                     as URL

import Metajelo.Types                    as MJ
import Metajelo.XPaths                   as MXP

main :: Effect Unit
main = pure unit

tlog :: forall a. Show a => a -> Aff Unit
tlog = liftEffect <<< logShow

