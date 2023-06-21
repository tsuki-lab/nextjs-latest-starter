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

## Styles

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
