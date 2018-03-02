"use strict";
const gulp   = require("gulp");
const argv   = require("yargs").argv;
const size   = require("gulp-size");
const log    = require("fancy-log");
const rename = require("gulp-rename");

// include paths file
const paths = require("../../paths");

// "gulp copy:source" --
gulp.task("copy::source", () =>
{
    /*log("=== Copying source files to tmp folder ===");*/
    return gulp.src([paths.source_dir + "**/*", "!" + paths.source_dir + "assets/**/*", "!" + paths.source_dir + "assets",
                    "!" + paths.source_dir + "_scss/**/*",  "!" + paths.source_dir + "_scss", "!" + paths.source_dir + "public/**/*.css", 
                    "!" + paths.source_dir + "public/css/main.scss", "!" + paths.source_dir + "public/css/main-gulp.scss", 
                    "!" + paths.source_dir + "public/**/*.js", "!" + paths.source_dir + "public/" + paths.image_pattern])
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
    return gulp.src(["./.tmp/public_html_temp/**/*", "!./.tmp/public_html_temp/**/*.js", "!./.tmp/public_html_temp/**/*.css"])
        .pipe(gulp.dest(paths.temp_site_dir))
    /*done();*/
})

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

gulp.task("gulp::copy-css", () =>
{
    /*log("=== Copying CSS files ===");*/
    return gulp.src([paths.source_dir + "public" + paths.css_pattern])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(gulp.dest(paths.temp_site_dir + "public"))
    /*done();*/
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

gulp.task("gulp::copy-js", () =>
{
    /*log("=== Copying JS files /*===");*/
    return gulp.src([paths.source_dir + "public" + paths.js_pattern])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(gulp.dest(paths.temp_site_dir + "public"))
    /*done();*/
});

gulp.task("gulp::copy-images", () =>
{
    /*log("=== Copying JS files /*===");*/
    return gulp.src([paths.source_dir + "public" + paths.image_pattern])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(gulp.dest(paths.temp_site_dir + "public"))
    /*done();*/
});