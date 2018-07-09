/*
 * Gulpfile
 */ 

// Load npm packages
const gulp   = require('gulp'),
      concat = require('gulp-concat'),
      cssmin = require('gulp-cssmin'),
      print  = require('gulp-print').default,
      rename = require('gulp-rename'),
      sass   = require('gulp-sass'),
      util   = require('gulp-util')


/*
 * Set global variables: 
 *  - src: specifies source directories for the downloaded npm modules
 *  - build: specifies paths for directory for customizations of packages
 *      defaults 
 *  - dest: destination for processed dependencies ('static' by default in
 *      Hugo) 
 */

// Specify where dependencies are stored. 
const src = {
  bulma: {
    sass: './node_modules/bulma/sass/'
  },
}

// Specify build directory for sass, js, amd images. 
const build = {
  bulma: {
    sass: './build/sass/bulma/',
  },
  sass: './build/sass/',
  fonts:'./build/fonts/'
}

// Specify directory for processed dependencies. 
const dest = {
  css: './themes/manelopez/static/css/',
  js: './themes/manelopez/static/js/',
  fonts:'./themes/manelopez/static/fonts/'
}


/*
 * Define gulp tasks:
 *  - default: rebuild css and fonts
 *  - fonts: rebuild fonts
 *  - sass: rebuild css from sass source files
 */

// Rebuild css and fonts
gulp.task('default', function() {
  gulp.start(['sass', 'fonts']);
});

// Compile css from sass files
gulp.task('sass', function() {
  return gulp.src(['node_modules/bulma/custom-bulma.sass'])
    .pipe(sass())
    .pipe(print())
    .pipe(cssmin())
    .pipe(rename(function (name) {
      name.extname = '.min.css';
    }))
    .pipe(gulp.dest(dest.css));
});

// Copy fonts from node_modules
gulp.task('fonts', function() {
  // return gulp.src(src.fontawesome.fonts + '**/*')
  //   .pipe(gulp.dest(dest.fonts))
  //   .on('end', function() { util.log("Copied fonts."); });
});
