#!/usr/bin/env bash

npm install && \
(cd app && npm run build && npm run prod) && \
(cd test && npm run testbrowser)

