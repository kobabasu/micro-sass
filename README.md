# micro-sass
ruby-sassを利用するためruby環境とsassのインストールが必要

```
git clone git@github.com-kobabasu:kobabasu/micro-sass.git sass
```

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. `npm start`
1. `npm install`
1. `npm run build`

## npm script
すべてsassディレクトリ内で使用

```
npm run build:  docも生成するため長い
npm run watch:  watch
npm run sass :  コンパイル このスクリプトのみcomressed
```

## check
1. ブラウザで確認
   `open sample/index.html -a Google\ Chrome`

## gulp
1. gulp/dir.es6を変更
1. documentRootでgulp sass:buildを実行し動作するか確認

## path
* `lib.sass`を変更
* (`style.sass`を変更)
* (`config/_config.sass`を変更)
* (sample/index.htmlのパスを変更)

## files
ファイル構成は以下、

| ファイル名 | 内容
| ---- | ----
| components/ | redux用
| config/ | 変数設定用のファイル群
| containers/ | redux用
| extends/ | タグ・クラスをoverrideするもの
| functions/ | sassのfunction群
| gulp/ | gulpのtaskファイル
| layouts/ | 各ページ共通のクラス
| mixins/ | sassのmixin群
| modules/ | 汎用のクラス
| motions/ | motionに関わるクラス
| pages/ | 各ページ用のクラス
| sample/ | サンプル
| themes/ | 色・文字設定のみのクラス
| lib.sass | コンパイル時間短縮のためライブラリを外部化
| style.sass | rootのファイル
