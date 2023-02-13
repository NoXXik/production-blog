module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }],
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'max-len': ['error', { ignoreComments: true, code: 100 }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
