import js from '@eslint/js'
import pluginStylistic from '@stylistic/eslint-plugin'
import pluginTailwind from 'eslint-plugin-readable-tailwind'
import tailwind from 'eslint-plugin-tailwindcss'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin'
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'

export default [
  js.configs.recommended,
  ...tailwind.configs['flat/recommended'],
  ...pluginVue.configs['flat/recommended'],
  ...pluginVueA11y.configs['flat/recommended'],
  pluginStylistic.configs['recommended-flat'],
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    ignores: ['**/dist/', '**/node_modules/'],
    plugins: {
      'readable-tailwind': pluginTailwind,
      '@typescript-eslint': eslintPluginTypeScript,
    },
    rules: {
      ...pluginTailwind.configs.warning.rules,
      ...pluginTailwind.configs.error.rules,
      'readable-tailwind/multiline': [
        'warn',
        {
          group: 'newLine',
          preferSingleLine: true,
          printWidth: 110,
        },
      ],
    },
  },
  {
    ignores: ['**/dist/', '**/node_modules/'],
    rules: {
      // stylistic
      // ********************
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      '@stylistic/nonblock-statement-body-position': 'error',
      '@stylistic/one-var-declaration-per-line': 'error',
      '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/no-mixed-operators': ['error', { allowSamePrecedence: true }],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/array-bracket-newline': ['error', { multiline: true }],
      '@stylistic/array-element-newline': [
        'error',
        {
          multiline: true,
          consistent: true,
        },
      ],
      '@stylistic/object-curly-newline': [
        'error',
        {
          multiline: true,
          consistent: true,
        },
      ],
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
      '@stylistic/max-len': [
        'warn',
        {
          code: 110,
          tabWidth: 2,
        },
      ],

      // common
      // ********************
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prefer-destructuring': [
        'error',
        {
          array: false,
          object: true,
        },
      ],
      'no-unused-vars': ['error', { args: 'none' }],
      'eqeqeq': ['error', 'smart'],
      'no-undef': 'off', // done by typescript
      '@typescript-eslint/no-explicit-any': 'warn',

      // tailwind
      // ********************
      'tailwindcss/classnames-order': 'off',

      // vue
      // ********************
      'vue/no-v-html': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/require-default-prop': 'off',
      'vue/max-attributes-per-line': ['error', { singleline: 3 }],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/v-on-event-hyphenation': ['error', 'always', { autofix: false }],
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
      'vue/new-line-between-multi-line-property': ['error', { minLineOfMultilineProperty: 2 }],
      'vue/no-useless-v-bind': [
        'error',
        {
          ignoreIncludesComment: true,
          ignoreStringEscape: true,
        },
      ],
      'vue/v-for-delimiter-style': ['error', 'in'],
      'vue/no-empty-component-block': ['error'],
      'vuejs-accessibility/label-has-for': ['error', { required: { some: ['id', 'nesting'] } }],
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      'vue/html-button-has-type': 'error',
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/block-tag-newline': 'error',
      'vue/max-lines-per-block': ['warn', { template: 300 }],
      'vue/brace-style': ['error', '1tbs'],
      'vue/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          generics: 'always-multiline',
        },
      ],
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'beside',
          multiline: 'below',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]
