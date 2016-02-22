/**
 * @author    Junxiang Wei {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Junxiang Wei
 * @license   MIT
 */
'use strict';

let gulp = require('gulp');
let browserSync = require('browser-sync');
let gulpJspm = require('gulp-jspm');

gulp.task('demo', () => {
  browserSync.create();

  gulp.watch(['lib', 'demo', 'jspm_packages', 'css', 'build'], [browserSync.reload]);

  browserSync.init({
    'server': {
      'baseDir': ['demo', 'jspm_packages', '.']
    }
  });
});

gulp.task('default', ['demo']);

gulp.task('build', () => {
	return gulp.src('demo/app.js')
		.pipe(gulpJspm())
		.pipe(gulp.dest('build'));
});
