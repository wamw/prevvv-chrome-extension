var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var debowerify = require('debowerify');
var runSequence = require('gulp-run-sequence');


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
	runSequence(
		['html', 'image', 'script']
	);
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

gulp.task('script', function() {
	var bundle = browserify({
		entries: ['./js/popup.js'],
		insertGlobals : true
	})
		.transform(['debowerify'])
		.bundle()
		.pipe(source('popup.js'))
		.pipe(gulp.dest(conf.dest.js))
		;
	return bundle;
});