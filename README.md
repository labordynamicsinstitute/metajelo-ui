# metajelo-ui

[![Build Status](https://travis-ci.com/labordynamicsinstitute/metajelo-ui.svg?token=fzz41xcnJ15QPD7QhZkZ&branch=master)](https://travis-ci.com/labordynamicsinstitute/metajelo-ui)

Web tools to display
[metajelo](https://github.com/labordynamicsinstitute/metajelo) packages.

# Retrieving and Integrating Metajelo-UI

## Get the latest build

Rather than [building](#Building) metajelo-ui to get the JavaScript code,
you can retrieve the latest build that is
[running on github-pages](https://labordynamicsinstitute.github.io/metajelo-ui):

```
wget -r -np -k https://labordynamicsinstitute.github.io/metajelo-ui/
```

## Get a versioned build

(TODO)

## Modifying existing CSS

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
`scripts/dist_build_commands.sh`.

## Docker

* Run `./psc.sh <command>`, e.g. `./psc.sh pulp --psc-package build`. This will run
the command in the container with the CWD mounted and then exit. Alternatively
if you want to issue multiple commands in the container quickly, you can
run `./psc.sh bash`.

## Styling with CSS as part of a build

By default, CSS files are retrieved from a [separate repository](https://github.com/labordynamicsinstitute/metajelo-ui-css-classes) using `scripts/getcss`; the file `css/style.css` contains some default styles used in our examples.
Feel free to include it, or modify it (renaming the file is also possible):

```html
<link rel="stylesheet" href="css/style.css">
```

## Debugging

For an unminified build that is easier to debug from the browser, use
`npm run debug` instead of `npm run prod`.

