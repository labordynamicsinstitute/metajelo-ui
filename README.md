# metajelo-ui

[![Build Status](https://travis-ci.com/labordynamicsinstitute/metajelo-ui.svg?token=fzz41xcnJ15QPD7QhZkZ&branch=master)](https://travis-ci.com/labordynamicsinstitute/metajelo-ui)

Web tools to display
[metajelo](https://github.com/labordynamicsinstitute/metajelo) packages.

# Usage

# Building

If you have the relevant build tools intalled (npm, spago, pulp, etc.), you can
build using `npm run build && npm run prod`. For a more convient approach, see
the section on Docker below, and for complete build commands used in CI, see
`scripts/dist_build_commands.sh`.

## Docker

* Run `./psc.sh <command>`, e.g. `./psc.sh pulp --psc-package build`. This will run
the command in the container with the CWD mounted and then exit. Alternatively
if you want to issue multiple commands in the container quickly, you can
run `./psc.sh bash`.

## Debugging

For an unminified build that is easier to debug from the browser, use
`npm run debug` instead of `npm run prod`.

