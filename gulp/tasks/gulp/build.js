"use strict";
const argv       = require("yargs").argv;
const gulp       = require("gulp");
const shell      = require("shelljs");
const log        = require("fancy-log");
const sass       = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

// include paths file
const paths = require("../../paths");

// "gulp build::gulp-site --prod" -- Compiles the source code to html files
gulp.task("build::gulp-site", (done) =>
{
    log("=== Generating public_html site ===");
    if(argv.prod)
    {
        log("=== Production website ===");
        shell.exec("bundle exec jekyll build --config _prod-config-gulp.yml --incremental");
    }
    else
    {
        log("=== Development website ===");
        shell.exec("bundle exec jekyll build --config _dev-config-gulp.yml --incremental");
    }
    done();
});

// "gulp gulp::build-sass --prod" -- Compiles the sass code to css (main.css)
gulp.task("gulp::build-sass", () => {
    /*log("=== Compiling SASS ===");*/
    if(argv.prod)
    {
        return sass
        (paths.temp_src_dir + "_sass/main.scss",
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

