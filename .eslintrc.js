module.exports = {
    root: true,

    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },

    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },

    settings: {
        react: {
            version: "detect"
        }
    },

    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
        "plugin:prettier/recommended"
    ],

    plugins: [
        "react",
        "react-hooks",
        "jsx-a11y",
        "import",
        "prettier"
    ],

    rules: {
        "prettier/prettier": "error",

        "react/react-in-jsx-scope": "off",

        "react/prop-types": "off",

        "no-console": "warn",

        "no-debugger": "error",

        "no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_"
            }
        ],

        "import/no-unresolved": "off",

        "react/jsx-uses-react": "off"
    }
};