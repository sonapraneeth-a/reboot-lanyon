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
gulp.task("build::netlify", gulp.series("clean::public_html", "build::netlify-site"));
gulp.task("serve::netlify", gulp.series("clean::public_html", "serve::netlify-site"));

// Gulp tasks for better output increasing page speed
gulp.task("build::gulp", gulp.series("clean::tmp", "build::netlify-site"));
gulp.task("serve::gulp", gulp.series("clean::tmp", "build::netlify-site"));
gulp.task("gulp", gulp.series("build::gulp", "serve::gulp"));

// Default task (Either jekyll or netlify)
/* gulp default : No compression/minification */
/* gulp default --prod : Compression enabled */
/* gulp default --local : using local config (_dev-config-local.yml) yml */
gulp.task("default", gulp.series("jekyll"));
