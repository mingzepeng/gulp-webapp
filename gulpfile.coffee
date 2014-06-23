gulp =    require 'gulp'
compass = require 'gulp-compass'
coffee =  require 'gulp-coffee'
uglify =  require 'gulp-uglify'
concat =  require 'gulp-concat'
sass =    require 'gulp-sass'
rimraf =  require 'rimraf'
minify_css = require 'gulp-minify-css'
connect = require 'gulp-connect'
wiredep = require('wiredep').stream

$ = require('gulp-load-plugins')();

path = 
  scripts : 'app/scripts/*.coffee'
  styles  : 'app/styles/*.scss'
  images  : 'app/images'

##dev##
gulp.task 'scripts',->
	gulp.src(path.scripts)
    .pipe $.coffee()
    # .pipe uglify()
    # .pipe concat 'all.min.js'
    .pipe gulp.dest '.tmp/scripts'
    .pipe connect.reload()

gulp.task 'styles',->
  gulp.src path.styles
    .pipe sass()
    # .pipe minify_css()
    # .pipe concat 'all.min.css'
    .pipe gulp.dest '.tmp/styles'
    .pipe connect.reload()

gulp.task 'html',->
  gulp.src './app/*.html'
    # .pipe uglify()
    .pipe gulp.dest 'app'
    .pipe connect.reload()

gulp.task 'connect',->
  connect.server {
    root : ['app','.tmp'],
    livereload:true,
    port:8081
  }

gulp.task 'watch' , ->
  gulp.watch path.scripts  , ['scripts']
  gulp.watch path.styles   , ['styles']
  gulp.watch './app/*.html', ['html']

gulp.task 'clean' , (cb)->
  rimraf './dist' ,cb

gulp.task 'wiredep' ,->
  gulp.src 'app/*.html'
    .pipe wiredep()
    .pipe gulp.dest 'app/'

gulp.task 'serve' ,['connect','watch','styles','scripts','html'] ,->
  require('opn') 'http://localhost:8081/'


##build##
gulp.task 'build',['clean','styles','scripts'],->
  jsFilter = $.filter '**/*.js'
  cssFileter = $.filter '**/*.css'

  gulp.src 'app/*.html'
    .pipe $.useref.assets {searchPath : '{.tmp,app}'}
    .pipe jsFilter
    .pipe uglify()
    .pipe jsFilter.restore()
    .pipe cssFileter
    .pipe minify_css()
    .pipe cssFileter.restore()
    .pipe $.useref.restore()
    .pipe $.useref()
    .pipe gulp.dest 'dist'
    .pipe $.size()

  gulp.src ['app/*.*','!app/*.html'],{dot:true}
    .pipe  gulp.dest 'dist'

gulp.task 'default', ['build'],->
  connect.server {
      root : 'dist',
      port:80
  }
  require('opn') 'http://localhost/'