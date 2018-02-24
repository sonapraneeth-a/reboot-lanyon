"use strict";
const argv       = require("yargs").argv;
const gulp       = require("gulp");
const htmlmin    = require("gulp-htmlmin");
const size       = require("gulp-size");
const when       = require("gulp-if");
const log        = require("fancy-log");
const uglify     = require("gulp-uglifyes");
const strip      = require("gulp-strip-comments");
const cleancss   = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

// include paths file
const paths      = require("../../paths");

/* "gulp jekyll::compress-html --prod" -- Compress HTML files generated */
gulp.task("jekyll::compress-html", (done) => 
{
    log("=== Compressing HTML ===");
    log(argv.prod);
    gulp.src(paths.site_folder + paths.html_pattern)
        .pipe(when(argv.prod, size({title: "Original HTML", showFiles: true, pretty: true})))
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
        .pipe(when(argv.prod, size({title: "Optimized HTML", showFiles: true, showTotal: true, pretty: true})))
        .pipe(when(argv.prod, gulp.dest(paths.site_dir)))
    /*gulp.src(paths.site_folder + paths.html_pattern)
        .pipe(size({title: "Original HTML", showFiles: true, pretty: true}))
        .pipe(htmlmin
        ({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: false,
            removeAttributeQuotes: false,
            removeRedundantAttributes: false,
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(size({title: "Optimized HTML", showFiles: true, showTotal: true, pretty: true}))
        .pipe(gulp.dest(paths.site_dir))*/
    done();
});

/* "gulp jekyll::compress-css" -- Compress CSS files in public/ folder */
gulp.task("jekyll::compress-css", (done) =>
{
    log("=== Minifying CSS files ===");
    gulp.src([paths.site_dir + "public" + paths.css_pattern, "!" + paths.site_dir + "public/plugins/fontello/css/*.css"])
        .pipe(when(argv.prod, size({title: "Original CSS", pretty: true, showFiles: true, showTotal: true})))
        .pipe(when(argv.prod, cleancss({debug: true}, (details) => {
            console.log(`  Original ${details.name}: ${details.stats.originalSize} B`);
            console.log(`Compressed ${details.name}: ${details.stats.minifiedSize} B`);
          })))
        .pipe(when(argv.prod, gulp.dest(paths.site_dir + "public")))
        .pipe(when(argv.prod, size({title: "Compressed CSS", pretty: true, showFiles: true, showTotal: true})))
    /*gulp.src([paths.site_dir + "public" + paths.css_pattern, "!" + paths.site_dir + "public/plugins/fontello/css/*.css"])
        .pipe(size({title: "Original CSS", pretty: true, showFiles: true, showTotal: true}))
        .pipe(cleancss({debug: true}, (details) => {
            console.log(`  Original ${details.name}: ${details.stats.originalSize} B`);
            console.log(`Compressed ${details.name}: ${details.stats.minifiedSize} B`);
          }))
        .pipe(gulp.dest(paths.site_dir + "public"))
        .pipe(size({title: "Compressed CSS", pretty: true, showFiles: true, showTotal: true}))*/
    done();
});

/* "gulp jekyll::compress-scripts" -- Compress Javascript files in public/ folder*/
gulp.task("jekyll::compress-scripts", (done) =>
{
    log("=== Minifying Javascript files ===");
    gulp.src([paths.site_dir + "public" + paths.js_pattern])
        /*.pipe(using({prefix:"Using file", path:"relative", color:"white", filesize:true}))*/
        .pipe(when(argv.prod, size({title: "Original JS", pretty: true, showFiles: true, showTotal: true})))
        .pipe(when(argv.prod, strip()))
        .pipe(when(argv.prod, uglify()))
        .pipe(when(argv.prod, gulp.dest(paths.site_dir + "public")))
        .pipe(when(argv.prod, size({title: "Compressed JS", pretty: true, showFiles: true, showTotal: true})))
    /*gulp.src([paths.site_dir + "public" + paths.js_pattern])
        .pipe(size({title: "Original JS", pretty: true, showFiles: true, showTotal: true}))
        .pipe(strip())
        .pipe(uglify())
        .pipe(gulp.dest(paths.site_dir + "public"))
        .pipe(size({title: "Compressed JS", pretty: true, showFiles: true, showTotal: true}))*/
    done();
});
