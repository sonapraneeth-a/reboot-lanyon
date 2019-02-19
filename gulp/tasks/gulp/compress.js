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
    return gulp.src([paths.temp_site_dir + "public" + paths.js_pattern, "!" + paths.temp_site_dir + "public/js/lunr/*.js"])
        /*.pipe(using({prefix:'Using file', path:'relative', color:'white', filesize:true}))*/
        .pipe(when(argv.prod, size({title: 'Original JS', pretty: true, showFiles: true, showTotal: true})))
        .pipe(when(argv.prod, strip()))
        .pipe(when(argv.prod, uglify()))
        .pipe(when(argv.prod, gulp.dest(paths.temp_site_dir + "public")))
        .pipe(when(argv.prod, size({title: 'Compressed JS', pretty: true, showFiles: true, showTotal: true})))
    /*done();*/
});