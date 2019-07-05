module Metajelo.Forms where

import Prelude (bind, pure, ($), (<$>), (<<<))

import Concur.Core (Widget)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Applicative ((<$))
import Control.Category ((>>>))
import Data.Either (Either(..))
import Data.Maybe (maybe)
import Data.Monoid (mempty)
import Data.Newtype (class Newtype)
import Data.Time.Duration (Milliseconds(..))
import Formless as F
import Formless.Internal.Transform as Internal
import Metajelo.Validation as V
import Text.Email.Validate (EmailAddress)

-- import Metajelo.Types
-- import URL.Validator                        (urlToString)

type User =
  { name :: String
  , email :: EmailAddress
  }

-- Note: Common practice to use `Void` to represent "no error possible"
newtype InstContactForm r f = InstContactForm (r
  ( name   :: f V.FieldError String String
  , email1 :: f V.FieldError String EmailAddress
  , email2 :: f V.FieldError String EmailAddress
  ))
derive instance newtypeInstContactForm :: Newtype (InstContactForm r f) _

proxies :: F.SProxies InstContactForm
proxies = F.mkSProxies (F.FormProxy :: F.FormProxy InstContactForm)

-- Some type helpers
type InputForm = InstContactForm Record F.InputField
type OutputForm = InstContactForm Record F.OutputField
type Validators = InstContactForm Record (F.Validation InstContactForm (Widget HTML))
type FState = F.State InstContactForm (Widget HTML)

initialInputs :: InputForm
initialInputs = F.wrapInputFields
  { name: ""
  , email1: ""
  , email2: ""
  }

validators :: Validators
validators = InstContactForm
  { name: V.minLength 3
  , email1: V.emailFormat
  , email2: V.equalsEmail1 >>> V.emailFormat
  }

-- This should be in Formless
initState :: InputForm -> Validators -> FState
initState form validations =
  { validity: F.Incomplete
  , dirty: false
  , submitting: false
  , errors: 0
  , submitAttempts: 0
  , form: Internal.inputFieldsToFormFields form
  , internal: F.InternalState
    { initialInputs: form
    , validators: validations
    , allTouched: false
    }
  }

formWidget :: FState -> Widget HTML User
formWidget fstate = do
  query <- D.div'
    [ D.div' [D.text "Name"]
    , D.input
      [ P.value $ F.getInput proxies.name fstate.form
      , (F.set proxies.name <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.name fstate.form
    , D.div' [D.text "Email"]
    , D.input
      [ P.value $ F.getInput proxies.email1 fstate.form
        -- This will help us avoid hitting the server on every single key press.
      , (F.asyncSetValidate debounceTime proxies.email1 <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.email1 fstate.form
    , D.div' [D.text "Confirm Email"]
    , D.input
      [ P.value $ F.getInput proxies.email2 fstate.form
      , (F.asyncSetValidate debounceTime proxies.email2 <<< P.unsafeTargetValue) <$> P.onChange
      ]
    , errorDisplay $ F.getError proxies.email2 fstate.form
    , D.div' [F.submit <$ D.button [P.onClick] [D.text "Submit"]]
    ]
  res <- F.eval query fstate
  case res of
    Left fstate' -> formWidget fstate'
    Right out -> do
      let form = F.unwrapOutputFields out
      pure {name: form.name, email: form.email1}
  where
    errorDisplay = maybe mempty (\err -> D.div [P.style {color: "red"}] [D.text $ V.toText err])
    debounceTime = Milliseconds 300.0
