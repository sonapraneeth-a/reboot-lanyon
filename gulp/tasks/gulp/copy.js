"use strict";
const gulp      = require("gulp");
const argv      = require("yargs").argv;
const size      = require("gulp-size");
const log       = require("fancy-log");
const rename    = require("gulp-rename");
const when      = require("gulp-if");

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
gulp.task("copy::source", async () =>
{
    // Reference: https://stackoverflow.com/questions/34188287/how-to-use-async-await-with-gulp-4
    let source = [paths.source_dir + "**/*",
                    assets_contents, assets_folder,
                    sass_contents, sass_folder, main_gulp_sass_file, main_sass_file,
                    css_files, images];
    let dest = paths.temp_dir + paths.source_folder;
    await new Promise((resolve, reject) => {
        log(`=== Copying source files to ${dest} folder ===`);
        gulp.src(source)
            .pipe(
                when(argv.verbose,
                    size({
                        title: "Copying:",
                        showFiles: true,
                        pretty: true
                    })
                )
            )
            .pipe(gulp.dest(dest))
            .on("finish", function() {
                return resolve(log(`=== Copied source files to ${dest} folder ===`));
            });
    });
});

gulp.task("gulp::copy-sass", async () =>
{
    await new Promise((resolve, reject) => {
        log(`=== Copying SCSS files to ${paths.temp_src_dir + paths.sass_folder + "/"} ===`);
        gulp.src([paths.source_dir + paths.sass_folder + paths.scss_pattern])
        .pipe(
            when(argv.verbose,
                size({
                    title: "Copying:",
                    showFiles: true,
                    pretty: true
                })
            )
        )
        .pipe(gulp.dest(paths.temp_src_dir + paths.sass_folder + "/"))
        .on("finish", function() {
            return resolve(log(`=== Copied SCSS files to ${paths.temp_src_dir + paths.sass_folder + "/"} folder ===`));
        });
    });
});

gulp.task("gulp::copy-main-sass", async () =>
{
    await new Promise((resolve, reject) => {
        log("=== Moving Main SCSS file ===");
        gulp.src([paths.temp_site_dir + "public/css/main.scss.txt"])
        .pipe(rename("main.scss"))
        .pipe(gulp.dest(paths.temp_src_dir + "_sass/"))
        .on("finish", function() {
            return resolve(log("=== Copied Main SCSS file to .tmp folder ==="));
        });
    });
})

gulp.task("gulp::copy-css", async () =>
{
    await new Promise((resolve, reject) => {
        log("=== Copying CSS files ===");
        gulp.src([paths.source_dir + "public" + paths.css_pattern])
        .pipe(
            when(argv.verbose,
                size({
                    title: "Copying:",
                    showFiles: true,
                    pretty: true
                })
            )
        )
        .pipe(gulp.dest(paths.temp_site_dir + "public"))
        .on("finish", function() {
            return resolve(log("=== Copied CSS files to .tmp folder ==="));
        });
    });
});

gulp.task("gulp::copy-assets", async () =>
{
    await new Promise((resolve, reject) => {
        log("=== Copying assets files to tmp folder ===");
        gulp.src([paths.source_dir + "assets/**/*"])
        .pipe(
            when(argv.verbose,
                size({
                    title: "Copying:",
                    showFiles: true,
                    pretty: true
                })
            )
        )
        .pipe(gulp.dest(paths.temp_site_dir + "assets/"))
        .on("finish", function() {
            return resolve(log("=== Copied source files to .tmp folder ==="));
        });
    });
});

gulp.task("gulp::copy-images", async () =>
{
    await new Promise((resolve, reject) => {
        log("=== Copying image files ===");
        gulp.src([paths.source_dir + "public" + paths.image_pattern])
        .pipe(
            when(argv.verbose,
                size({
                    title: "Copying:",
                    showFiles: true,
                    pretty: true
                })
            )
        )
        .pipe(gulp.dest(paths.temp_site_dir + "public"))
        .on("finish", function() {
            return resolve(log("=== Copied source files to .tmp folder ==="));
        });
    });
});
