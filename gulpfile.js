// References:
// - https://robwise.github.io/blog/jekyll-and-gulp
// - https://savaslabs.com/2016/10/19/optimizing-jekyll-with-gulp.html
// - https://mademistakes.com/articles/using-jekyll-2017/

"use strict";
const gulp        = require("gulp");
const require_dir = require("require-dir");
const tasks       = require_dir("./gulp/tasks", {recurse: true});

// Include paths file
const paths = require("./gulp/paths");

// Jekyll tasks
gulp.task("jekyll::clean", gulp.series("clean::sass-cache", "clean::public_html"));
gulp.task("jekyll::build", gulp.series("jekyll::clean", "build::jekyll-site"));
gulp.task("jekyll::serve", gulp.series("jekyll::clean", "serve::jekyll-site"));
gulp.task("jekyll", gulp.series("jekyll::serve"));

// Netlify tasks
gulp.task("netlify::build", gulp.series("jekyll::clean", "build::netlify-site"));
gulp.task("netlify::serve", gulp.series("jekyll::clean", "serve::netlify-site"));
gulp.task("netlify", gulp.series("netlify::serve"));

// Gulp tasks for better output increasing page speed
gulp.task("gulp::clean", gulp.series("clean::tmp"));
gulp.task("gulp::sass", gulp.series("gulp::copy-sass", "gulp::copy-main-sass", "gulp::build-sass"));
gulp.task("gulp::css", gulp.series("gulp::copy-css", "gulp::concat-css", "gulp::compress-css"));
gulp.task("gulp::js", gulp.series("gulp::compress-scripts"));
gulp.task("gulp::assets", gulp.series("gulp::copy-assets", "gulp::copy-images", "gulp::compress-images"));
gulp.task("gulp::build-gulp-config", gulp.series("copy::source", "build::gulp-site", "gulp::move-html", "gulp::compress-html"));
gulp.task("gulp::build-gulp-optimized-site", gulp.series("gulp::clean", "gulp::build-gulp-config", "gulp::sass", "gulp::css", 
        "gulp::js", "gulp::assets", "gulp::inline-source"));
//gulp.task("gulp::serve", gulp.series("build::netlify-site"));
gulp.task("gulp", gulp.series("gulp::build-gulp-optimized-site", "gulp::serve"));

// Default task (Either jekyll or netlify)
/* gulp default : No compression/minification */
/* gulp default --prod : Compression enabled */
/* gulp default --local : using local config (_dev-config-local.yml) yml */
gulp.task("default", gulp.series("jekyll"));
