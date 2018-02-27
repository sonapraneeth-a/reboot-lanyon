"use strict";
var argv       = require("yargs").argv;
var gulp       = require("gulp");
var htmlmin    = require("gulp-htmlmin");
var size       = require("gulp-size");
var when       = require("gulp-if");
var log        = require("fancy-log");
var uglify= require("gulp-uglifyes");
var strip = require("gulp-strip-comments");
var cleanCSS = require("gulp-clean-css");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-ruby-sass");
var concatCss = require('gulp-concat-css');
var concatJs = require('gulp-concat');

// include paths file
var paths      = require("../../paths");

// "gulp html" -- does nothing
// "gulp html --prod" -- minifies and gzips HTML files for production
gulp.task("gulp::compress-html", (done) => 
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

gulp.task("gulp::compress-css", () =>
{
    /*log("=== Minifying CSS files ===");*/
    return gulp.src([paths.temp_site_dir + "public" + paths.css_pattern])
        .pipe(when(argv.prod, size({title: 'Original CSS', pretty: true, showFiles: true, showTotal: true})))
        .pipe(when(argv.prod, cleanCSS({debug: true, rebase: false}, (details) => {
            console.log(`  Original ${details.name}: ${details.stats.originalSize} B`);
            console.log(`Compressed ${details.name}: ${details.stats.minifiedSize} B`);
          })))
        .pipe(when(argv.prod, gulp.dest(paths.temp_site_dir + "public")))
        .pipe(when(argv.prod, size({title: 'Compressed CSS', pretty: true, showFiles: true, showTotal: true})))
    /*done();*/
});

gulp.task("gulp::compress-scripts", () =>
{
    /*log("=== Minifying Javascript files ===");*/
    return gulp.src([paths.temp_site_dir + "public" + paths.js_pattern])
        /*.pipe(using({prefix:'Using file', path:'relative', color:'white', filesize:true}))*/
        .pipe(when(argv.prod, size({title: 'Original JS', pretty: true, showFiles: true, showTotal: true})))
        .pipe(when(argv.prod, strip()))
        .pipe(when(argv.prod, uglify()))
        .pipe(when(argv.prod, gulp.dest(paths.temp_site_dir + "public")))
        .pipe(when(argv.prod, size({title: 'Compressed JS', pretty: true, showFiles: true, showTotal: true})))
    /*done();*/
});
