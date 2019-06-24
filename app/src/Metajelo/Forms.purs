module Metajelo.Forms where

import Prelude                             (class Functor, class Monoid,
                                            class Semigroup,
                                            identity, join, map, mempty, show,
                                            (#), ($), (<<<), (<>))


import Concur.Core                          (Widget)
import Concur.React                         (HTML)
import Concur.React.DOM                     (a, br', cite',
                                             div, div',
                                             li, li',
                                             span, span', text, ul
                                             )
import Concur.React.Props                   (Props, classList,
                                             href, className)
import Data.Maybe                           (Maybe(..), isNothing)
import Data.Array                           (init)
import Data.Foldable                        (class Foldable, any,
                                             foldMap, intercalate)
import Data.String                          as S
import Data.String.Utils                    (endsWith, fromCharArray)
import Data.Unfoldable                      (fromMaybe)
import Data.Unfoldable1                     (class Unfoldable1, singleton)
import Foreign.Object                       as FO
import Metajelo.Types
import Text.Email.Validate                  as EA
import URL.Validator                        (urlToString)

