module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [],
  "parser": "vue-eslint-parser",
  rules: {
    'no-console': 'off',
    "no-unused-vars":"off", //重要 var 变量为引入
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    // 'vue/max-attributes-per-line': [
    //   2,
    //   {
    //     'singleline': 5,
    //     'multiline': {
    //       'max': 1,
    //       'allowFirstLine': false
    //     }
    //   }
    // ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'no-tabs': 0,
    'quotes': 0,
    'semi': 0,
    'no-delete-var': 2,
    'prefer-const': 0,
    'template-curly-spacing': 'off',
    //'indent': 'off',
    'indent': ["off", 2]
  },
  parserOptions: {
    ecmaVersion: 7,
    "sourceType": "module"
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
