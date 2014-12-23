var gulp = require('gulp');

var conf = {
	source: {
		html: './html/**/!(_)*.html',
		css: './scss/**/!(_)*.scss',
		js: './js/**/*.js',
		image: './images/**/*'
	},
	dest: {
		html: '../build',
		js: '../build/js',
		css: '../build/css',
		image: '../build/images'
	}
};

gulp.task('build', function() {

});

gulp.task('image', function() {
	return gulp.src(conf.source.image)
		.pipe(gulp.dest(conf.dest.image))
		;
});

gulp.task('html', function() {
	return gulp.src(conf.source.html)
		.pipe(gulp.dest(conf.dest.html))
		;
});