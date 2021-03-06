#!/bin/bash

nRuns=20

runTest() {
  echo "======================= RUN $i of $nRuns - `date`"
  time npm run test
}

runAll() {
  cd e2e-testcafe && \
    for i in $(seq 1 ${nRuns}); do \
      runTest; \
    done
}

time  runAll

echo ===================== Tests Finished `date`
