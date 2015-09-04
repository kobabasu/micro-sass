# micro-sass
ruby-sassを利用するためruby環境とsassのインストールが必要

```
hub clone kobabasu/micro-sass sass
```

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. package.jsonを確認  
1. `npm install`
1. `npm run build:sample` その他のnpm設定は通常のproject用

## check
1. ブラウザで確認
   `open sample/index.html -a Google\ Chrome`

## path
* `_config.sass`内の$fa-font-pathを変更
* `style.sass`内のvendorのパスを変更(`normalize.css`はcss読み込み用の変更)
* sample/index.htmlのパスを変更

## files
ファイル構成は以下、
configs, base, lib, pages, layouts, modulesに別れる

### config
各種設定ファイル

#### style.sass
* rootのファイル

#### config.sass
* ライブラリの初期設定 

#### vars.sass
* フレームワーク全体の初期設定

#### arrays.scss
* color, widthなど配列で展開する

### base
フレームワーク全体に関わるクラス

#### base.sass
* elementに影響を与えるクラス

#### theme.sass
* admin, frontの両方に関わるクラス
* 色、font-sizeなどアピアランスの設定

### lib
汎用のファイル。他のプロジェクトでも流用可能なクラス

#### functions
* sassのfunction集
* 汎用

#### mixins
* sassのmixin集
* 汎用

#### motions
* motionに関わるクラス
* 汎用
* animate.cssを利用
* wobble, swing, tadaがデフォルト

### page
プロジェクト固有のクラス

#### layouts
* 各ページ共通のクラス
* admin, frontで別れる
* styledoccoは/docs/layouts/

#### pages
* 各ページそれぞれのクラス
* admin, frontで別れる
* styledoccoは/docs/pages/

### module
汎用のファイル。他のプロジェクトでも使用可。  

#### modules
* 汎用

##### index.sass
以下の順で読み込む
* neat, bootstrap, fontawesome
* modules
* debug

##### debug.sass
* 横のgridを引くクラス
* 縦のgridはneat

##### bootstrap.sass
* bootstrapを上書きするクラス
* bootstrapと共通させるためのクラス

##### neat.sass
* neatを上書きするクラス

##### fontawesome.sass
* fontawesomeを上書きするクラス

##### colors.sass
* arraysのcolorを展開

##### widths.sass
* arraysのwidthを展開

##### grid.sass
##### anchor.sass
* anchorのhoverを一括で設定するクラス

##### table.sass
* tableに関するクラス

##### form.sass
* formに関するクラス

##### responsive.sass
* responsiveに関するクラス

##### typography.sass
* typeに関するクラス
* varsのdefaultのfont-sizeとfont-familyに設定

### others
その他のファイル

#### README.md
* このファイル

#### sample
* sampleのhtmlとcss
