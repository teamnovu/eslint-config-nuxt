require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {

    extends: ['eslint-config-airbnb-base', 'plugin:tailwindcss/recommended'],

    root: true,
    ignorePatterns: ['dist/', 'node_modules/', '*.json', '.temp/'],

    env: {
        browser: true,
    },

    settings: {
        'import/resolver': {
            typescript: {},
            alias: {
                map: [
                    ['@', './src'],
                    ['@images', './src/assets/images'],
                ],
            },
        },
    },


    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },


    rules: {

        'func-names': 'off',
        'no-console': 'warn',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-unreachable': 'warn',
        'no-unused-vars': 'warn',
        'import/extensions': [
            'warn', { ts: 'never' },
        ],
        'import/no-extraneous-dependencies': [
            'warn', { devDependencies: true },
        ],

        'no-mixed-operators': [
          'error', { allowSamePrecedence: true },
        ],
        'prefer-destructuring': ['error', { 'array': false, 'object': true }]

        'tailwindcss/no-custom-classname': 'off',
    },

    overrides: [
        // vue
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: {
                    js: 'espree',
                    ts: '@typescript-eslint/parser',
                    '<template>': 'espree',
                },
            },

            extends: ['@vue/airbnb', 'plugin:vue/vue3-recommended'],
            rules: {

                'vue/max-attributes-per-line': ['error', { singleline: 3 }],
                'vue/multiline-html-element-content-newline': [
                    'error',
                    {
                        allowEmptyLines: true,
                    },
                ],
                'vuejs-accessibility/label-has-for': 'off',
                'vuejs-accessibility/click-events-have-key-events': 'off',
                'vuejs-accessibility': 'off',
                'vuejs-accessibility/alt-text': 'warn',
                'vue/no-v-html': 'off',
                'vue/require-default-prop': 'off',
                'vue/multi-word-component-names': 'off',
                'vue/no-unused-components': 'warn',
                'vue/component-name-in-template-casing': ['error', 'PascalCase'],
            },
        },

    ],

};
