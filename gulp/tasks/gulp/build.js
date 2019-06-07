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
        if (argv.netlify)
        {
            shell.exec("jekyll build --config  _dev-config-local.yml,_dev-config-gulp.yml,_prod-config-gulp.yml,url-netlify.yml");
        }
        else if (argv.netlify_gulp && argv.final)
        {
            shell.exec("jekyll build --config  _dev-config-local.yml,_dev-config-gulp.yml,_prod-config-gulp.yml,url-netlify-gulp.yml,url-netlify-final.yml");
        }
        else
        {
            shell.exec("jekyll build --config  _dev-config-local.yml,_dev-config-gulp.yml,_prod-config-gulp.yml,url-netlify-gulp.yml");
        }
    }
    else
    {
        log("=== Development website ===");
        shell.exec("jekyll build --config  _dev-config-local.yml,_dev-config-gulp.yml");
    }
    done();
});

// "gulp gulp::build-sass --prod" -- Compiles the sass code to css (main.css)
gulp.task("gulp::build-sass", () => {
    /*log("=== Compiling SASS ===");*/
    if(argv.prod)
    {
        return gulp.src(paths.temp_src_dir + "_sass/main.scss")
                .pipe(sass.sync({outputStyle: "compressed"})
                .on("error", sass.logError))
                .pipe(gulp.dest(paths.temp_site_dir + "public/css"));
    }
    else
    {
        return gulp.src(paths.temp_src_dir + "_sass/main.scss")
                .pipe(sourcemaps.init())
                .pipe(sass.sync({sourceComments: true, sourceMap: true}).on('error', sass.logError))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(paths.temp_site_dir + "public/css"));
    }
    /*done();*/
});

