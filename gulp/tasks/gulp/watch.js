var gulp  = require("gulp");
var browser_sync  = require("browser-sync").create();
var log   = require("fancy-log");
var devip = require('dev-ip');
var watch = require('gulp-watch');
var size       = require('gulp-size');

// include paths file
var paths = require("../../paths");



gulp.task('watch', function() {
    gulp.watch(paths.md_files_glob, function(ev) {
        log(paths.md_files_glob);
        log(ev.type);
        if (ev.type === 'added' || ev.type === 'changed') {
          log(ev.path);
        }
    });
  });

  gulp.task('test-watch', (done) =>
  {
      gulp.src([paths.source_dir + '**/*', "!" + paths.source_dir + "assets/**/*"], {base: paths.source_dir})
        .pipe(watch(paths.source_dir, {base: paths.source_dir}))
        .pipe(
          size
          ({
              title: 'Watching:',
              showFiles: true,
              pretty: true
          })
      )
        .pipe(gulp.dest(paths.temp_src_dir));
      done();
  });
  
  gulp.task('watch-folder', (done) => {  
      gulp.src(paths.source_dir + '/**/*', {base: paths.source_dir})
        .pipe(watch(paths.source_dir, {base: paths.source_dir}))
        .pipe(
          size
          ({
              title: 'Copying:',
              showFiles: true,
              pretty: true
          })
      )
        .pipe(gulp.dest(paths.temp_src_dir));
      done();
  });