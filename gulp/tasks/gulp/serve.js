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
        port: 4000, // change port to match default Jekyll
        ui:
        {
            port: 4001
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

gulp.task("gulp::watch", (done) => {
    // Watch site settings
    gulp.watch([paths.md_files_glob, paths.html_files_glob, paths.yml_files_glob], gulp.series("build::gulp::site", reload));
    gulp.watch(paths.css_files_glob, gulp.series("gulp::copy-css", "gulp::compress-css", "gulp::concat-css", reload));
    gulp.watch(paths.js_files_glob, gulp.series("gulp::copy-js", "gulp::js", reload));
    gulp.watch(paths.scss_files_glob, gulp.series("gulp::sass", "gulp::css", reload));
    gulp.watch(paths.image_files_glob, gulp.series("gulp::assets", reload));
    done();
})
