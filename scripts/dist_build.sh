#!/usr/bin/env bash

#
# This is modified copy of psc.sh with the following considerations:
#
# 1. fewer volume mounts (only run dir) - for less persistent caches but
#    better isolation.
# 2. Container is named.
# 3. User 'node' is employed within the container.


: "${CONT_NAME:=metajelo_web_builder}"
echo "container name is ${CONT_NAME}"

CONT_RUN_TIME=3000 # seconds

: "${IMG_NAME:=purescript-hodgepodge}"
: "${IMG_VER:=latest}"
# Set this to the empty string to use locally built image:
if ! [[ -v "DHUB_PREFIX" ]]; then
  : "${DHUB_PREFIX:=bbarker/}"
fi

# If really an empty string, then we interpret as using a local image
# and do not pull:
if ! [ -z "$DHUB_PREFIX" ]; then
  docker pull "${DHUB_PREFIX}${IMG_NAME}:${IMG_VER}"
fi

docker run --rm -ti \
       --user "node" \
       --volume "$PWD":/wd \
       --workdir /wd \
       --name "${CONT_NAME}" \
       "${DHUB_PREFIX}${IMG_NAME}:${IMG_VER}" /wd/scripts/dist_build_commands.sh


