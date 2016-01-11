var Gulp = require('gulp');
var Nunjucks = require('gulp-nunjucks-html');
 
Gulp.task('nunjucksfoo', function() {


  return Gulp.src('./client/html/pages/**/*.+(html|nunjucks)')

    .pipe(Nunjucks({
      searchPaths: ['./client/html/templates/']
    }))
    .on('error', function(err) {
      console.log('something went wrong') 
    })
    .pipe(Gulp.dest('publicfoo'));
});