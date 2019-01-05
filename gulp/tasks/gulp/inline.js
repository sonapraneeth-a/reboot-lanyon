"use strict";
const gulp      = require("gulp");
const inlineSource = require('gulp-inline-source');

// include paths file
const paths      = require("../../paths");

gulp.task("gulp::inline-source", function () {
    if(argv.prod)
    {
        var options = {
            compress: true,
            rootpath: __dirname + '../../../../'+paths.temp_site_dir,
        };
        return gulp.src([paths.temp_site_dir + "**/*.html"])
            .pipe(inlineSource(options))
            .pipe(gulp.dest([paths.temp_site_dir]));
    }
});
