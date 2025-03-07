module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "vue/no-v-html": "off",
    "vue/html-self-closing": "off",
    "nuxt/no-timing-in-fetch-data": "off",
    "prettier/prettier": [
      'warn',  // alternativly change to 'warn' if you want only warning 
      {
        endOfLine: 'auto',
        // ... put other prettier rules here like "semi":flase,
      },
    ],
  },
  
}
