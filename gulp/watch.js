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

    Gulp.watch('./*.nunjucks', ['nunjucks']);
    Gulp.watch('./**/*.nunjucks', ['nunjucks']);
    Gulp.watch('./**/*/*.nunjucks', ['nunjucks']);
    Gulp.watch('./**/*/*/*.nunjucks', ['nunjucks']);
});
