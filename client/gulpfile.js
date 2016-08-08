var gulp = require('gulp');
var replace = require('gulp-replace-task');
var connect = require('gulp-connect');


gulp.task('connect', function () {
  connect.server({
    root: 'build'
  });
});

gulp.task('build', function () {
  gulp.src('node_modules/**/*').pipe(gulp.dest('build/node_modules/'));
  gulp.src('node_modules/**/*').pipe(gulp.dest('build/node_modules/'));
  gulp.src(['app.js', 'index.html']).pipe(gulp.dest('build/'));

  gulp.src('scripts/**/*')
    .pipe(replace({
      patterns: [
        {
          match: 'createEndpoint',
          replacement: process.env.CREATE_ENDPOINT
        }
      ]
    }))
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('watch', function () {
  gulp.watch(['scripts/**/*', 'app.js', 'index.html'], ['build']);
});

gulp.task('default', ['build', 'connect', 'watch']);
