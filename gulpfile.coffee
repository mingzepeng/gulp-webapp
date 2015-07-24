gulp =    require 'gulp'
webpack = require 'webpack'
webpackConfig = require './webpack.config.js'

$ = require('gulp-load-plugins')()
browserSync = require('browser-sync').create()

src_path = 
  html    : 'app/**/*.html'
  scripts : 'app/**/*.js'
  scripts_jsx : 'app/**/*.jsx'
  styles  : 'app/**/*.css'

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

gulp.task 'webpack', ->
  webpack webpackConfig , (err,stats)->
    $.util.log err

gulp.task 'dev' , ['webpack','serve'] ,->
  gulp.watch src_path.styles , ['css']
  gulp.watch src_path.scripts_jsx , ['webpack']
  gulp.watch src_path.scripts , ['reload']
  gulp.watch src_path.html   , ['reload']
