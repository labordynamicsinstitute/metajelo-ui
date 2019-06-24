module Metajelo.Forms where

import Prelude                             (class Functor, class Monoid,
                                            class Semigroup,
                                            identity, join, map, mempty, show,
                                            (#), ($), (<<<), (<>))


import Concur.Core                          (Widget)
import Concur.React                         (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Data.Maybe                           (Maybe(..), isNothing)
import Data.Array                           (init)
import Data.Foldable                        (class Foldable, any,
                                             foldMap, intercalate)
import Data.String                          as S
import Data.String.Utils                    (endsWith, fromCharArray)
import Data.Unfoldable                      (fromMaybe)
import Data.Unfoldable1                     (class Unfoldable1, singleton)
import Effect.Aff                           (Aff)
import Foreign.Object                       as FO
import Formless                             as F
import Metajelo.Types
import Text.Email.Validate                  as EA
import URL.Validator                        (urlToString)


formStWidget :: StateT (F.State form Aff) (Widget HTML) (form Record F.OutputField)
formStWidget = do
  fstate <- get
  query <- D.div'
    [ D.input
      [ P.value $ F.getInput _name fstate.form
      , (F.set _name <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , D.input
      [ P.value $ F.getInput _email1 fstate.form
        -- This will help us avoid hitting the server on every single key press.
      , (F.asyncSetValidate debounceTime _email1 <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , D.input
      [ P.value $ F.getInput _email2 fstate.form
      , (F.asyncSetValidate debounceTime _email2 <<< P.unsafeTargetValue) <$> P.onChange
      ]
    ]
  res <- eval query
  maybe formStWidget pure res
  where
    _name = SProxy :: _ "name"
    _email1 = SProxy :: _ "email1"
    _email2 = SProxy :: _ "email2"
    debounceTime = Milliseconds 300.0
