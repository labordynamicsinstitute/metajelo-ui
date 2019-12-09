# metajelo-ui

[![Build Status](https://travis-ci.com/labordynamicsinstitute/metajelo-ui.svg?token=fzz41xcnJ15QPD7QhZkZ&branch=master)](https://travis-ci.com/labordynamicsinstitute/metajelo-ui)

Web tools to display
[metajelo](https://github.com/labordynamicsinstitute/metajelo) packages.

# Styling with CSS

By default, CSS files are retrieved from a [separate repository](https://github.com/labordynamicsinstitute/metajelo-ui-css-classes) using `scripts/getcss`; the file `css/style.css` contains some default styles used in our examples.
Feel free to include it, or modify it (renaming the file is also possible):

```html
<link rel="stylesheet" href="css/style.css">
```

Rather than [buidling](#Building) metajelo-ui to get the JavaScript code, you can retrieve the latest build that is
[running on github-pages](https://labordynamicsinstitute.github.io/metajelo-ui):

```
wget -r -np -k https://labordynamicsinstitute.github.io/metajelo-ui/
```

You can then modify the retrieved `index.html` to use the custom CSS;
it will by default be using a minified CSS file which might have a name
like `prod.80f5279b.css`.

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

