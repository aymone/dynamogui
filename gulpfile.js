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
    return browserify('./app/app.js')
        .bundle()        // bundles it and creates a file called main.js
        .pipe(source('main.js'))
        .pipe(buffer())  // Convert from streaming to buffered vinyl file object
        .pipe(uglify())  // Uglify bundle
        .pipe(gulp.dest('./public/js/')); // saves it the public/js/ directory
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.*', ['build']);
});

gulp.task('db-create', shell.task([
    'docker run -d --name dynamo-gui -p 4770:4761 daime/docker-dynamodb:0.1.0'
]));

gulp.task('db-up', shell.task([
    'docker start dynamo-gui'
]));

gulp.task('db-down', shell.task([
    'docker stop dynamo-gui'
]));

gulp.task('db-delete', shell.task([
    'docker rm dynamo-gui'
]));

gulp.task('default', ['connect', 'watch']);
