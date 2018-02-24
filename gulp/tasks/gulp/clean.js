"use strict";
const del   = require("del");
const argv  = require("yargs").argv;
const gulp  = require("gulp");
const log   = require("fancy-log");

// include paths file
const paths = require("../../paths");

// "gulp clean::tmp" -- Delete the temp folder
gulp.task("clean::tmp", function(done)
{
    log("=== Deleting tmp folder ===");
    del.sync([paths.temp_folder], {dryRun: false});
    done();
});

gulp.task("delete::sass", function(done)
{
    log("=== Deleting unnecessary sass file ===");
    del.sync([paths.temp_site_dir + "public/css/main-gulp.scss"], {dryRun: false});
    done();
});

