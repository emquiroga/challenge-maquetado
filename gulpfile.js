const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');

function buildStyles() {
    return gulp.src('./sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/styles'));
}

exports.buildStyles = buildStyles;
