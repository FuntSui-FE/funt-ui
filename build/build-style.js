const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// 编译less
gulp.task('css', function() {
  gulp
    .src('../styles/index.less')
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ['Android >= 4.1', 'iOS >= 7']
      })
    )
    .pipe(cleanCSS())
    .pipe(rename('funt-ui.css'))
    .pipe(gulp.dest('../lib/styles'));
});

gulp.task('default', ['css']);
