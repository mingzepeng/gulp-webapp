gulp =    require 'gulp'
$ = require('gulp-load-plugins')()
browserSync = require 'browser-sync'
reload = browserSync.reload

src_path = 
  html    : 'app'
  scripts : 'app/scripts'
  styles  : 'app/styles'
  coffee  : 'app/scripts/**/*.coffee' 
  sass    : 'app/styles/**/*.scss'
  jade    : ['app/*.jade','app/jade/**/*.jade']
  cjade   : 'app/*.jade'

build_path =
  html    : 'build'
  scripts : 'build/scripts'
  styles  : 'build/styles'

compileJade = (src = src_path.cjade , dest = src_path.html)->
  gulp.src src
  .pipe $.plumber()
  .pipe($.jade({pretty : true}))
  .pipe gulp.dest dest 

compileCoffee = (src = src_path.coffee,dest = src_path.scripts)->
  gulp.src src
  .pipe $.plumber()
  .pipe($.coffee())
  .pipe gulp.dest dest

compileSass = (src = src_path.sass,dest = src_path.styles)->
  gulp.src src
  .pipe $.plumber()
  .pipe($.sass())
  .pipe gulp.dest dest
  .pipe reload({stream : true})

gulp.task 'jade' , ->
  compileJade()

gulp.task 'coffee' , ->
  compileCoffee()

gulp.task 'sass' , ->
  compileSass()



gulp.task 'reload' , ->
  browserSync.reload() 


gulp.task 'serve' , ->
  browserSync {
    server : 
      baseDir : './app'
      # directory : true    
      index: "index.html"
  }

gulp.task 'dev' , ['serve'] ,->
  gulp.watch src_path.jade   , ['jade','reload']
  gulp.watch src_path.coffee , ['coffee','reload']
  gulp.watch src_path.sass   , ['sass']
