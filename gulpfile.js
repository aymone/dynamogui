var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

// Connect task
gulp.task('connect', () => {
    connect.server({
        root: 'public',
        port: 4000
    });
});

gulp.task('build', () => {
    // Grabs the app.js file
    return browserify('./app/app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        // .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        // .pipe(uglify()) // now gulp-uglify works
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', () => {
    gulp.watch('app/**/*.js', ['build']);
});

gulp.task('default', ['connect', 'watch']);
