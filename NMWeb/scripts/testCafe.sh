#!/bin/bash

nRuns=20

cd e2e-testcafe && \
  for i in {1..20}; do echo "======================= RUN $i of $nRuns"; time npm run test ; done
