#!/bin/bash

jekyll build --config ../../_config.yml
htmlproofer ../../public_html
