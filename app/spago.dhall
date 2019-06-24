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
    , "naturals"
    , "profunctor"
    , "stringutils"
    , "url-validator"
    ]
, packages =
    ../packages.dhall
}
