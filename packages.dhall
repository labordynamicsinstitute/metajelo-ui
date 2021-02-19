{-
Welcome to your new Dhall package-set!

Below are instructions for how to edit this file for most use
cases, so that you don't need to know Dhall to use it.

## Warning: Don't Move This Top-Level Comment!

Due to how `dhall format` currently works, this comment's
instructions cannot appear near corresponding sections below
because `dhall format` will delete the comment. However,
it will not delete a top-level comment like this one.

## Use Cases

Most will want to do one or both of these options:
1. Override/Patch a package's dependency
2. Add a package not already in the default package set

This file will continue to work whether you use one or both options.
Instructions for each option are explained below.

### Overriding/Patching a package

Purpose:
- Change a package's dependency to a newer/older release than the
    default package set's release
- Use your own modified version of some dependency that may
    include new API, changed API, removed API by
    using your custom git repo of the library rather than
    the package set's repo

Syntax:
Replace the overrides' "{=}" (an empty record) with the following idea
The "//" or "⫽" means "merge these two records and
  when they have the same value, use the one on the right:"
-------------------------------
let override =
  { packageName =
      upstream.packageName // { updateEntity1 = "new value", updateEntity2 = "new value" }
  , packageName =
      upstream.packageName // { version = "v4.0.0" }
  , packageName =
      upstream.packageName // { repo = "https://www.example.com/path/to/new/repo.git" }
  }
-------------------------------

Example:
-------------------------------
let overrides =
  { halogen =
      upstream.halogen // { version = "master" }
  , halogen-vdom =
      upstream.halogen-vdom // { version = "v4.0.0" }
  }
-------------------------------

### Additions

Purpose:
- Add packages that aren't already included in the default package set

Syntax:
Replace the additions' "{=}" (an empty record) with the following idea:
-------------------------------
let additions =
  { "package-name" =
       mkPackage
         [ "dependency1"
         , "dependency2"
         ]
         "https://example.com/path/to/git/repo.git"
         "tag ('v4.0.0') or branch ('master')"
  , "package-name" =
       mkPackage
         [ "dependency1"
         , "dependency2"
         ]
         "https://example.com/path/to/git/repo.git"
         "tag ('v4.0.0') or branch ('master')"
  , etc.
  }
-------------------------------

Example:
-------------------------------
let additions =
  { benchotron =
      mkPackage
        [ "arrays"
        , "exists"
        , "profunctor"
        , "strings"
        , "quickcheck"
        , "lcg"
        , "transformers"
        , "foldable-traversable"
        , "exceptions"
        , "node-fs"
        , "node-buffer"
        , "node-readline"
        , "datetime"
        , "now"
        ]
        "https://github.com/hdgarrood/purescript-benchotron.git"
        "v7.0.0"
  }
-------------------------------
-}

let mkPackage =
      https://raw.githubusercontent.com/purescript/package-sets/psc-0.13.2-20190725/src/mkPackage.dhall sha256:0b197efa1d397ace6eb46b243ff2d73a3da5638d8d0ac8473e8e4a8fc528cf57

let upstream =
      https://github.com/purescript/package-sets/releases/download/psc-0.13.4-20191110/packages.dhall sha256:563a7f694e18e6399f7f6d01f5b7e3c3345781655d99945768f48e458feb93a4

let overrides = { metajelo-ui = ./spago.dhall as Location }

let additions =
      { codec =
          mkPackage
            [ "profunctor", "transformers" ]
            "https://github.com/garyb/purescript-codec.git"
            "v3.0.0"
      , codec-argonaut =
          mkPackage
            [ "argonaut-core"
            , "codec"
            , "generics-rep"
            , "variant"
            , "ordered-collections"
            , "type-equality"
            ]
            "https://github.com/garyb/purescript-codec-argonaut.git"
            "v7.1.0"
      , concur-core =
          mkPackage
            [ "aff"
            , "arrays"
            , "avar"
            , "console"
            , "foldable-traversable"
            , "free"
            , "nonempty"
            , "profunctor-lenses"
            , "tailrec"
            , "debug" -- TODO: remove
            ]
            "https://github.com/bbarker/purescript-concur-core.git"
            "f79ea92c63a31e7bc98c14c272263173b758628d"
      , concur-react =
          mkPackage
            [ "aff"
            , "arrays"
            , "avar"
            , "console"
            , "foldable-traversable"
            , "free"
            , "nonempty"
            , "react"
            , "react-dom"
            , "tailrec"
            , "web-dom"
            , "web-html"
            , "debug" -- TODO: remove
            ]
            "https://github.com/bbarker/purescript-concur-react.git"
            "a300c388ba08b13703f8ad2a93cd856b6a08723b"
      , datacite =
          { dependencies =
            [ "effect", "functors", "generics-rep", "naturals", "simple-json" ]
          , repo = "https://github.com/CornellCAC/purescript-datacite.git"
          , version = "v0.1.0"
          }
        , either-extra =
          { dependencies =
            [ "either" ]
          , repo = "https://github.com/bbarker/purescript-either-extra.git"
          , version = "v0.0.4"
          }
      , enums =
          mkPackage
            [ "control"
            , "either"
            , "gen"
            , "maybe"
            , "newtype"
            , "nonempty"
            , "partial"
            , "prelude"
            , "tuples"
            , "unfoldable"
            ]
            "https://github.com/bbarker/purescript-enums.git"
            "1979eb74baec39b5e62567948f402b4194230e9f"
      , metajelo =
          mkPackage
            [ "datacite"
            , "either-extra"
            , "email-validate"
            , "enums"
            , "generics-rep"
            , "globals"
            , "js-date"
            , "naturals"
            , "nonbili-dom"
            , "stringutils"
            , "url-validator"
            , "web-dom"
            , "web-dom-parser"
            , "web-dom-xpath"
            , "xpath-like"
            ]
            "https://github.com/labordynamicsinstitute/purescript-metajelo.git"
            "v4.0.0"
      , metajelo-web =
          mkPackage
            [ "prelude"
            , "concur-react"
            , "datacite"
            , "either-extra"
            , "email-validate"
            , "foreign-object"
            , "metajelo"
            , "profunctor"
            , "stringutils"
            , "url-validator"
            ]
            "https://github.com/labordynamicsinstitute/metajelo-web.git"
            "v2.0.0"
      , metajelo-ui-css-classes =
          mkPackage
            [ "prelude", "concur-core", "concur-react" ]
            "https://github.com/labordynamicsinstitute/metajelo-ui-css-classes.git"
            "v1.0.1"
      , naturals =
          mkPackage
            [ "enums", "maybe", "prelude" ]
            "https://github.com/LiamGoodacre/purescript-naturals.git"
            "v3.0.0"
      , nonbili-dom =
        mkPackage
          [ "effect", "web-dom", "web-html" ]
          "https://github.com/nonbili/purescript-nonbili-dom.git"
          "v0.3.0"
      , option =
          mkPackage
            [ "argonaut-codecs"
            , "argonaut-core"
            , "codec"
            , "codec-argonaut"
            , "either"
            , "foreign"
            , "foreign-object"
            , "lists"
            , "maybe"
            , "profunctor"
            , "prelude"
            , "record"
            , "record-extra"
            , "simple-json"
            , "transformers"
            , "tuples"
            , "type-equality"
            , "unsafe-coerce"
            ]
            "https://github.com/bbarker/purescript-option.git"
            "b884d27d48ebb6b4ec3a3369a69311c95b0783bf"
      , stringutils =
          mkPackage
            [ "strings"
            , "partial"
            , "arrays"
            , "either"
            , "maybe"
            , "prelude"
            , "integers"
            ]
            "https://github.com/menelaos/purescript-stringutils.git"
            "v0.0.8"
      , url-validator =
          mkPackage
            [ "nullable" ]
            "https://github.com/bbarker/purescript-url-validator.git"
            "v2.1.0"
      , web-dom-parser =
          mkPackage
            [ "prelude", "effect", "partial", "web-dom" ]
            "https://github.com/purescript-web/purescript-web-dom-parser.git"
            "v6.0.0"
      , web-dom-xpath =
          mkPackage
            [ "prelude", "effect", "partial", "web-dom" ]
            "https://github.com/purescript-web/purescript-web-dom-xpath.git"
            "v1.2.1"
      , xpath-like =
          mkPackage
            [ "prelude" ]
            "https://github.com/bbarker/purescript-xpath-like.git"
            "v3.0.0"
      }

in  upstream // overrides // additions
