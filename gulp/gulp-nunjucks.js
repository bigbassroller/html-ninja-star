const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
 
gulp.task('gulp-nunjucks', () => {
	return gulp.src('./client/html/pages/**/*.+(html|nunjucks)')
    .pipe(nunjucks({
      searchPaths: ['./client/html/templates/']
    }))
    .on('error', function(err) {
      console.log('something went wrong') 
    })
		.pipe(gulp.dest('public'));
});