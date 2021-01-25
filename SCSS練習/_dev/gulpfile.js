const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
function compileSass() {
  return src("sass/**/*scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(dest("../css"));
}
exports.sass = compileSass;
exports.watch = function () {
  watch("sass/**/*scss", compileSass);
};