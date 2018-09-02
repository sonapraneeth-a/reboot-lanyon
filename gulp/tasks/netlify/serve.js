"use strict";
const argv       = require("yargs").argv;
const gulp       = require("gulp");
const shell      = require("shelljs");
const log        = require("fancy-log");

// include paths file
const paths = require("../../paths");

// "gulp serve::netlify-site --prod" -- Builds and serves the website live
gulp.task("serve::jekyll-site", (done) =>
{
    log("=== Serving public_html site for Netlify ===");
    if(argv.prod)
    {
        log("=== Production Netlify website ===");
        shell.exec("jekyll serve --config _config-netlify-prod.yml");
    }
    else
    {
        log("=== Development Netlify website ===");
        shell.exec("jekyll serve --config _config-netlify-dev.yml --incremental --port 8000"); // --livereload
    }
    done();
});
