'use strict';
const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const size     = require('gulp-size');
const log      = require('fancy-log');
const when     = require('gulp-if');
const argv     = require('yargs').argv;

// include paths file
const paths    = require('../../paths');

/* 'gulp gulp::compress-images' -- optimize images */
gulp.task('gulp::compress-images', () => 
{
    /*log("=== Optimizing Images ===");*/
    /*log(paths.temp_dir + paths.site_folder + paths.image_pattern);*/
    return gulp.src([paths.temp_dir + paths.site_folder + paths.image_pattern])
        .pipe(when(argv.prod, size({title: 'Original images'})))
        .pipe(when(argv.prod, imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng(),
            imagemin.svgo({plugins: [{cleanupIDs: false}]})
        ], {verbose: true})))
        .pipe(when(argv.prod, gulp.dest(paths.temp_dir + paths.site_folder)))
        .pipe(when(argv.prod, size({title: 'Optimized images'})))
    /*done();*/
});
