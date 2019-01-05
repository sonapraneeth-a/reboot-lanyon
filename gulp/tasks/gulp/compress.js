"use strict";
const argv       = require("yargs").argv;
const gulp       = require("gulp");
const htmlmin    = require("gulp-htmlmin");
const size       = require("gulp-size");
const when       = require("gulp-if");
const log        = require("fancy-log");
const uglify     = require("gulp-uglifyes");
const strip      = require("gulp-strip-comments");
const cleanCSS   = require("gulp-clean-css");

// include paths file
const paths      = require("../../paths");

// "gulp html" -- does nothing
// "gulp html --prod" -- minifies and gzips HTML files for production
gulp.task("gulp::compress-html", () =>
{
    /*log("=== Compressing HTML ===");*/
    return gulp.src(paths.temp_site_dir + paths.html_pattern)
        .pipe(when(argv.prod, size({title: "Original HTML"})))
        .pipe(when(argv.prod, htmlmin
        ({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: false,
            removeAttributeQuotes: false,
            removeRedundantAttributes: false,
            minifyJS: true,
            minifyCSS: true
        })))
        .pipe(when(argv.prod, size({title: "Optimized HTML"})))
        .pipe(when(argv.prod, gulp.dest(paths.temp_site_dir)))
    /*done();*/
});
