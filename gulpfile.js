var input = './css/**/*.scss';
var output = './public/';

var gulp = require('gulp');
var sass = require('gulp-sass');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('compile', function () {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
    return gulp
        .watch(input, ['compile'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('default', ['compile', 'watch']);

