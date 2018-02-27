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
    return gulp.src([paths.temp_site_dir + "public/plugins/fontello/css/fontawesome.css", paths.temp_site_dir + "public/css/main.css"])
        .pipe(concatCss("all.css"))
        .pipe(gulp.dest(paths.temp_site_dir + "public/css/"));
    /*done();*/
});