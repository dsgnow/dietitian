module.exports = {
  plugins: ['html'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {}
};
