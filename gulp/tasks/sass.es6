'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

import { dir } from '../dir.es6';

class Sass extends DefaultRegistry {

  init() {
    // task名の接頭辞を設定
    let prefix = (dir.name == '') ? '' : dir.name + ':';

    /*
     * sass
     */
    const style = {
      src:   dir.src  + 'style.sass',
      dist:  dir.dist + 'style.css',
      min:   dir.dist + 'style.min.css',
      map:   dir.dist + 'style.min.css.map',
      watch: dir.src  + '**/*.*'
    };

    gulp.task(prefix + 'sass', shell.task([`
      sassc -M ${style.src} > ${style.dist}
    `]));

    gulp.task(prefix + 'sass:min', shell.task([`
      sassc -t compressed -M ${style.src} > ${style.min} \
      -m ${style.map}
    `]));


    /*
     * lib
     */
    const lib = {
      src:   dir.src  + 'lib.sass',
      dist:  dir.dist + 'lib.css',
      min:   dir.dist + 'lib.min.css'
    };

    gulp.task(prefix + 'sass:lib', shell.task([`
      sassc -t compressed -M ${lib.src} > ${lib.min} \
      -m ${lib.map}
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
    gulp.task(prefix + 'docs:root', shell.task([`
      styledocco -n ${docs.title} \
      -o ${docs.dist} ${docs.src}
    `]));

    gulp.task(prefix + 'docs:pages', shell.task([`
      styledocco -n ${docs.title} \
      -o ${docs.dist + '/pages'} ${docs.pages}
    `]));

    gulp.task(prefix + 'docs:layouts', shell.task([`
      styledocco -n ${docs.title} \
      -o ${docs.dist + '/layouts'} ${docs.layouts}
    `]));

    gulp.task(
      prefix + 'sass:docs',
      gulp.series(
        prefix + 'docs:root',
        prefix + 'docs:pages',
        prefix + 'docs:layouts'
    ));
    */


    /*
     * watch
     */
    gulp.task(prefix + 'sass:watch', () => {
      gulp
        .watch([style.watch], gulp.series(prefix + 'sass'))
        .on('error', err => process.exit(1));
    });


    /*
     * build
     */
    gulp.task(prefix + 'sass:build',
      gulp.series(
        prefix + 'sass',
        prefix + 'sass:min',
        prefix + 'sass:lib'
        // prefix + 'sass:docs'
    ));
  }
};

module.exports = new Sass();
