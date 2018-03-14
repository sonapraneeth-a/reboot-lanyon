#!/bin/bash

# bundle exec jekyll build --config _config.yml
# bundle exec htmlproofer ./public_html --disable-external
bundle install
npm install 
gulp build::netlify::site --prod
bundle exec htmlproofer ./.tmp/public_html --disable-external
