var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var debowerify = require('debowerify');
var runSequence = require('gulp-run-sequence');
var sass = require('gulp-ruby-sass');
var ect = require('gulp-ect');
var rimraf = require('rimraf');

var conf = {
	source: {
		ect: './templates/**/!(_)*.ect',
		html: './html/**/!(_)*.html',
		css: './scss/**/!(_)*.scss',
		js: './js/**/*.js',
		image: './images/**/*',
		lib: {
			js: './lib/js/**/*'
		}
	},
	dest: {
		ect: './html',
		html: '../build',
		js: '../build/js',
		css: '../build/css',
		image: '../build/images',
		lib: {
			js: '../build/js/lib'
		}
	}
};

gulp.task('clean', function(callback) {
	rimraf('./html', callback);
});

gulp.task('build', function() {
	runSequence(
		['ect'],
		['lib'],
		['html', 'image', 'style', 'script-screenshot', 'script-init', 'script-background'],
		['clean']
	);
});

gulp.task('watch', function() {
	gulp.watch([
		conf.source.ect,
		conf.source.html,
		conf.source.js,
		conf.source.css,
		conf.source.image
	], ['build'])
});

gulp.task('lib', function() {
	return gulp.src(conf.source.lib.js)
		.pipe(gulp.dest(conf.dest.lib.js))
		;
});

gulp.task('image', function() {
	return gulp.src(conf.source.image)
		.pipe(gulp.dest(conf.dest.image))
		;
});

gulp.task('ect', function() {
	return gulp.src(conf.source.ect)
		.pipe(ect())
		.pipe(gulp.dest(conf.dest.ect))
		;
});

gulp.task('html', function() {
	return gulp.src(conf.source.html)
		.pipe(gulp.dest(conf.dest.html))
		;
});

gulp.task('script', function() {
	// var bundle = browserify({
	// 	entries: ['./js/popup.js'],
	// 	insertGlobals : true
	// })
	// 	.transform(['debowerify'])
	// 	.bundle()
	// 	.pipe(source('popup.js'))
	// 	.pipe(gulp.dest(conf.dest.js))
	// 	;

	gulp.src(conf.source.js)
		.pipe(gulp.dest(conf.dest.js))
		;
});

gulp.task('script-background', function() {
	gulp.src([
		'./js/background.js'
	])
		.pipe(gulp.dest(conf.dest.js))
		;
});

gulp.task('script-init', function() {
	var bundle = browserify({
		entries: ['./js/init.js'],
		insertGlobals : true
	})
		.transform(['debowerify'])
		.bundle()
		.pipe(source('init.js'))
		.pipe(gulp.dest(conf.dest.js))
		;
});

gulp.task('script-screenshot', function() {
	var bundle = browserify({
		entries: ['./js/screenshot.js'],
		insertGlobals : true
	})
		.transform(['debowerify'])
		.bundle()
		.pipe(source('screenshot.js'))
		.pipe(gulp.dest(conf.dest.js))
		;
});

gulp.task('style', function() {
	return gulp.src(conf.source.css)
		.pipe(sass({
			style: 'expanded'
		}))
		.pipe(gulp.dest(conf.dest.css))
		;
})