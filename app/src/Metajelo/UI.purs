module Main where

import Concur.Core (Widget)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Run (runWidgetInDom)
import Data.Show (show)
import Effect (Effect)
import Metajelo.Forms as MF
import Prelude (Unit, bind, ($), (<>))

main :: Effect Unit
main = runWidgetInDom "form" page

formWidget :: Widget HTML MF.User
formWidget = MF.formWidget (MF.initState MF.initialInputs MF.validators)

page :: Widget HTML Unit
page = do
  user <- D.div'
    [ D.h1' [D.text "My Form"]
    , formWidget
    ]
  -- Assuming some effectful computation to receive the ID
  -- id <- registerUser user
  -- let user = { name: form.name, email: form.email, id }
  -- liftEffect $ Console.log $ "Got a user! " <> show (user :: MF.User)
  D.h2' [D.text $ "Got a user! " <> show user]
