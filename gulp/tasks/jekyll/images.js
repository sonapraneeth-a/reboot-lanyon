"use strict";
const gulp     = require("gulp");
const imagemin = require("gulp-imagemin");
const size     = require("gulp-size");
const log      = require("fancy-log");
const when     = require("gulp-if");
const argv     = require("yargs").argv;

// include paths file
const paths    = require("../../paths");

// "gulp jekyll::compress-images" -- Optimize images for saving space
gulp.task("jekyll::compress-images", (done) => 
{
    log("=== Optimizing Images for Jekyll site ===");
    gulp.src([paths.site_folder + paths.image_pattern])
        .pipe(when(argv.prod, size({title: "Original images"})))
        .pipe(when(argv.prod, imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng(),
            imagemin.svgo({plugins: [{cleanupIDs: false}]})
        ], {verbose: true})))
        .pipe(when(argv.prod, gulp.dest(paths.site_folder)))
        .pipe(when(argv.prod, size({title: "Optimized images"})))
    /*gulp.src([paths.site_folder + paths.image_pattern])
    .pipe(size({title: "Original images"}))
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng(),
        imagemin.svgo({plugins: [{cleanupIDs: false}]})
      ], {verbose: true}))
      .pipe(gulp.dest(paths.site_folder))
      .pipe(size({title: "Optimized images"}))*/
    done();
});
