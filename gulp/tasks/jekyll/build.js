"use strict";
const argv       = require("yargs").argv;
const gulp       = require("gulp");
const shell      = require("shelljs");
const log        = require("fancy-log");

// include paths file
const paths = require("../../paths");

// "gulp build::jekyll-site --prod" -- Compiles the source code to html files
gulp.task("build::jekyll-site", (done) =>
{
    log("=== Generating public_html site ===");
    if(argv.prod)
    {
        log("=== Production website ===");
        shell.exec("jekyll build --config _config-prod.yml");
    }
    else
    {
        log("=== Development website ===");
        shell.exec("jekyll serve --config _config-dev.yml --incremental --port 8000"); // --livereload
    }
    done();
});
