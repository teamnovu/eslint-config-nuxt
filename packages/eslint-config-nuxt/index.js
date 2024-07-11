require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:vuejs-accessibility/recommended',
  ],

  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'no-console': 'off',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'prefer-destructuring': ['error', { array: false, object: true }],
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/require-default-prop': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: false,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2,
      },
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: true,
        ignoreStringEscape: true,
      },
    ],
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/no-empty-component-block': ['error'],
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        required: {
          some: ['id', 'nesting'],
        },
      },
    ],
    // 'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/html-button-has-type': 'error',
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/block-tag-newline': 'error',
    'vue/max-lines-per-block': ['warn', { template: 300 }],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
  },
}
