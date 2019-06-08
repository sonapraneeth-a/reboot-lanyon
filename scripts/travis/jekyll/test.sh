#!/bin/bash
set -x

# bundle exec jekyll build --config _config.yml
# bundle exec htmlproofer ./public_html --disable-external
rm -rf ./public_html
jekyll build --config _dev-config-local.yml,url-test.yml
htmlproofer ./public_html --disable-external
