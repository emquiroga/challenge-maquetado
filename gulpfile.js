'use strict'

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

function watchSass() {
    return src('src/sass/style.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('dist', { sourcemaps: '.' }))
}

function watchJS() {
    return src('src/js/main.js', { sourcemaps: true })
        .pipe(babel({ presets: ['@babel/preset-env']}))
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.'}))
}

function browserSyncServe(cb) {
    browserSync.init({
        server : {
            baseDir: '.'
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
            },
        },
    });
    cb();
}
function browserSyncReload(cb) {
    browserSync.reload();
    cb();
}

function watchTask() {
    watch('*.html', browserSyncReload);
    watch(
        ['src/sass/**/*.scss', 'src/**/*.sass'],
    );
}

exports.default = series(watchSass, watchJS, browserSyncServe, watchTask);
