var gulp = require("gulp");
var marked = require("gulp-marked");
var sass = require("gulp-sass");

gulp.task("marked", function() {
  gulp.src("./src/*.md")
  .pipe(marked({
    gfm: true
  }))
  .pipe(gulp.dest("./"))
});

gulp.task("sass", function() {
return gulp.src("./sass/.scss")
.pipe(sass())
.pipe(gulp.dest("./css"));
});

gulp.task("watch", function() {
  gulp.watch("./sass/.scss", ["sass"])
  gulp.watch("./src/*.md", ["marked"]);
});

gulp.task("default", ["watch"] {
});
