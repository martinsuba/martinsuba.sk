const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssnano      = require('gulp-cssnano'),
      jshint       = require('gulp-jshint'),
      uglify       = require('gulp-uglify-es').default,
      imagemin     = require('gulp-imagemin'),
      rename       = require('gulp-rename'),
      concat       = require('gulp-concat'),
      notify       = require('gulp-notify'),
      cache        = require('gulp-cache'),
      livereload   = require('gulp-livereload'),
      gutil        = require('gulp-util'),
      del          = require('del');

// Styles
gulp.task('styles', () =>
  gulp.src('src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }))
    .pipe(livereload())
);

// Scripts
gulp.task('scripts', () =>
  gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify(/* options */))
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }))
);

gulp.task('images', () =>
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }))
);

// Watch
gulp.task('watch', () => {

  // Create LiveReload server
  livereload.listen();

  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/js/**/*.js', ['scripts']);

  // Watch any files in dist/, reload on change
  gulp.watch(['styles/**', 'js/**']);

});

// Default task
gulp.task('default', () =>
  gulp.start('styles', 'scripts', 'watch')
);