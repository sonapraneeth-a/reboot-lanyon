"use strict";
const argv       = require("yargs").argv;
const gulp       = require("gulp");
const shell      = require("shelljs");
const log        = require("fancy-log");

// include paths file
const paths = require("../../paths");

// "gulp serve::jekyll-site --prod" -- Builds and serves the website live
gulp.task("serve::jekyll-site", (done) =>
{
    log("=== Serving public_html site for Jekyll ===");
    if(argv.prod)
    {
        log("=== Production Jekyll website ===");
        shell.exec("jekyll serve --config _config-prod.yml");
    }
    else
    {
        log("=== Development Jekyll website ===");
        shell.exec("jekyll serve --config _config-dev.yml --incremental --port 8000"); // --livereload
    }
    done();
});

// "gulp serve::local::jekyll-site --prod" -- Builds and serves the website live
gulp.task("serve::local::jekyll-site", (done) =>
{
    log("=== Serving public_html site for Jekyll ===");
    if(argv.prod)
    {
        log("=== Production Jekyll website ===");
        shell.exec("jekyll serve --config _config-prod.yml");
    }
    else
    {
        log("=== Development Jekyll website ===");
        shell.exec("jekyll serve --config _config-local-dev.yml --incremental --port 8000"); // --livereload
    }
    done();
});
