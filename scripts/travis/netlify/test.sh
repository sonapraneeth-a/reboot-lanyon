#!/bin/bash
set -x

# bundle exec jekyll build --config _config.yml
# bundle exec htmlproofer ./public_html --disable-external
rm -rf ./public_html
gulp netlify::build --prod --test
htmlproofer ./public_html --disable-external
