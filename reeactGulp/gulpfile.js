var gulp = require('gulp');
var react = require('gulp-react');
var babel = require('gulp-babel');

gulp.task('watch', function() {
  gulp.watch(['src/*.jsx','src/*.html' ], ['default','convert']);
});


gulp.task('default', function(callback) {
 return gulp.src(['src/*.html'])
        .pipe(gulp.dest('dist'));
});

gulp.task('convert', function(callback) {
 return gulp.src('src/*.jsx')
        .pipe(react())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});