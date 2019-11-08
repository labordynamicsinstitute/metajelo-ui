{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ sources =
    [ "src/**/*.purs", "test/**/*.purs" ]
, name =
    "purescript-metajelo-ui"
, dependencies =
    [ "prelude"
    , "concur-formless"
    , "concur-react"
    , "datetime"
    , "email-validate"
    , "foreign-object"
    , "formatters"
    , "metajelo"
    , "metajelo-web"
    , "naturals"
    , "now"
    , "option"
    , "profunctor"
    , "stringutils"
    , "url-validator"
    , "variant"
    ]
, packages =
    ./packages.dhall
}
