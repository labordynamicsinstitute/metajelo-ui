# metajelo-ui

[![Deploy](https://github.com/labordynamicsinstitute/metajelo-ui/workflows/Build%Status/badge.svg)](https://github.com/labordynamicsinstitute/metajelo-ui/actions)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.4484123.svg)](https://doi.org/10.5281/zenodo.4484123)


Web tools to edit and display
[metajelo](https://github.com/labordynamicsinstitute/metajelo) packages.


# Project dependencies

The following dependencies were created specifically for metajelo, though `purescript-datacite`
may have relevance beyond metajelo-related projects.

- [purescript-datacite](https://github.com/CornellCAC/purescript-datacite) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.4499120.svg)](https://doi.org/10.5281/zenodo.4499120) &mdash; Provides types and parsers for DataCite JSON; full types are not provided as yet, but types relevant to metajelo are generally supported.
- [metajelo](https://github.com/labordynamicsinstitute/metajelo) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.2577294.svg)](https://doi.org/10.5281/zenodo.2577294) &mdash; Schema definitions, presentations, and paper describing metajelo.
- [purescript-metajelo](https://github.com/labordynamicsinstitute/purescript-metajelo) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.4504661.svg)](https://doi.org/10.5281/zenodo.4504661) &mdash; This project contains type defintions, parsers, and XML generators for metajelo.
- [metajelo-ui-css-classes](https://github.com/labordynamicsinstitute/metajelo-ui-css-classes) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.4507962.svg)](https://doi.org/10.5281/zenodo.4507962)
 &mdash; CSS classnames and an example SASS/CSS style used for both `metajelo-web` and `metajelo-ui` (this project).
- [metajelo-web](https://github.com/labordynamicsinstitute/metajelo-web) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.4507861.svg)](https://doi.org/10.5281/zenodo.4507861) &mdash; A small application and
library for rendering a styled HTML preview of a metajelo XML document. Like this project, also includes
a live demo on GitHub pages.

The exact versions employed are sepcified in the `packages.dhall` of each project, or implicitly by
the package set (which is also specified in `packages.dhall`),
and in some cases may refer to a git commit rather than a sepecific version. However, we try to
maintain the use of versioned dependencies in releases where possible. All of this applies for
other library dependencies that aren't directly a part of this project, as well.

# Retrieving and Integrating metajelo-UI

## Get the latest build

Rather than [building](#Building) metajelo-ui to get the JavaScript code,
you can retrieve the latest build that is
[running on github-pages](https://labordynamicsinstitute.github.io/metajelo-ui):

```
wget -r -np -k https://labordynamicsinstitute.github.io/metajelo-ui/
```

## Get a versioned build

See the GitHub releases.

## CSS for metajelo UI

By default, CSS files are retrieved from a [separate repository](https://github.com/labordynamicsinstitute/metajelo-ui-css-classes) using `scripts/getcss`; the file `css/style.css` contains some default styles used in our examples.
Feel free to include it, or modify it (renaming the file is also possible):

```html
<link rel="stylesheet" href="css/style.css">
```

### Modifying existing CSS

**Note**, for rapidly testing CSS display changes without building or using
metajelo-ui, see [this note](https://github.com/labordynamicsinstitute/metajelo-ui-css-classes#testing-the-css)
in the CSS repository.

Once you've retrieved a build, as discussed above, or built metajelo-ui,
you may wish to modify the styles. You can modify the retrieved
`index.html` to use the custom CSS;
it will by default be using a minified CSS file which might have a name
like `prod.80f5279b.css`, which is auto-generated as part of the build. You
can change this to point to your css file. This is much faster than pulling
in CSS as part of the build of metajelo-ui.

See the [metajelo-ui-css-classes](https://github.com/labordynamicsinstitute/metajelo-ui-css-classes#building)
repository for information on how to modify and build the default CSS. Once
built and stored in a repository, you can modify
[scripts/getcss](https://github.com/labordynamicsinstitute/metajelo-ui/blob/master/scripts/getcss)
to point to the repository containing the modified CSS. Alternatively, one
could use use a more customized script to retrieve the CSS from
whatever location is desired.

For example, instead of using `getcss`, let's say we have a build of metajelo-ui
stored in `metajelo-ui-css-testing`. Then wee can do the following:

```
cd metajelo-ui-css-testing
mkdir css
ln -s /PATH/TO/metajelo-ui-css-classes/uicss css
```

On Windows, you will need to use `mklink /d css X:\PATH\TO\metajelo-ui-css-classes\uicss`
instead of the `ln -s` command.

Now edit `index.html` and replace `prod.XXXXX.css` with `css/style-dev.css`
so that you now have a line that looks like:

```html
<link rel="stylesheet" href="css/style-dev.css">
```

You should now be able to browse to `index.html` and test CSS changes immediately
after rebuilding the locally referenced clone of `metajelo-ui-css-classes`.

You may also find a CSS-reload addon helpful so that you can fill
in test data only once while rebuilding and reloading just the CSS.
An example is [CSS Reload](https://addons.mozilla.org/en-US/firefox/addon/css-reload-we/) for Firefox.

# Building

If you have the relevant build tools installed (`npm`, `spago`, `pulp`, etc.), you can
build using `npm run build && npm run prod`. For a more convenient approach, see
the section on Docker below, and for complete build commands used in CI, see
`scripts/dist_build_commands.sh`. `npm run debug` will also create an unminified
version that may be useful for debugging (additionally compilation errors may
be far more verbose).

Note that Continuous Integration (CI) is employed to build this package and deploy the
resulting application to GitHub pages, which will host whatever the most recent successful
build is from the `master` branch. Note that this may be an unversioned build.
Previously, we used Travis-CI+Docker to achieve this, and now we use GitHub actions
along with Nix packages to have pinned dependencies. The Travis Config
and Dockerfile are still available, and all approaches still utilize
`scripts/dist_build_commands.sh`.

## Docker

* Run `./psc.sh <command>`, e.g. `./psc.sh pulp --psc-package build`. This will run
the command in the container with the CWD mounted and then exit. Alternatively
if you want to issue multiple commands in the container quickly, you can
run `./psc.sh bash`.

## Updating Dependencies or the metajelo Schema

Dependencies for JavaScript are minimal and are controlled by [npm](https://docs.npmjs.com/)
and specified in `package.json`. PureScript dependencies are controlled by
[spago](https://github.com/purescript/spago) and specified
in `spago.dhall`, but in some cases, packages not included in the standard package
set must also be described in `packages.dhall`. In particular, when updating
the metajelo schema to be used in metajelo-ui, it will be necessary to specify
a new version of `purescript-metajelo` (with the `purescript-` prefix dropped
in `packages.dhall`). This can simply be done by specifying a git commit hash
or by specifying a version in the relevant section of `packages.dhall`.

See the [purescript-metajelo documentation](https://github.com/labordynamicsinstitute/purescript-metajelo#a-note-on-source-generation)
for details.

It may also be required from time to time to update other dependencies, especially
`metajelo-web`.

## Debugging

For an unminified build that is easier to debug from the browser, use
`npm run debug` instead of `npm run prod`.
