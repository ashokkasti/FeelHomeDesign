var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload');




// Styles
gulp.task('styles', function () {
	gulp.src('sass/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('assets/css'))
		.pipe(livereload());
});


// Watches
gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('*.html').on('change', livereload.changed);
});

gulp.task('default', ['watch']);