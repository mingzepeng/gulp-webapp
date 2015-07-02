gulp =    require 'gulp'
$ = require('gulp-load-plugins')()
browserSync = require('browser-sync').create()

src_path = 
  html    : 'app/**/*.html'
  scripts : 'app/scripts/**/*.js'
  styles  : 'app/styles/**/*.css'

build_path =
  html    : 'build'
  scripts : 'build/scripts'
  styles  : 'build/styles'

gulp.task 'reload' , ->
  browserSync.reload() 

gulp.task 'css' , ->
  gulp.src(src_path.styles)
  .pipe(browserSync.stream())

gulp.task 'serve' , ->
  browserSync.init ({
      server : 'app'
      directory: true
    })

gulp.task 'dev' , ['serve'] ,->
  gulp.watch src_path.styles , ['css']
  gulp.watch src_path.scripts , ['reload']
  gulp.watch src_path.html   , ['reload']
