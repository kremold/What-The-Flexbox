var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles',function() {
  gulp.src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});


//the watch function checks every time you save to update
gulp.task('watch',function() {
  gulp.watch('css/styles.css', ['styles']);
});
