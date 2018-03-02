// https://robwise.github.io/blog/jekyll-and-gulp
// https://savaslabs.com/2016/10/19/optimizing-jekyll-with-gulp.html
// https://mademistakes.com/articles/using-jekyll-2017/
"use strict";
const gulp        = require("gulp");
const argv        = require("yargs").argv;
const exec        = require("child_process").exec;
const log         = require("fancy-log");
const require_dir = require("require-dir");
const tasks       = require_dir("./gulp/tasks", {recurse: true});

// include paths file
const paths = require("./gulp/paths");

// Jekyll tasks
gulp.task("jekyll::clean", gulp.parallel("clean::site", "clean::sass-cache", "clean::gemfile"));
gulp.task("jekyll::build", gulp.series("build::jekyll-site", "clean::sass"));
gulp.task("jekyll::copy", gulp.series("copy::assets"));
gulp.task("jekyll::compress", gulp.series("jekyll::compress-html", "jekyll::compress-css", "jekyll::compress-scripts", "jekyll::compress-images"));
gulp.task("build::jekyll-site", gulp.series("jekyll::clean", "jekyll::build", "jekyll::copy", "jekyll::compress"));
gulp.task("serve::jekyll-site", gulp.series("jekyll::serve", "jekyll::watch"));
gulp.task("default::jekyll", gulp.series("build::jekyll-site", "serve::jekyll-site"));

// Gulp tasks
gulp.task("gulp::clean", gulp.series("clean::tmp"));
gulp.task("gulp::build", gulp.series("copy::source", "build::gulp-site", "gulp::move-html", "gulp::compress-html"));
gulp.task("gulp::sass", gulp.series("gulp::copy-sass", "gulp::move-sass", "gulp::build-sass"));
gulp.task("gulp::css", gulp.series("gulp::copy-css", "gulp::compress-css", "gulp::concat-css"));
gulp.task("gulp::assets", gulp.series("gulp::copy-assets", "gulp::copy-images", "gulp::compress-images"));
gulp.task("gulp::js", gulp.series("gulp::compress-scripts", "gulp::concat-blog", "gulp::concat-project"));
gulp.task("build::gulp::site", gulp.series("gulp::clean", "gulp::build", "gulp::sass", "gulp::css", "gulp::js", "gulp::assets"));
gulp.task("serve::gulp-site", gulp.series("gulp::serve", "gulp::watch"));
gulp.task("default::gulp", gulp.series("build::gulp::site", "serve::gulp-site"));

// Default task (Either default::gulp or default::jekyll)
/* gulp default : No compression/minification */
/* gulp default --prod : Compression enabled */
gulp.task("default", gulp.series("default::jekyll"));