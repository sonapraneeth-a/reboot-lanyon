#!/bin/bash
set -x

./scripts/travis/jekyll/test.sh

./scripts/travis/netlify/test.sh
