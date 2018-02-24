#!/bin/bash

echo "Pushing the html output code from code branch to master branch"
git push origin `git subtree split --prefix public_html master`:gh-pages --force
echo "Push successful"
