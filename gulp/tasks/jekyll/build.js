"use strict";
const gulp      = require("gulp");
const shell     = require("shelljs");
const log       = require('fancy-log');

// include paths file
const paths = require('../../paths');

/* "gulp build::jekyll-site" -- Build the Jekyll site with jekyll config file */
gulp.task("build::jekyll-site", (done) =>
{
    log("=== Generating public_html site ===");
    /*shell.exec('JEKYLL_ENV=production jekyll build');*/
    shell.exec('jekyll build --config _config.yml');
    done();
});
