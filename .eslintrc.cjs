module.exports = {
    root: true,
    env: {
        node: true,
        es2023: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname
    },
    overrides: [
        {
            extends: [
                "plugin:@typescript-eslint/disable-type-checked",
                "plugin:jest/recommended"
            ],
            plugins: ["jest"],
            files: ["./**/*.js", "./**/*.ts", "./**/*.tsx", "tests/**/*"]
        }
    ],
    ignorePatterns: [
        "dist",
        ".eslintrc.cjs",
        "iac/",
        ".github/"
    ],
    parser: "@typescript-eslint/parser",
    rules: {
        "@typescript-eslint/no-explicit-any": "warn",
    }
};