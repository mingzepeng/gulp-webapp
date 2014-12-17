gulp =    require 'gulp'
$ = require('gulp-load-plugins')()
browserSync = require 'browser-sync'

src_path = 
  scripts : 'app/scripts'
  styles  : 'app/styles'

build_path =
  scripts : 'build/scripts'
  styles  : 'build/styles'


gulp.task 'reload' , ->
  browserSync.reload() 


gulp.task 'serve' , ->
  browserSync {
    server : 
      baseDir : './app'
      directory : true    
      index: "index.html"
  }

gulp.task 'dev' , ['serve'] ,->
  gulp.watch ['app/*'] , ['reload']
