var gulp = require('gulp'),
	changed = require('gulp-changed'),
	imagemin = require('gulp-imagemin'),
	concat = require('gulp-concat'),
	order = require('gulp-order'),
  less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-clean-css');

// Compress images
gulp.task('imagemin', function() {
  gulp.src('./raw/img/*')
    .pipe(changed('./img/'))
    .pipe(imagemin())
    .pipe(gulp.dest('./img/'));
});

// Build JS
gulp.task('auth-js', function() {
  gulp.src('./raw/scripts/auth*.js')
    .pipe(order([
      'auth.js',
      'auth_ux.js',
      'auth_requests.js',
      'auth_home.js',
      'auth_search.js'
    ]))
    .pipe(concat('instruct.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});
gulp.task('noauth-js', function() {
  gulp.src('./raw/scripts/noauth_*.js')
    .pipe(concat('home.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});
gulp.task('scripts', ['auth-js', 'noauth-js'], function(){});

// Styles concat, auto-prefix and minify
gulp.task('auth-css', function() {
  gulp.src(['./raw/styles/auth.less'])
    .pipe(less({
      paths: [ './raw/styles/' ]
    }))
    .pipe(concat('instruct.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css/'));
});
gulp.task('noauth-css', function() {
  gulp.src(['./raw/styles/noauth.css'])
    .pipe(concat('home.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css/'));
});
gulp.task('styles', ['auth-css', 'noauth-css'], function(){});

// all in one!
gulp.task('default', ['imagemin', 'scripts', 'styles'], function(){});
