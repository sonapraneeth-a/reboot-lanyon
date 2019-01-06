"use strict";
const argv       = require("yargs").argv;
const gulp       = require("gulp");
const size       = require("gulp-size");
const when       = require("gulp-if");
const log        = require("fancy-log");
const concatCss  = require('gulp-concat-css');
const concatJs   = require('gulp-concat');

// include paths file
const paths      = require("../../paths");

gulp.task("gulp::concat-css", () =>
{
    /*log("=== Concatenating CSS files ===");*/
    return gulp.src([paths.temp_site_dir + "public/css/main.css", paths.temp_site_dir + "public/plugins/prism/prism.css"])
        .pipe(concatCss("all.css"))
        .pipe(gulp.dest(paths.temp_site_dir + "public/css/"));
    /*done();*/
});