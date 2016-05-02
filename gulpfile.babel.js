/* eslint arrow-body-style: 0 */

import gulp from 'gulp';

import babel from 'gulp-babel';
import clean from 'gulp-clean';

gulp.task('clean', () =>
  gulp.src('./build', { read: false })
    .pipe(clean({ force: true })));

gulp.task('transpile', ['clean'], () =>
  gulp.src('./src/**/*.js')
    .pipe(babel())
    .on('error', (err) => { console.error(err); }) // eslint-disable-line
    .pipe(gulp.dest('./build/'))
);
// Rerun the task when a file changes
gulp.task('watch', ['build'], () =>
  gulp.watch('./src/**/*.js', ['transpile'])
);

gulp.task('build', ['transpile']);
gulp.task('default', ['build']);
