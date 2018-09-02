"use strict";
const argv       = require("yargs").argv;
const gulp       = require("gulp");
const shell      = require("shelljs");
const log        = require("fancy-log");

// include paths file
const paths = require("../../paths");

// "gulp build::netlify-site --prod" -- Compiles the source code to html files for netlify site
gulp.task("build::netlify-site", (done) =>
{
    log("=== Generating public_html site for Netlify ===");
    if(argv.prod)
    {
        log("=== Production Netlify website ===");
        shell.exec("jekyll build --config _config-netlify-prod.yml");
    }
    else
    {
        log("=== Development Netlify website ===");
        shell.exec("jekyll build --config _config-netlify-dev.yml"); // --livereload
    }
    done();
});
