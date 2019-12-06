#!/usr/bin/env bash

npm install && npm run getcss && \
(npm run build && npm run prod) && \
(cd tests && npm run testbrowser)

