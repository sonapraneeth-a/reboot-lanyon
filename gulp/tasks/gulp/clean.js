"use strict";
const argv  = require("yargs").argv;
const del   = require("del");
const gulp  = require("gulp");
const log   = require("fancy-log");

// include paths file
const paths = require("../../paths");

// "gulp clean::tmp" -- Delete the temp (.tmp/) folder as well as its contents
gulp.task("clean::tmp", async () =>
{
    log("=== Deleting .tmp folder ===");
    const deletedPaths = await del([paths.temp_dir], {dryRun: false});
    if (argv.verbose)
    {
        log(`Deleted files and directories:\n ${deletedPaths.join("\n")}`);
    }
    log("=== Deleted .tmp folder ===");
});
