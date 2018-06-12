"use strict";
const argv       = require("yargs").argv;
const gulp       = require("gulp");
const size       = require("gulp-size");
const when       = require("gulp-if");
const log        = require("fancy-log");
const concatCss  = require('gulp-concat-css');
const concatJs   = require('gulp-concat');

// include paths file
const paths      = require("../../paths");

gulp.task("gulp::concat-blog", () =>
{
    /*log("=== Concatenate Javascript files ===");*/
    return gulp.src([paths.temp_site_dir + "public/plugins/lunr/posts.js", paths.temp_site_dir + "public/plugins/lunr/search-blog.js"])
                .pipe(concatJs("blog.js"))
                .pipe(gulp.dest(paths.temp_site_dir + "public/js/"))
    /*gulp.src([paths.temp_site_dir + "public/plugins/lunr/projects.js", paths.temp_site_dir + "public/plugins/lunr/search-project.js"])
                .pipe(concatJs("project.js"))
                .pipe(gulp.dest(paths.temp_site_dir + "public/js/"))
    done();*/
});

gulp.task("gulp::concat-project", () =>
{
    /*log("=== Concatenate Javascript files ===");*/
    return gulp.src([paths.temp_site_dir + "public/plugins/lunr/projects.js", paths.temp_site_dir + "public/plugins/lunr/search-project.js"])
                .pipe(concatJs("project.js"))
                .pipe(gulp.dest(paths.temp_site_dir + "public/js/"))
    /*gulp.src([paths.temp_site_dir + "public/plugins/lunr/projects.js", paths.temp_site_dir + "public/plugins/lunr/search-project.js"])
                .pipe(concatJs("project.js"))
                .pipe(gulp.dest(paths.temp_site_dir + "public/js/"))
    done();*/
});

gulp.task("gulp::concat-css", () =>
{
    /*log("=== Concatenating CSS files ===");*/
    /*return gulp.src([paths.temp_site_dir + "public/plugins/fontello/css/fontawesome.css", paths.temp_site_dir + "public/css/main.css"])
        .pipe(concatCss("all.css"))
        .pipe(gulp.dest(paths.temp_site_dir + "public/css/"));*/
    return gulp.src([paths.temp_site_dir + "public/css/main.css"])
        .pipe(concatCss("all.css"))
        .pipe(gulp.dest(paths.temp_site_dir + "public/css/"));
    /*done();*/
});