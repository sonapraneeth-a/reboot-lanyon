"use strict";
const gulp      = require("gulp");
const argv      = require("yargs").argv;
const size      = require("gulp-size");
const log       = require("fancy-log");
const rename    = require("gulp-rename");

// include paths file
const paths = require("../../paths");

// "gulp copy:source" --
gulp.task("copy::source", () =>
{
    /*log("=== Copying source files to tmp folder ===");*/
    return gulp.src([paths.source_dir + "**/*", "!" + paths.source_dir + "assets/**/*",
        "!" + paths.source_dir + "assets", "!" + paths.source_dir + "public/" + paths.image_pattern])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(gulp.dest(paths.temp_dir + paths.source_folder))
    /*done();*/
});

gulp.task("gulp::move-html", () =>
{
    /*log("=== Moving Main Website files ===");*/
    return gulp.src(["./.tmp/public_html_temp/**/*"])
        .pipe(gulp.dest(paths.temp_site_dir))
    /*done();*/
})

