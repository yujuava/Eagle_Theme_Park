//套件方法的引入
const { src, dest, watch, series, parallel } = require('gulp');



// html package
const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('src/*.html') // 來源
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))// fileinclude function
        .pipe(dest('./dist'));// 目的地
}

exports.html =  includeHTML;

// js move
function moveJs() {
  return src('src/js/*.js').pipe(dest('dist/js'))
}

//img move
function moveImg() {
  return src('src/images/*.*').pipe(dest('dist/images'))
}

// php move
//img move
function movePhp() {
  return src('src/php/*.php').pipe(dest('dist/php'))
}

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// sass ->css
function styleSass() {
  return src('./src/sass/*.scss')
      .pipe(sourcemaps.init())
      // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest('./dist/css'));
}


// 監看
function watchfile() {
  watch(['src/*.html' , 'src/**/*.html'], includeHTML)    // 監看html
  watch('src/js/*.js' , moveJs)  // 監看js
  watch(['src/images/*.*', 'src/images/**/*.*'] , moveImg)  // 監看img
  watch(['./src/sass/*.scss' ,'./src/sass/**/*.scss'], styleSass) // 監看sass
  watch(['./src/php/*.php' ,'./src/php/**/*.php'], movePhp) // 監看php
}

// 瀏覽器同步
const browserSync = require('browser-sync');
const reload = browserSync.reload;


function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
    watch(['src/*.html' , 'src/**/*.html'], includeHTML).on('change' , reload)    // 監看html
    watch('src/js/*.js' , moveJs).on('change' , reload)  // 監看js
    watch(['src/images/*.*', 'src/images/**/*.*'], moveImg).on('change' , reload)  // 監看 img
    watch(['./src/sass/*.scss' ,'./src/sass/**/*.scss'], styleSass).on('change' , reload) // 監看sass
    watch(['./src/php/*.php' ,'./src/php/**/*.php'], movePhp)
    done();
}


// 監看
exports.w =  series(parallel(moveJs, moveImg, includeHTML, styleSass, movePhp), watchfile)  

//瀏覽器同步
exports.default =  series(parallel(moveJs, includeHTML, styleSass, moveImg, movePhp), browser)  