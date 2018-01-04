import gulp from 'gulp';
import del from 'del';
import path from 'path';
import notify from 'gulp-notify';
import sass from 'gulp-sass';
import scsslint from 'gulp-scss-lint';
import plumber from'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';
import cleanCSS from 'gulp-clean-css';

const paths = {
    app: 'dist/',
    css: 'dist/css/'
};

gulp.task('clean:styles', () => {
    return del([
        paths.css
    ]);
});

gulp.task('scsslint', function() {
    return gulp.src('src/**/*.scss')
        .pipe(scsslint());
});

gulp.task('styles', ['scsslint'], () => {

    return gulp.src('style.scss')
        .pipe(plumber())
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.css))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.css))
        .pipe(cleanCSS({debug: true}))
        .pipe(gulp.dest(paths.css));
});

gulp.task('default', ['styles']);
