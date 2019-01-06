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
gulp.task("serve::jekyll", gulp.series("clean::public_html", "serve::jekyll-site"));
gulp.task("serve::local::jekyll", gulp.series("clean::public_html", "serve::local::jekyll-site"));
gulp.task("build::jekyll", gulp.series("clean::public_html", "build::jekyll-site"));
gulp.task("jekyll", gulp.series("serve::jekyll"));
gulp.task("local::jekyll", gulp.series("serve::local::jekyll"));

// Netlify tasks
gulp.task("build::netlify", gulp.series("clean::public_html", "build::netlify-site"));
gulp.task("serve::netlify", gulp.series("clean::public_html", "serve::netlify-site"));

// Gulp tasks for better output increasing page speed
gulp.task("build::gulp", gulp.series("clean::tmp", "build::netlify-site"));
gulp.task("serve::gulp", gulp.series("clean::tmp", "build::netlify-site"));
gulp.task("gulp", gulp.series("build::gulp", "serve::gulp"));

// Default task (Either jekyll or netlify)
/* gulp default : No compression/minification */
/* gulp default --prod : Compression enabled */
gulp.task("default", gulp.series("local::jekyll"));
