let babelify = require("babelify");
let browserify = require("browserify");
let buffer = require("vinyl-buffer");
let concat = require("gulp-concat");
let del = require("del");
let gulp = require("gulp");
let imagemin = require("gulp-imagemin");
let gulpif = require("gulp-if");
let minifyCSS = require("gulp-csso");
let pug = require("gulp-pug");
let sass = require("gulp-sass");
let source = require("vinyl-source-stream");
let sourcemaps = require("gulp-sourcemaps");
let sync = require("browser-sync").create();
let uglify = require("gulp-uglify");
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let pxtorem = require("postcss-pxtorem");

let options = {
    propList: ["*"],
    fallback: true
};
let processors = [autoprefixer, pxtorem(options)];
//let isProd = process.env.NODE_ENV === "production";
let isProd = true;

/**
 * PUG
 */

function templates() {
  return gulp.src("src/pages/**/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("dist/"))
    .pipe(sync.stream());
}

/**
 * SCSS
 */
/* .pipe(postcss(processors))*/
function scss() {
  return gulp.src("src/scss/styles.scss")
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulpif(isProd, minifyCSS()))
    .pipe(gulpif(!isProd, sourcemaps.write(".")))
    .pipe(gulp.dest("dist/css"))
    .pipe(sync.stream());
}

/**
 * JS
 */

function js() {
  return browserify({entries: ["src/js/scroll.js", "src/js/script.js"], debug: true})
    .transform(babelify, {presets: "es2015"})
    .bundle()
    .pipe(source("script.js"))
    .pipe(buffer())
    .pipe(gulpif(!isProd, sourcemaps.init({loadMaps: true})))
    .pipe(gulpif(!isProd, sourcemaps.write(".")))
    .pipe(gulp.dest("dist/js"))
    .pipe(sync.stream());
}

/**
 * IMAGES
 */

function images() {
  return gulp.src("src/img/**/*")
    .pipe(gulpif(isProd, imagemin({verbose: true})))
    .pipe(gulp.dest("dist/img"));
}

/**
 * FONTS
 */

function fonts() {
  return gulp.src("src/fonts/*")
    .pipe(gulp.dest("dist/fonts"));
}

/**
 * GLOBAL
 */

function clean() {
  return del(["dist"]);
}

gulp.task("build", gulp.series(clean, gulp.parallel(templates, scss, js, images, fonts)));

gulp.task("default", gulp.parallel(templates, scss, js, images, fonts, function(done) {
  sync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch("src/**/*.pug", templates);
  gulp.watch("src/**/*.scss", scss);
  gulp.watch("src/**/*.js", js);

  done();
}));
