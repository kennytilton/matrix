# shadow-cljs - ブラウザ・クイックスタート

これはブラウザ上で動作するCLJSプロジェクトで利用できる最小限のテンプレートです。

## 必要なソフトウェア

- [node.js (v6.0.0+)](https://nodejs.org/en/download/)
- [Java JDK (8+)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) または [Open JDK (8+)](http://jdk.java.net/10/)

## ユーザーガイド

このリポジトリでは、基本的なブラウザ向けのビルド方法を示します。

詳細は完全な[ユーザーガイド](https://shadow-cljs.github.io/docs/UsersGuide.html)をご参照ください。


## 例の実行

```bash
git clone https://github.com/shadow-cljs/quickstart-browser.git quickstart
cd quickstart
npm install
npx shadow-cljs server
```

以上により `shadow-cljs` サーバープロセスが実行され、以下のすべてのコマンドはこのプロセスに応答します。
このプロセスを実行したまま、新しいターミナルを開いて続行してください。

最初の起動は、すべての依存関係をダウンロードして準備作業を行う必要があるため、少し時間がかかります。
これが実行されると、すぐに始められます。

```txt
npx shadow-cljs watch app
```

これにより設定された `:app` ビルドのコンパイルが開始して、ファイルを変更するたびに再コンパイルします。

"Build completed." というメッセージが表示されたら、ビルドを使用する準備が整いました。

```txt
[:app] Build completed. (23 files, 4 compiled, 0 warnings, 7.41s)
```

では [http://localhost:8020](http://localhost:8020)を開きましょう。

このアプリは、最も便利な開発ツールが設定された基本的なスケルトンに過ぎません。

`shadow-cljs` の設定は `shadow-cljs.edn` でします。次のようなものです。

```clojure
;; shadow-cljs の設定
{:source-paths ; .cljs ファイルはここで指定します
 ["src/dev"
  "src/main"
  "src/test"] 

 :dependencies ; 後ほど説明します
 [] 

 :dev-http ; http://localhost:8020 上で http 開発用サーバーを起動し、`public` をサーブします。
 {8020 "public"}

 :builds
 {:app ; build identifier
  {:target :browser
   :output-dir "public/js"
   :asset-path "/js"

   :modules
   {:main ; becomes public/js/main.js
    {:init-fn starter.browser/init}}}}}
```

この設定では、`:target` を `:browser` に設定した `:app` ビルドを定義します。
すべての出力は `public/js` に書き込まれます。
これはプロジェクトのルートからの相対パスです。つまり、`shadow-cljs.edn` の設定があるディレクトリからの相対パスです。

`:modules` は、出力をどのようにまとめるかを定義します。
今のところ、1つのファイルだけが必要です。
`main` モジュールは `public/js/main.js` に書き込まれ、`:entrices` のコードと、それらの依存関係をすべて含みます。

最後の部分は、`http://localhost:8020` を開いたときに読み込まれる実際の `index.html` です。
この index ファイルは、生成された `js/main.js` をロードして、`src/main/start/browser.cljs` で定義された `start.browser.init` を呼び出します。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <title>Browser Starter</title>
</head>
<body>
<h1>shadow-cljs - Browser</h1>
<div id="app"></div>
<noscript>You need to enable JavaScript to run this app.</noscript>
<script src="/js/main.js"></script>
</body>
</html>
```

## ライブリロード

ライブリロードの動作を確認するには、`src/main/start/browser.cljs`を編集します。
ブラウザのコンソールにいくつかの出力が表示されます。

## REPL

開発時には、REPLが非常に便利です。

コマンドラインから`npx shadow-cljs cljs-repl app`を使用します。

```
shadow-cljs - config .../shadow-cljs.edn
shadow-cljs - connected to server
cljs.user=>
```

これで、ブラウザ上でコードを評価することができるようになりました（ブラウザを開いていることが前提です）。
試しに `(js/alert "Hi.")` を実行してみてください。
ここでたくさんの文字を入力するつもりなら、`rlwrap npx shadow-cljs cljs-repl app`を使用するとよいでしょう。

REPLを終了するには、`CTRL+C`か、`:repl/quit`と入力します。

## リリース

最初に始めた `watch` プロセスは、すべて開発のためのものです。
REPLや他のすべての開発ツールに必要なコードを注入しますが、
コードを「プロダクション」（つまり一般に公開すること）に投入する際には、そのようなコードは必要ありません。

`release`アクションは、すべての開発コードを削除し、コードをClosure Compilerに通して、最小化された`main.js`ファイルを生成します。
このファイルは `watch` で作成されたファイルを上書きするため、まず watch プロセスを停止する必要があります。

`CTRL+C`で`watch`プロセスを停止し、代わりに`npx shadow-cljs release app`を実行します。

`http://localhost:8020` を開くと、`release` のビルドが動作しているのを見ることができます。
通常だと、この時点で `public` ディレクトリを プロダクションの Web サーバにコピーします。

デフォルトの設定では、`watch` で作成された `public/js/main.js` を上書きしていることに注意してください。
リリースビルドに使用する別のパスを設定することもできますが、
出力を同じファイルに書き込むことで`index.html` を変更する必要がなくなり、すべてをそのままテストすることができます。
