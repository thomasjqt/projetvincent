var config ={
    src:{
        style:"src/scss/",
        mainStyle:"main.scss",
        script:"src/js/",
        mainScript:"main.js"
    },

    public:{
        style:"public/css/",
        script:"public/js/",
        html:"public/",
        folder:"public/",
    },
}
var sass = require('gulp-sass');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch',['browserSync','sass'], function(){
    gulp.watch(config.src.style +"**/*.scss", ['sass']);
    gulp.watch(config.public.html +"**/*.html", browserSync.reload);
    // Other watchers
  })

gulp.task('sass', function(){
    return gulp.src(config.src.style + config.src.mainStyle)
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest(config.public.style))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir:config.public.folder,
      },
    })
  })
  

