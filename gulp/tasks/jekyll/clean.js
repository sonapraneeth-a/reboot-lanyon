"use strict";
const del   = require("del");
const gulp  = require("gulp");
const log   = require("fancy-log");

// include paths file
const paths = require("../../paths");

// "gulp clean::site" -- Deleting public_html folder
gulp.task("clean::site", function(done)
{
    log("=== Deleting public_html ===");
    del.sync([paths.site_folder], {dryRun: false});
    done();
});

// "gulp clean::sass-cache" -- Deleting .sass-cache folder
gulp.task("clean::sass-cache", function(done)
{
    log("=== Deleting sass-cache ===");
    del.sync([paths.sass_cache_dir], {dryRun: false});
    done();
});

// "gulp clean::gemfile" -- Delete Gemfile.lock file
gulp.task("clean::gemfile", function(done)
{
    log("=== Deleting Gemfile.lock ===");
    del.sync([paths.current_dir + "Gemfile.lock"], {dryRun: false});
    done();
});

// "gulp clean::sass" -- Removing unnecessary sass files
gulp.task("clean::sass", function (done)
{
    log("=== Deleting unnecessary files from Jekyll output ===");
    del.sync([paths.site_dir + "public/css/main-gulp.scss"], {dryRun: false});
    done();
})
