#!/bin/bash
set -x

# bundle exec jekyll build --config _config.yml
# bundle exec htmlproofer ./public_html --disable-external
rm -rf ./.tmp/public_html
gulp gulp::build-gh-pages-optimized-site --prod --netlify_gulp
htmlproofer ./.tmp/public_html --disable-external
