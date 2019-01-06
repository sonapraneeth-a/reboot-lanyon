"use strict";
const argv         = require("yargs").argv;
const gulp         = require("gulp");
const inlineCss    = require("gulp-inline-css");
const inlineSource = require("gulp-inline-source");
const when         = require("gulp-if");

// include paths file
const paths      = require("../../paths");

gulp.task("gulp::inline-css", () =>
{
    /*log("=== Inlining css files into HTML files /*===");*/
    return gulp.src([paths.temp_site_dir + "**/*.html", 
                        "!"+paths.temp_site_dir+"public/plugins/fontello/demo.html"])
        .pipe(
            size
            ({
                title: "Copying:",
                showFiles: true,
                pretty: true
            })
        )
        .pipe(inlineCss({
                applyStyleTags: true,
                applyLinkTags: true,
                removeStyleTags: false,
                removeLinkTags: false,
                url: 'file://' + __dirname + '../../../../'+paths.temp_site_dir,
                removeHtmlSelectors: false,
                preserveMediaQueries: true,
                applyWidthAttributes: true,
                applyTableAttributes: true,
            })
        )
        .pipe(gulp.dest([paths.temp_site_dir]));
    /*done();*/
});

gulp.task("gulp::inline-source", function () {
    var options = {
        compress: true,
        rootpath: __dirname + "../../../../"+paths.temp_site_dir,
    };
    return gulp.src([paths.temp_site_dir + "**/*.html", 
                        "!"+paths.temp_site_dir+"public/plugins/fontello/demo.html"])
        .pipe(when(argv.prod, inlineSource(options)))
        .pipe(gulp.dest([paths.temp_site_dir]));
});