"use strict";
const del   = require("del");
const gulp  = require("gulp");
const log   = require("fancy-log");

// include paths file
const paths = require("../../paths");

// "gulp clean::tmp" -- Delete the temp (.tmp/) folder
gulp.task("clean::tmp", function(done)
{
    log("=== Deleting tmp folder ===");
    del.sync([paths.temp_folder], {dryRun: false});
    done();
});

// "gulp delete::sass" -- Delete the main-gulp.scss file present in public site folder
gulp.task("delete::sass", function()
{
    /*log("=== Deleting unnecessary sass file ===");*/
    return del.sync([paths.temp_site_dir + "public/css/main-gulp.scss"], {dryRun: false});
    /*done();*/
});

