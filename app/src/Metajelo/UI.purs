module Metajelo.UI where

import Prelude                              (Unit, bind, pure, unit, ($), (<>))

import Concur.React.Run                     (runWidgetInDom)
import Concur.React.DOM                     (div, span, text)
import Concur.React.Props                   (className)
import Data.Unfoldable1                     (singleton)
import Effect                               (Effect)
import Effect.Exception                     as EX
import Effect.Exception                     (Error)
import Formless as                          F
import Metajelo.Forms                       as MF
import Metajelo.XPaths                      as MXP

main :: Effect Unit
main = runWidgetInDom "form" (formWidget initialInputs formValidators)

formWidget :: InputForm -> Validators -> Widget HTML (form Record F.OutputField)
formWidget initForm initValidators = fst <$> runStateT formStWidget (initState initForm initValidators)

page :: forall a. Widget HTML a
page = do
  out <- D.div'
    [ D.h1' [D.text "My Form"]
    , formWidget initialInputs validators
    ]
  let form = F.unwrapOutputFields out
  -- Assuming some effectful computation to receive the ID
  id <- registerUser { name: form.name, email: form.email1 }
  let user = { name: form.name, email: form.email, id }
  liftEffect $ Console.log $ "Got a user! " <> show (user :: User)
