var Gulp = require('gulp');


Gulp.task('watch', function () {

    global.isWatching = true;
    Gulp.watch('./client/*.scss', ['sass']);
    Gulp.watch('./client/*/*.scss', ['sass']);
    Gulp.watch('./client/*/*/*.scss', ['sass']);

    Gulp.watch('./*.js', ['scripts']);
    Gulp.watch('./**/*.js', ['scripts']);
    Gulp.watch('./**/*/*.js', ['scripts']);
    Gulp.watch('./**/*/*/*.js', ['scripts']);

    Gulp.watch('./*.html', ['nunjucks']);
    Gulp.watch('./**/*.html', ['nunjucks']);
    Gulp.watch('./**/*/*.html', ['nunjucks']);
    Gulp.watch('./**/*/*/*.html', ['nunjucks']);
});
