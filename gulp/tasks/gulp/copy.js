"use strict";
const gulp      = require("gulp");
const argv      = require("yargs").argv;
const size      = require("gulp-size");
const log       = require("fancy-log");
const rename    = require("gulp-rename");

// include paths file
const paths = require("../../paths");

let exclude_source_dir = "!" + paths.source_dir;
let assets_folder = exclude_source_dir + "assets";
let assets_contents = exclude_source_dir + "assets/**/*";
let images = exclude_source_dir + "public/" + paths.image_pattern;
let sass_contents = exclude_source_dir + "_sass/**/*";
let sass_folder = exclude_source_dir + "_sass";
let css_files = exclude_source_dir + "public/**/*.css";
let main_sass_file = exclude_source_dir + "public/css/main.scss";
let main_gulp_sass_file = exclude_source_dir + "public/css/main-gulp.scss";

// "gulp copy:source" --
gulp.task("copy::source", () =>
{
    /*log("=== Copying source files to tmp folder ===");*/
    return gulp.src([paths.source_dir + "**/*", 
                    assets_contents, assets_folder,
                    sass_contents, sass_folder, main_gulp_sass_file, main_sass_file,
                    css_files, images])
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

gulp.task("gulp::copy-sass", () =>
{
    /*log("=== Copying SCSS files ===");*/
    return gulp.src([paths.source_dir + "_sass" + paths.scss_pattern])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(gulp.dest(paths.temp_src_dir + "_sass/"))
    /*done();*/
});

gulp.task("gulp::copy-main-sass", () => 
{
    /*log("=== Moving Main CSS file ===");*/
    return gulp.src([paths.temp_site_dir + "public/css/main.scss.txt"])
        .pipe(rename("main.scss"))
        .pipe(gulp.dest(paths.temp_src_dir + "_sass/"))
    /*done();*/
})

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