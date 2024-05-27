module.exports = {
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "next/core-web-vitals",
        "eslint-config-next",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "tsconfigRootDir": __dirname,
        "sourceType": "module",
    },
    "ignorePatterns": [
        ".eslintrc.js",
        "eslint.config.js"
    ],
    "plugins": [
        "@typescript-eslint/eslint-plugin",
        "simple-import-sort"
    ],
    "root": true,
    "rules": {
        "prettier/prettier": [
            "warn",
            {
                "tabWidth": 4,
                "indentSize": 4,
                "parser": "typescript",
                "singleQuote": true,
            },
        ],
        "no-html-link-for-pages": "off",
        "no-multi-spaces": [
            "warn"
        ],
        "react-hooks/exhaustive-deps": "off",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "ignoredNodes": [
                    "PropertyDefinition"
                ]
            }
        ],
        "max-lines": [
            "warn",
            350
        ],
        "@typescript-eslint/semi": [
            "off"
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "types": [
                    "boolean"
                ],
                "format": [
                    "PascalCase"
                ],
                "prefix": [
                    "is",
                    "are",
                    "should",
                    "has",
                    "can",
                    "did",
                    "will"
                ]
            }
        ],
        "@typescript-eslint/padding-line-between-statements": [
            "warn",
            {
                "blankLine": "always",
                "prev": [
                    "interface",
                    "block-like",
                    "function",
                    "return",
                    "type"
                ],
                "next": "*"
            },
            {
                "blankLine": "always",
                "prev": "*",
                "next": [
                    "interface",
                    "block-like",
                    "function",
                    "return",
                    "type"
                ]
            }
        ],
        "simple-import-sort/imports": "error",
        "no-trailing-spaces": "warn",
        "newline-before-return": "warn",
        "eol-last": "warn",
        "react/jsx-sort-props": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "import/no-anonymous-default-export": "off",
        "padding-line-between-statements": [
            "warn",
            {
                "blankLine": "always",
                "prev": [
                    "const",
                    "let",
                    "var"
                ],
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": [
                    "const",
                    "let",
                    "var"
                ],
                "next": [
                    "const",
                    "let",
                    "var"
                ]
            },
            {
                "blankLine": "always",
                "prev": [
                    "case",
                    "default"
                ],
                "next": "*"
            }
        ]
    }
}