var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var path = require('path');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var cache = require('gulp-cached');

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
        // .pipe(buffer())  // Convert from streaming to buffered vinyl file object
        // .pipe(uglify())  // Uglify bundle
        .pipe(gulp.dest('./public/js/')); // saves it the public/js/ directory
});

gulp.task('less', function() {
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('test', function() {
    gulp.src('app/**/*.spec.js')
        .pipe(mocha({
            reporter: 'nyan',
            clearRequireCache: true,
            ignoreLeaks: true
        }));
});

gulp.task('jshint', function() {
    return gulp.src('app/**/*.*')
        .pipe(cache('linting'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('mocha', shell.task([
    'mocha spec'
]));

gulp.task('watch', function() {
    gulp.watch('app/**/*.*', ['build']);
    gulp.watch('app/**/*.spec.js', ['mocha']);
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

gulp.task('hi', function() {
    gutil.log('Watching...');
});

gulp.task('default', ['connect', 'watch']);
