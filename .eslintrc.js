// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: [

    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-preventionhttps://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-preventionhttps://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-preventionhttps://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-preventionhttps://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-preventionhttps://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-preventionhttps://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-preventionhttps://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-preventionhttps://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',

    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
  ],
  // Required to lint *.vue files
  plugins: [
    'vue',
  ],
  // Add your custom rules here
  rules: {
    // Allow async-await
    'generator-star-spacing': 'off',
    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['error', {
      code: 150,
    }, ],
    'comma-dangle': ['error', 'always'],
  },
}