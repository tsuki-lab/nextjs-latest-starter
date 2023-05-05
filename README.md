# Next.js latest starter

🇺🇸 [English](./README_EN.md)

Next.js v13 + CSS Modules 環境で Linter や Formatter の構築が完了しているスターターリポジトリです。

## Dependencies

詳しくは、[package.json](./package.json)を参照してください。

## Usage

下記のコマンドを用いることで、このリポジトリの内容で環境を作成することができます。<br />
利用する際に、デフォルトで LICENSE や README.md が含まれているので、不要な場合は削除してください。

```shell
yarn create next-app -e https://github.com/tsuki-lab/nextjs-latest-starter
```

## Building environment

### 1. nodenv のインストール

※ `nodenv`が既にインストールされている場合や、他のバージョン管理ツールを既に利用している場合は読み飛ばしてください。

[Homebrew](https://brew.sh/)をインストールしていない場合は、先に Homebrew をインストールしてください。

まず、[nodenv](https://github.com/nodenv/nodenv) をインストールします。

```shell
brew install nodenv
```

利用しているシェルに応じて、次の 1 行を書き込みます。

`bash`を利用している場合

```shell
# ~/.bashrc
eval "$(nodenv init -)"
```

`zsh`を利用している場合

```shell
# ~/.zshrc
eval "$(nodenv init -)"
```

ここまで設定できればターミナルを閉じて、再度開きます。

`nodenv`の設定が完了しているかどうかを確認します。以下のような結果になれば OK です。

```shell
curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash
# Checking for `nodenv' in PATH: /usr/local/bin/nodenv
# Checking for nodenv shims in PATH: OK
# Checking `nodenv install' support: /usr/local/bin/nodenv-install (node-build 4.9.43)
# Counting installed Node versions: 1 versions
# Auditing installed plugins: OK
```

### 2. Node.js のインストール

`Node.js`のインストールには、先程インストールした`nodenv`を利用します。

```sh
nodenv install
```

このコマンドの実行が完了したら、下記のコマンドを実行してください。

```sh
node --version
```

適切にバージョンが表示されれば `Node.js`のインストールは完了です。

### 3. yarn のインストール

※ `yarn`が既にインストールされている場合は読み飛ばしてください。

パッケージをインストールするために`yarn`をインストールします。

```shell
brew install yarn
```

このコマンドの実行が完了したら、下記のコマンドを実行してください。

```shell
yarn -v
# 1.22.17

which yarn
# /opt/homebrew/bin/yarn
```

適切に表示されれば`yarn`のインストールは完了です。

### 4. package のインストール

起動に必要な環境依存情報をインストールします。

```shell
yarn install
```

このコマンドの実行が完了して、`node_modules`というフォルダが作成されたら完了です。

### 5. 開発環境立ち上げ

ローカルサーバーを起動します。

```shell
yarn dev
```

[`localhost:3000`](http://localhost:3000)が立ち上がれば完了です。

## Styles

### Reset CSS

Installed [ress](https://github.com/filipelinhares/ress).

### Global

Setting to `globalStyle` from [global.scss](./src/styles/global.scss).

```css
html {
  --color-primary: #3a4452;
  --color-secondary: #bfcbdc;
  --color-base: #f6f7f8;
  --color-accent: #d35692;
  --color-white: #fdfdfd;
  --color-black: #1f1f1f;
}

body {
  background-color: var(--color-white);
  color: var(--color-black);
}

a {
  color: var(--color-secondary);

  &:hover,
  &:focus,
  &:active {
    color: var(--color-accent);
    text-decoration: underline;
  }
}
```

### Media Query

Setting to [media-query.scss](./src/styles/media-query.scss).

Usage.

```scss
@use 'media-query';

@include media-query.sp {
  // ...
}
```

## License

MIT
