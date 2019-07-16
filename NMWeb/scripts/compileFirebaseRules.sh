#!/usr/bin/env bash

set -x

firebase-bolt < database.rules.bolt > database.rules.json
