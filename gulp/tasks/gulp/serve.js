// Static Server + watching files
// WARNING: passing anything besides hard-coded literal paths with globs doesn't
//          seem to work with the gulp.watch()

// https://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/

const gulp          = require("gulp");
const browser_sync  = require("browser-sync").create();
const log           = require("fancy-log");
const devip         = require('dev-ip');
const watch         = require('gulp-watch');
const size          = require('gulp-size');

// include paths file
const paths = require("../../paths");

function reload(done)
{
    browser_sync.reload();
    done();
}

gulp.task("gulp::serve", (done) =>
{
    devip();
    browser_sync.init
    ({
        // open: false,
        port: 8000, // change port to match default Jekyll
        ui:
        {
            port: 8001
        },
        server: paths.temp_site_dir,
        ghostMode: false, // do not mirror clicks, reloads, etc. (performance optimization)
        logFileChanges: true,
        open: false,       // do not open the browser (annoying)
        logPrefix: "Browser Sync",
        browser: ["google chrome", "firefox"]
    });
    done();
});