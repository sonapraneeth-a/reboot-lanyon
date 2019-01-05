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
