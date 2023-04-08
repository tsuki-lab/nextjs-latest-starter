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

## Building environment

### 1. Install nodenv

Skip this step if `nodenv` is already installed or if you are already using another version management tool.

If you haven't already installed [Homebrew](https://brew.sh/), please install it first.

First, install [nodenv](https://github.com/nodenv/nodenv).

```shell
brew install nodenv
```

Write the following line depending on the shell you are using.

If you are using `bash`

```shell
# ~/.bashrc

eval "$(nodenv init -)"
```

If you are using `zsh`

```shell
# ~/.zshrc

eval "$(nodenv init -)"
```

If you have set up to this point, close and reopen the terminal.

Check if `nodenv` is configured correctly. If the result is as follows, it's OK.

```shell
curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash
# Checking for `nodenv' in PATH: /usr/local/bin/nodenv
# Checking for nodenv shims in PATH: OK
# Checking `nodenv install' support: /usr/local/bin/nodenv-install (node-build 4.9.43)
# Counting installed Node versions: 1 versions
# Auditing installed plugins: OK
```

### 2. Install Node.js

Use `nodenv` you installed earlier to install `Node.js`.

```sh
nodenv install
```

After running this command, run the following command.

```sh
node --version
```

If the version is displayed correctly, the installation of Node.js is complete.

### 3. Install yarn

Skip this step if yarn is already installed.

Install yarn to install packages.

```shell
brew install yarn
```

After running this command, run the following command.

```shell
yarn -v
# 1.22.17

which yarn
# /opt/homebrew/bin/yarn
```

If the result is displayed correctly, the installation of yarn is complete.

### 4. Install packages

Install environment-dependent information necessary for startup.

```shell
yarn install
```

If this command is completed and the folder called node_modules is created, the installation is complete.

### 5. Launch development environment

Launch the local server.

```shell
yarn dev
```

If localhost:3000 is up, the setup is complete.

## Styles

### Reset CSS

Installed [ress](https://github.com/filipelinhares/)

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
