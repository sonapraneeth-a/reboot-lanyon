#!/bin/bash
set -x

# bundle exec jekyll build --config _config.yml
# bundle exec htmlproofer ./public_html --disable-external
bundle install
npm --version
npm install gulp
gulp --version
npm install
gulp --version
npm link gulp
gulp --version
gulp build::netlify::site --prod
bundle exec htmlproofer ./.tmp/public_html --disable-external
