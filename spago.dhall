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
    , "email-validate"
    , "foreign-object"
    , "metajelo"
    , "metajelo-web"
    , "naturals"
    , "option"
    , "profunctor"
    , "stringutils"
    , "url-validator"
    , "variant"
    ]
, packages =
    ./packages.dhall
}
