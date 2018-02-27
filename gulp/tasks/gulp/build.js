"use strict";
const argv     = require("yargs").argv;
const gulp     = require("gulp");
const shell    = require("shelljs");
const log      = require("fancy-log");
const using    = require("gulp-using")
const when     = require("gulp-if");
const uglify   = require("gulp-uglifyes");
const size     = require("gulp-size");
const exec     = require("child_process").exec;
const strip    = require("gulp-strip-comments");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-ruby-sass");
var sourcemaps = require("gulp-sourcemaps");

// include paths file
const paths = require("../../paths");

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

gulp.task("gulp::build-sass", (done) => {
    /*log("=== Compiling SASS ===");*/
    if(argv.prod)
    {
        return sass
        (paths.temp_src_dir + "_scss/main.scss",
            {
                sourcemap: false,
                style: "compressed",
            }
        )
        .on("error", function (err)
        {
            console.error("Error!", err.message);
        })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.temp_site_dir + "public/css"));
    }
    else
    {
        return sass
        (paths.temp_src_dir + "_scss/main.scss",
            {
                sourcemap: true,
                style: "expanded",
                verbose: true,
                emitCompileError: true,
            }
        )
        .on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.temp_site_dir + "public/css"));
    }
    /*done();*/
});
