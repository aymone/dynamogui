var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

// Connect task
gulp.task('connect', function() {
    connect.server({
        root: 'public',
        port: 4000
    });
});

gulp.task('build', function() {
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

gulp.task('watch', function() {
    gulp.watch('app/**/*.*', ['build']);
});

//Dockerize dynamodb on 4770
gulp.task('dynamoUp', shell.task([
    'docker run -d -p 4770:4761 daime/docker-dynamodb:0.1.0'
]));

gulp.task('default', ['connect', 'watch']);
