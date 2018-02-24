"use strict";
var gulp  = require("gulp");
var argv = require("yargs").argv;
var size = require("gulp-size");
var notify = require("gulp-notify");
var log   = require("fancy-log");
var rename = require("gulp-rename");

// include paths file
var paths = require("../../paths");

gulp.task("copy::assets", (done) =>
{
    log("=== Copying assets files to site folder ===");
    gulp.src([paths.source_dir + "assets/**/*"])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(gulp.dest(paths.site_dir + "assets/"))
    done();
});