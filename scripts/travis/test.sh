#!/bin/bash
set -x

./jekyll/test.sh

./netlify/test.sh
