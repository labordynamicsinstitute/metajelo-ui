module Metajelo.UI where

import Prelude (Unit, bind, pure, unit, ($), (<>))

import Concur.Core (Widget)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Run (runWidgetInDom)
import Data.Show (show)
import Effect (Effect)
import Metajelo.Forms as MF
import Metajelo.Types as M


import Metajelo.View (contactWidg)


main :: Effect Unit
main = pure unit

runFormSPA :: String -> Effect Unit
runFormSPA divId = runWidgetInDom divId page

page :: Widget HTML Unit
page = do
  contact <- D.div'
    [ D.h2' [D.text "Institution Contact"]
    , MF.contactFormDefault
    ]
  -- Assuming some effectful computation to receive the ID
  -- id <- registerUser user
  -- let user = { name: form.name, email: form.email, id }
  -- liftEffect $ Console.log $ "Got a user! " <> show (user :: MF.User)

  --D.h2' [D.text $ "Got a contact! " <> show contact]
  contactWidg contact

