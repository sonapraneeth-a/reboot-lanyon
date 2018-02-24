'use strict';
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var size     = require('gulp-size');
var log      = require('fancy-log');
var when     = require('gulp-if');
var argv     = require('yargs').argv;

// include paths file
var paths      = require('../../paths');

/* 'gulp gulp::compress-images' -- optimize images */
gulp.task('gulp::compress-images', (done) => 
{
    log("=== Optimizing Images ===");
    /*log(paths.temp_dir + paths.site_folder + paths.image_pattern);*/
    gulp.src([paths.temp_dir + paths.site_folder + paths.image_pattern])
        .pipe(when(argv.prod, size({title: 'Original images'})))
        .pipe(when(argv.prod, imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng(),
            imagemin.svgo({plugins: [{cleanupIDs: false}]})
        ], {verbose: true})))
        .pipe(when(argv.prod, gulp.dest(paths.temp_dir + paths.site_folder)))
        .pipe(when(argv.prod, size({title: 'Optimized images'})))
    done();
});
