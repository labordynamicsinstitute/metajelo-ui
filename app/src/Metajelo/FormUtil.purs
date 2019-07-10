module Metajelo.FormUtil where

import Prelude (class Show, Void, bind, join, pure, show, (+), (-), ($), (<$>), (<#>), (<<<))

import Concur.Core (Widget)
import Concur.React (HTML)
import Concur.React.DOM as D
import Concur.React.Props as P
import Control.Applicative ((<$))
import Control.Category ((>>>))
import Data.Array ((:))
import Data.Bounded (class Bounded, bottom)
import Data.Either (Either(..), hush)
import Data.Enum (class BoundedEnum, class Enum, upFromIncluding, Cardinality(..), cardinality, fromEnum, toEnum)
import Data.Eq (class Eq)
import Data.Maybe (Maybe(..), maybe)
import Data.Monoid (mempty)
import Data.Newtype (class Newtype, unwrap, wrap)
import Data.Symbol (class IsSymbol, SProxy)
import Data.Time.Duration (Milliseconds(..))
import Data.Variant (Variant)
-- import Data.Unfoldable1 (singleton)
import Formless as F
import Formless.Internal.Transform as Internal
import Metajelo.Types as M
import Metajelo.Validation as V
import Metajelo.XPaths.Read as MR
import Prim.Row (class Cons)
import Text.Email.Validate (EmailAddress)

-- Note: Common practice to use `Void` to represent "no error possible"

-- | No validation is needed for this field type, as the input and ouput
-- | types (`io`) are the same.
type IdentityField f io = f Void io io

mayToString :: forall a. Show a => Maybe a -> String
mayToString (Just v) = show v
mayToString Nothing = ""

emptyMeansOptional :: forall a. Show a => Maybe a -> String
emptyMeansOptional mayV = case mayV of
  Nothing -> "(optional)"
  x -> mayToString x

menu :: forall opt s form e o restF restI inputs fields
   . IsSymbol s
   => IsOption opt
   => BoundedEnum opt
   => Newtype (form Record F.FormField) (Record fields)
   => Cons s (F.FormField e opt o) restF fields
   => Newtype (form Variant F.InputFunction) (Variant inputs)
   => Cons s (F.InputFunction e opt o) restI inputs
   => form Record F.FormField
  -> SProxy s
  -> Widget HTML (F.Query form)
menu form field = D.select
  [ P.defaultValue $ toOptionValue $ F.getInput field form
    , (F.set field <<< fromOptionValue <<< P.unsafeTargetValue) <$> P.onChange
    ]
  (upFromIncluding (bottom :: opt) <#> \opt ->
    D.option [P.value (toOptionValue opt)] [D.text (toOptionLabel opt)])

class IsOption a where
  toOptionValue :: a -> String
  toOptionLabel :: a -> String
  fromOptionValue :: String -> a

instance isOptionMaybeInstitutionContactType
  :: IsOption (Maybe M.InstitutionContactType) where
    toOptionValue = mayToString
    toOptionLabel = emptyMeansOptional
    fromOptionValue = join <<< hush <<< MR.readInstitutionContactType
