"use strict";
const del   = require("del");
const gulp  = require("gulp");
const log   = require("fancy-log");

// include paths file
const paths = require("../../paths");

// "gulp clean::public_html" -- Delete the public_html folder containing built files
gulp.task("clean::public_html", function(done)
{
    log("=== Deleting public_html folder ===");
    del.sync([paths.site_folder], {dryRun: false});
    done();
});

// "gulp clean::sass-cache" -- Delete the sass-cache folder containing sass cache files
gulp.task("clean::sass-cache", function(done)
{
    log("=== Deleting sass-cache folder ===");
    del.sync([paths.sass_cache_folder], {dryRun: false});
    done();
});