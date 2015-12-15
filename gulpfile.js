var gulp = require('gulp');


var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var runSeq = require('run-sequence');


livereload({ start: true })


gulp.task('buildScripts', function() {
  return gulp.src('./public/scripts/*.js')
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./public/bundle'));
});

gulp.task('reload', function () {
    livereload.reload();
});


gulp.task('default', function () {

  gulp.start('buildScripts');


  gulp.watch('public/scripts/**', function () {
      runSeq('buildScripts');
  });

  gulp.watch('public/**.css', function() {
      runSeq('reload')
  })

  gulp.watch('public/**.html', function() {
      runSeq('reload')
  })

})