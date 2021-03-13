#!/usr/bin/env bash

echo Starting build and deploy `date`


doAll () {
  set -x

  scriptDir="`dirname $0`"

  # TODO: add protractor.sh &&, once tests are reliable

  # To initialize, run: firebase use --add

  #   && cp -r assets dist \

  #git tag test_`date --utc +%Y-%m-%d_%H.%M.%SZ`
  #ng build \
  ${scriptDir}/compileFirebaseRules.sh \
    && ng build --prod --aot \
    && firebase deploy --only hosting \
    && git tag deploy_`date -u +%Y-%m-%d__%H.%M.%SZ` \
    && git push --tags

  Echo Finished build and deploy `date`
}

time doAll
