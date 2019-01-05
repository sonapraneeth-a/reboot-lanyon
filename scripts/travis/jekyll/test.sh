#!/bin/bash
set -x

# bundle exec jekyll build --config _config.yml
# bundle exec htmlproofer ./public_html --disable-external
bundle install
npm --version
gem install html-proofer
jekyll build --config _config-dev.yml
htmlproofer ./public_html --disable-external
