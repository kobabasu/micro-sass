'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

import { dir } from '../dir.es6';

class Sass extends DefaultRegistry {

  init() {

    /*
     * sass
     */
    const style = {
      src:   dir.src  + 'style.sass',
      dist:  dir.dist + 'style.css',
      min:   dir.dist + 'style.min.css',
      watch: dir.src  + '**/*.*'
    };

    gulp.task('sass', shell.task([`
      sassc -M ${style.src} > ${style.dist}
    `]));

    gulp.task('sass:min', shell.task([`
      sassc -t compressed -M ${style.src} > ${style.dist} \
      -m ${style.min}
    `]));


    /*
     * lib
     */
    const lib = {
      src:   dir.src  + 'lib.sass',
      dist:  dir.dist + 'lib.css',
      min:   dir.dist + 'lib.min.css'
    };

    gulp.task('sass:lib', shell.task([`
      sassc -t compressed -M ${lib.src} > ${lib.dist} \
      -m ${lib.min}
    `]));


    /*
     * styledocco
     * 2016年 12月19日 月曜日 06時38分58秒 JST
     * errorのため動作しない
     */
    const docs = {
      title:   '"css reference"',
      src:     dir.src  + '**/*',
      dist:    dir.docs,
      page:    dir.src  + 'pages/**/*',
      layouts: dir.src  + 'layouts/**/*',
    };

    /*
    gulp.task('docs:root', shell.task([`
      styledocco -n ${docs.title} \
      -o ${docs.dist} ${docs.src}
    `]));

    gulp.task('docs:pages', shell.task([`
      styledocco -n ${docs.title} \
      -o ${docs.dist + '/pages'} ${docs.pages}
    `]));

    gulp.task('docs:layouts', shell.task([`
      styledocco -n ${docs.title} \
      -o ${docs.dist + '/layouts'} ${docs.layouts}
    `]));

    gulp.task(
      'sass:docs',
      gulp.series(
        'docs:root',
        'docs:pages',
        'docs:layouts'
    ));
    */


    /*
     * watch
     */
    gulp.task('sass:watch', () => {
      gulp
        .watch([], gulp.series('sass'))
        .on('error', err => process.exit(1));
    });


    /*
     * build
     */
    gulp.task('sass:build',
      gulp.series(
        'sass:min',
        'sass:lib'
        //'sass:docs'
    ));
  }
};

module.exports = new Sass();
