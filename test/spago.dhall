{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name =
    "purescript-metajelo-ui-test"
, dependencies = [
    "debug"
  , "console"
  , "foreign"
  , "metajelo-ui"
  , "psci-support"
  , "test-unit"
  ]
, packages =
    (../packages.dhall) //
    { metajelo-ui =
        { repo = "../app"
        , version = ""
        , dependencies = (../app/spago.dhall).dependencies
        }
    }

}
