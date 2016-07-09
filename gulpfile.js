var gulp = require('gulp');
var shell = require('gulp-shell');
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

gulp.task('prod', function() {
    return browserify('./src/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('build', function() {
    return browserify('./src/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('less', function() {
    return gulp
        .src('./less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('css-deps', function() {
    return gulp
        .src('./node_modules/angular-material/angular-material.min.css')
        .pipe(gulp.dest('./public/css'));
});

gulp.task('test', function() {
    return gulp
        .src('src/**/*.spec.js')
        .pipe(mocha({
            reporter: 'nyan',
            clearRequireCache: true,
            ignoreLeaks: true
        }));
});

gulp.task('jshint', function() {
    return gulp
        .src('src/**/*.*')
        .pipe(cache('linting'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('mocha', shell.task([
    'mocha spec'
]));

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['build']);
    gulp.watch('less/**/*.less', ['less']);
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
