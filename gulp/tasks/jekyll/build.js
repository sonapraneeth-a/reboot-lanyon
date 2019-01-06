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
    log("=== Generating public_html site for Jekyll ===");
    if(argv.prod)
    {
        log("=== Production Jekyll website ===");
        shell.exec("jekyll build --config _prod-config.yml");
    }
    else
    {
        log("=== Development Jekyll website ===");
        shell.exec("jekyll build --config _dev-config.yml"); // --livereload
    }
    done();
});
