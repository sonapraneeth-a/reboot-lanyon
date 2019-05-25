#!/bin/bash
set -x

bundle install
gem install html-proofer

npm --version
npm install
npm install gulp
npm link gulp@4.0.0
gulp --version
