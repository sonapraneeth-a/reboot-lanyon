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
    log("=== Building and Serving public_html site for Jekyll ===");
    if(argv.prod)
    {
        log("=== Production Jekyll website ===");
        shell.exec("jekyll serve --config _prod-config.yml");
    }
    else
    {
        if(argv.local)
        {
            log("=== Development Jekyll website ===");
            shell.exec("jekyll serve --config _dev-config-local.yml --incremental --port 8000"); // --livereload
        }
        else 
        {
            log("=== Development Jekyll website ===");
            shell.exec("jekyll serve --config _dev-config.yml --incremental --port 8000"); // --livereload
        }
    }
    done();
});
