#!/bin/bash
set -x

# bundle exec jekyll build --config _config.yml
# bundle exec htmlproofer ./public_html --disable-external
rm -rf ./.tmp/public_html
gulp netlify::build --prod
bundle exec htmlproofer ./.tmp/public_html --disable-external
