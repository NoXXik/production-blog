module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
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
    },
    globals: {
        __IS_DEV__: true,
    },
};
