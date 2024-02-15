module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:storybook/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'/*, 'prettier' */],
    rules: {
        // 'prettier/prettier': [
        //     'error',
        //     {
        //         printWidth: 90,
        //         tabWidth: 4,
        //         singleQuote: true,
        //         trailingComma: 'all',
        //         arrowParens: 'always',
        //         useTabs: false,
        //         semi: true,
        //         endOfLine: 'lf',
        //         proseWrap: 'always',
        //     },
        // ],
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-multiple-empty-lines': ['error', { max: 3, maxEOF: 1, maxBOF: 0 }],
    },
};
