# Next.js latest starter

🇯🇵 [日本語](./README.md)

This is a starter repository with Linter and Formatter set up for a Next.js v13 + CSS Modules environment.

## Dependencies

Please refer to [package.json](./package.json) for details.

## Usage

You can create an environment with the contents of this repository using the following command.<br />
By default, LICENSE and README.md are included, so if you don't need them, please delete them.

```shell
yarn create next-app -e https://github.com/tsuki-lab/nextjs-latest-starter
```

## Styles

### Global

Using `globalStyle` from [global.scss](./src/styles/global.scss).

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

Using [media-query.scss](./src/styles/media-query.scss).

Usage.

```scss
@use 'media-query';

@include media-query.sp {
  // ...
}
```

## License

MIT
