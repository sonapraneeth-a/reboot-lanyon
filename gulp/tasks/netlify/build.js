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
        if (argv.test)
        {
            log("=== Production Test Netlify website ===");
            shell.exec("jekyll build --config _dev-config-local.yml,_prod-config-netlify.yml,url-test.yml");
        }
        else
        {
            log("=== Production Netlify website ===");
            shell.exec("jekyll build --config _dev-config-local.yml,_prod-config-netlify.yml,url-netlify.yml");
        }
    }
    else
    {
        log("=== Development Netlify website ===");
        shell.exec("bundle exec jekyll build --config _dev-config-local.yml,_dev-config-netlify.yml --incremental"); // --livereload
    }
    done();
});
