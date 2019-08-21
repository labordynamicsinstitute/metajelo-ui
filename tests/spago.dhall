{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ sources =
    [ "src/**/*.purs", "test/**/*.purs" ]
, name =
    "purescript-metajelo-ui-test"
, dependencies =
    [ "debug"
    , "console"
    , "foreign"
    , "metajelo-ui"
    , "psci-support"
    , "test-unit"
    ]
, packages =
    ../packages.dhall
}
