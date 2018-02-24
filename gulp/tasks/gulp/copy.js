"use strict";
var gulp  = require("gulp");
var argv = require("yargs").argv;
var size = require("gulp-size");
var notify = require("gulp-notify");
// var newer = require("gulp-newer");
var log   = require("fancy-log");
var rename = require("gulp-rename");

// include paths file
var paths = require("../../paths");

// "gulp copy:source" --
gulp.task("copy::source", () =>
{
    /*log("=== Copying source files to tmp folder ===");*/
    return gulp.src([paths.source_dir + "**/*", "!" + paths.source_dir + "assets/**/*", "!" + paths.source_dir + "_scss/**/*", 
                "!" + paths.source_dir + "public/css/main.scss", "!" + paths.source_dir + "public/css/main-gulp.scss"])
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

gulp.task("gulp::move-sass", () => 
{
    /*log("=== Moving Main CSS file ===");*/
    return gulp.src([paths.source_folder + "/public/css/main-gulp.scss"])
        .pipe(rename("main.scss"))
        .pipe(gulp.dest(paths.temp_dir + paths.sass_dir))
    /*done();*/
})

gulp.task("gulp::copy-assets", () =>
{
    /*log("=== Copying assets files to tmp folder ===");*/
    return gulp.src([paths.source_dir + "assets/**/*"])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(gulp.dest(paths.temp_site_dir + "assets/"))
    /*done();*/
});

gulp.task("gulp::copy-css", (done) =>
{
    log("=== Copying CSS files ===");
    gulp.src([paths.source_dir + "public" + paths.css_pattern])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(gulp.dest(paths.temp_site_dir + "public"))
    done();
});

gulp.task("gulp::copy-sass", () =>
{
    /*log("=== Copying SCSS files ===");*/
    return gulp.src([paths.source_dir + "_scss" + paths.scss_pattern])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(gulp.dest(paths.temp_src_dir + "_scss/"))
    /*done();*/
});

gulp.task("gulp::copy-js", (done) =>
{
    log("=== Copying JS files ===");
    gulp.src([paths.source_dir + "public" + paths.js_pattern])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(gulp.dest(paths.temp_src_dir + "public"))
    done();
});