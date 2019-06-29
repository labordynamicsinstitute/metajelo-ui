{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name =
    "my-project"
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
    , "effect"
    , "console"
    , "psci-support"
    ]
, packages =
    ./packages.dhall
, sources =
    [ "src/**/*.purs", "test/**/*.purs" ]
}
