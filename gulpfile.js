var cssInput = './css/**/*.scss';
var cssOutput = './public/';

var jsInput = './app/**/*.js';
var jsOutput = './public/';

var gulp = require('gulp');
var sass = require('gulp-sass');

var browserify = require('browserify');
var uglifyify = require('uglifyify');
var source = require('vinyl-source-stream');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task("compile-css", function () {
    return gulp
        .src(cssInput)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(cssOutput));
});

gulp.task("compile-js", function() {
    return browserify('browser.js')
        .transform("babelify", {presets: ["es2015", "react"]})
        .transform("uglifyify", {global:true})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(jsOutput));
});

gulp.task('watch', function() {
    gulp.watch(cssInput, ['compile-css'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });

    gulp.watch(jsInput, ['compile-js'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('compile', ['compile-js', 'compile-css']);

gulp.task('default', ['compile', 'watch']);

