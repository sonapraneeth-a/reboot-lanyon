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
gulp.task("default::jekyll", gulp.series("clean::public_html", "serve::jekyll-site"));

// Netlify tasks
gulp.task("default::netlify", gulp.series("clean::public_html", "build::netlify-site"));

// Default task (Either default::jekyll or default::netlify)
/* gulp default : No compression/minification */
/* gulp default --prod : Compression enabled */
gulp.task("default", gulp.series("default::jekyll"));
