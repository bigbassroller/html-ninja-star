var Gulp = require('gulp');
var NunjucksRender = require('gulp-nunjucks-render');
var Htmlclean = require('gulp-htmlclean');

Gulp.task('nunjucks', function() {
  NunjucksRender.nunjucks.configure(['./client/html/templates/']);

  return Gulp.src('./client/html/pages/**/*.+(html|nunjucks)')

  .pipe(NunjucksRender())
  // .pipe(Htmlclean({
  //     protect: /<\!--%fooTemplate\b.*?%-->/g,
  //     edit: function(html) { return html.replace(/\begg(s?)\b/ig, 'omelet$1'); }
  //   }))
  .pipe(Gulp.dest('public'))

});
