var cssInput = './css/**/*.scss';
var cssOutput = './public/';

var jsInputs = [
    './app/**/*.js',
    './browser.js'
];
var jsOutput = './public/';

var gulp = require('gulp');
var sass = require('gulp-sass');

var browserify = require('browserify');
var uglifyify = require('uglifyify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

var fs = require('fs');

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

var b = {
    instance: watchify(
        browserify('./browser.js', {
            baseDir: __dirname,
            fullPaths: true, // for watchify
            cache: {}, // for watchify
            packageCache: {} // for watchify
        })
        .transform("babelify", {presets: ["es2015", "react"]})
        .transform("uglifyify", {global:true})
    ),

    bundle: () => {
        return b.instance.bundle()
            .on('error', function(err) {
                console.log(err.toString());
                // Marks the process as done, allows Gulp to start watching again, otherwise it would just be stuck here
                this.emit("end");
            })
            .pipe(source('main.js'))
            .pipe(gulp.dest(jsOutput));
    }
};

//b.instance.on('update', b.bundle);
//b.bundle();


gulp.task("compile-js", function() {
    return b.bundle();
});

gulp.task('watch', ['compile'], function() {
    gulp.watch(cssInput, ['compile-css']);

    jsInputs.forEach((jsInput) => {
        gulp.watch(jsInput, ['compile-js'])
    });
});

//gulp.task('compile', ['compile-css', 'compile-js']);
gulp.task('compile', ['compile-css', 'compile-js']);

gulp.task('default', ['watch']);

