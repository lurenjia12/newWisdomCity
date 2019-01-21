var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var cleanCSS = require('gulp-clean-css')
var sass = require('gulp-sass')
var bulkSass =require('gulp-sass-bulk-import')
var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync').create()
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')
var plumberOptions = {
  errorHandler: notify.onError('Error:<%= error.message %>')
}

var scss_task = function () {
  var array = [
    `./src/scss/style.scss`
  ]
  gulp.src(array)
    .pipe(bulkSass())
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['./src/scss']
    }))
    .pipe(autoprefixer({
      browsers: ['last 20 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/css'))
    .pipe(browserSync.stream())

  gulp.src('node_modules/element-ui/lib/theme-chalk/fonts/*.*')
    .pipe(gulp.dest('./static/element/'))
}

// 样式编译
gulp.task('sass', done=>{
  scss_task()
  done()
})

// gulp.task('element-font', function(){
//   gulp.src('node_modules/element-ui/lib/theme-chalk/fonts/*.*')
//     .pipe(gulp.dest('./static/element/'))
// })

function watchFiles() {
  gulp.watch('./src/scss/**/*.scss', done=>{
    scss_task()
    done()
  })
}

// 开发用
gulp.task('server', function () {
  // browserSync.init({
  //   // server: './',
  //   proxy: '127.0.0.1:8080'
  // })
})

// 默认任务即为发布
gulp.task('default', gulp.parallel(watchFiles))



