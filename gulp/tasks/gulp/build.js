"use strict";
const argv       = require("yargs").argv;
const gulp       = require("gulp");
const shell      = require("shelljs");
const log        = require("fancy-log");
const sass       = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

// include paths file
const paths = require("../../paths");

sass.compiler = require("node-sass");

// "gulp build::gulp-site --prod" -- Compiles the source code to html files
gulp.task("build::gulp-site", (done) =>
{
    log("=== Generating public_html site ===");
    if(argv.prod)
    {
        log("=== Production website ===");
        shell.exec("bundle exec jekyll build --config _config-gulp.yml --incremental");
    }
    else
    {
        log("=== Development website ===");
        shell.exec("bundle exec jekyll build --config _config-gulp-dev.yml --incremental");
    }
    done();
});

gulp.task("build::netlify-site", (done) =>
{
    log("=== Generating public_html site ===");
    log("=== Development website -- Netlify ===");
    shell.exec("bundle exec jekyll build --config _config-netlify.yml --incremental");
    done();
});

// "gulp gulp::build-sass --prod" -- Compiles the sass code to css (main.css)
gulp.task("gulp::build-sass", () => {
    /*log("=== Compiling SASS ===");*/
    if(argv.prod)
    {
        return gulp.src(paths.temp_src_dir + "_scss/main.scss")
                .pipe(sass.sync({outputStyle: "compressed"})
                .on("error", sass.logError))
                .pipe(gulp.dest(paths.temp_site_dir + "public/css"));
    }
    else
    {
        return gulp.src(paths.temp_src_dir + "_scss/main.scss")
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(paths.temp_site_dir + "public/css"));
    }
    /*done();*/
});
