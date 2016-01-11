var Gulp = require('gulp');
var Path = require('path');
var Merge = require('merge-stream');


Gulp.task('media', function () {

    var metas = Gulp.src('./client/media/*')
        .pipe(Gulp.dest(Path.join('./public/')));

    var fontAwewsome = Gulp.src('./node_modules/font-awesome/fonts/**')
        .pipe(Gulp.dest(Path.join('./public/assets', 'fonts', 'font-awesome', 'fonts')));

		var img = Gulp.src('./client/img/*')
		        .pipe(Gulp.dest(Path.join('./public/assets', 'img')));


    return Merge(metas, fontAwewsome, img);
});
