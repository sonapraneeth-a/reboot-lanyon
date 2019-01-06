"use strict";
const gulp      = require("gulp");
const argv      = require("yargs").argv;
const size      = require("gulp-size");
const log       = require("fancy-log");
const rename    = require("gulp-rename");

// include paths file
const paths = require("../../paths");

gulp.task("gulp::move-html", () =>
{
    /*log("=== Moving Main Website files ===");*/
    return gulp.src(["./.tmp/public_html_temp/**/*"])
        .pipe(gulp.dest(paths.temp_site_dir))
    /*done();*/
})

