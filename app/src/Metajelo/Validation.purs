module Metajelo.Validation where

import Prelude

import Control.Category (identity)
import Data.Bifunctor (lmap)
import Data.Either (Either(..))
import Data.Foldable (length) as Foldable
import Data.Generic.Rep (class Generic)
import Data.Generic.Rep.Show (genericShow)
import Data.Int (fromString) as Int
import Data.Lens (preview)
import Data.Maybe (Maybe, maybe)
import Data.Newtype (class Newtype, unwrap)
import Data.String (contains, length, null)
import Data.String.Pattern (Pattern(..))
import Effect.Aff (Milliseconds(..), delay)
import Effect.Aff.Class (class MonadAff, liftAff)
import Effect (Effect)
--import Effect.Exception (message, try)
import Formless (FormFieldResult, _Error)
import Formless as F
import Formless.Validation (Validation(..), hoistFn_, hoistFnE_)
import Metajelo.Types as M
import Metajelo.XPaths.Read as MR
import Text.Email.Validate as EA
import Type.Data.Symbol (SProxy(..))

type Email = EA.EmailAddress

data FieldError
  = EmptyField
  | InvalidEmail String
  | InvalidInput String
  | TooShort Int
  | TooLong Int
  | InvalidInt String
  | NotEqual String String

derive instance genericFieldError :: Generic FieldError _
instance showFieldError :: Show FieldError where
  show = genericShow

instance toTextFieldError :: ToText FieldError where
  toText EmptyField = "This field is required."
  toText (InvalidInput str) = "Invalid input: " <> str
  toText (InvalidEmail str) = "Email validation error: " <> str
  toText (TooShort n) = "You must enter at least " <> show n <> " characters."
  toText (TooLong n) = "You must enter less than " <> show n <> " characters."
  toText (InvalidInt str) = "Could not parse \"" <> str <> "\" to a valid integer."
  toText (NotEqual str0 str1) = "This field contains \"" <> str1 <> "\" but must be equal to \"" <> str0 <> "\" to validate."

-- | Some useful types we'll parse to
newtype Name = Name String
derive instance newtypeName :: Newtype Name _
derive newtype instance showName :: Show Name

-- | Unpacks errors to render as a string
showError :: ∀ e o. ToText e => FormFieldResult e o -> Maybe String
showError = map toText <<< preview _Error

class ToText item where
  toText :: item -> String

instance toTextString :: ToText String where
  toText = identity

--------------------
-- Formless Validation
--------------------

-- | Assumes input is valid
dummy ::  ∀ form m a. Monad m => Validation form m Void a a
dummy = hoistFn_ identity

-- -- | Assumes input is valid
-- dummyUnwrap ::  ∀ form m t a. Monad m => Newtype t a => Validation form m Void t a
-- dummyUnwrap = hoistFn_ unwrap


-- -- | For reading data fields of nullary constructors
-- readSimpleType :: ∀ form m t. Monad m =>
--   (String -> Either String t) -> Validation form m FieldError String t
-- readSimpleType reader = hoistFnE_ $ \str ->
--   lmap (\err -> InvalidInput $ err) $ reader str

emailFormat :: ∀ form m. Monad m => Validation form m FieldError String Email
emailFormat = hoistFnE_ $ \str ->
  lmap (\msg -> InvalidEmail msg) $ EA.validate str

minLength :: ∀ form m. Monad m => Int -> Validation form m FieldError String String
minLength n = hoistFnE_ $ \str ->
  let n' = length str
   in if n' < n then Left (TooShort n) else Right str

-- | The opposite of minLength.
maxLength :: ∀ form m. Monad m => Int -> Validation form m FieldError String String
maxLength n = hoistFnE_ \str ->
  let n' = length str
   in if n' > n then Left (TooLong n) else Right str

exists :: ∀ form m a. Monad m => Validation form m FieldError (Maybe a) a
exists = hoistFnE_ $ maybe (Left EmptyField) Right

strIsInt :: ∀ form m. Monad m => Validation form m FieldError String Int
strIsInt = hoistFnE_ $ \str -> maybe (Left $ InvalidInt str) Right (Int.fromString str)

nonEmptyArray :: ∀ form m a. Monad m => Validation form m FieldError (Array a) (Array a)
nonEmptyArray = hoistFnE_ \arr ->
  if Foldable.length arr > 0
    then Right arr
    else Left EmptyField

-- | Validate that an input string is not empty
nonEmptyStr :: ∀ form m. Monad m => Validation form m FieldError String String
nonEmptyStr = hoistFnE_ $ \str ->
  if null str
    then Left EmptyField
    else Right str

--------------------
-- Formless Async Validation
--------------------

-- emailIsUsed :: ∀ form m. MonadAff m => Validation form m FieldError Email Email
-- emailIsUsed = Validation \_ e@(EA.EmailAddress e') -> do
--   -- Perhaps we hit the server to  if the email is in use
--   _ <- liftAff $ delay $ Milliseconds 1000.0
--   pure $ if (contains (Pattern "t") e')
--     then pure e
--     else Left EmailInUse

-- enoughMoney :: ∀ form m. MonadAff m => Validation form m FieldError Int Int
-- enoughMoney = Validation \_ i -> do
--   -- Let's check if we have enough money...
--   _ <- liftAff $ delay $ Milliseconds 5000.0
--   pure $ if (i > 1000)
--     then pure i
--     else Left NotEnoughMoney
