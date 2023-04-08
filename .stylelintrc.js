module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'function-url-quotes': 'always',
    'selector-class-pattern': null,
    'scss/at-mixin-pattern': null,
  },
};
