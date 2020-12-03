{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ sources = [ "src/**/*.purs", "test/**/*.purs" ]
, name = "purescript-metajelo-ui"
, dependencies =
  [ "concur-react"
  , "datetime"
  , "dom-filereader"
  , "email-validate"
  , "foreign-object"
  , "metajelo"
  , "metajelo-ui-css-classes"
  , "metajelo-web"
  , "naturals"
  , "now"
  , "option"
  , "prelude"
  , "profunctor"
  , "stringutils"
  , "url-validator"
  , "uuid"
  , "variant"
  ]
, packages = ./packages.dhall
}
