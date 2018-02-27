"use strict";
const argv     = require("yargs").argv;
const gulp     = require("gulp");
const shell    = require("shelljs");
const log      = require("fancy-log");
const using    = require("gulp-using")
const when     = require("gulp-if");
const uglify   = require("gulp-uglifyes");
const size     = require("gulp-size");
const exec     = require("child_process").exec;
const strip    = require("gulp-strip-comments");
const cleanCSS = require("gulp-clean-css");

// include paths file
const paths = require("../../paths");

gulp.task("build::gulp-site", (done) =>
{
    log("=== Generating public_html site ===");
    if(argv.prod)
    {
        log("=== Production website ===");
        shell.exec("bundle exec jekyll build --config _config-gulp.yml --incremental");
    }
    else
    {
        log("=== Development website ===");
        shell.exec("bundle exec jekyll build --config _config-gulp-dev.yml --incremental");
    }
    done();
});
