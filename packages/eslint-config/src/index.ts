import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint, { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import tsParser from '@typescript-eslint/parser'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

const isProd = process.env.NODE_ENV === 'production'

const artCoreEslintConfig: InfiniteDepthConfigWithExtends[] = [
  eslintPluginPrettierRecommended,
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
        node: true,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Rules for production environment
      'no-duplicate-case': isProd ? 2 : 1,
      'no-console': [isProd ? 2 : 1, { allow: ['warn', 'error', 'info'] }],
      'no-debugger': isProd ? 2 : 1,
      '@typescript-eslint/no-unused-vars': [
        isProd ? 2 : 1,
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
      'no-unused-vars': 0,

      // General ESLint rules
      'arrow-body-style': ['error', 'as-needed'],
      'eol-last': 1,
      'max-len': [
        1,
        {
          code: 130,
          comments: 130,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          tabWidth: 2,
        },
      ],
      'no-multiple-empty-lines': 1,
      'no-param-reassign': [2, { props: false }],
      'no-spaced-func': 0,
      'object-curly-newline': [
        1,
        {
          ObjectExpression: { consistent: true, multiline: true },
          ObjectPattern: { consistent: true, multiline: true },
          ExportDeclaration: { multiline: true, minProperties: 3 },
        },
      ],
      'prefer-const': 1,
      'prefer-template': 1,
      'no-nested-ternary': 0,

      // Import-related rules
      'import/newline-after-import': ['error', { count: 1 }],
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/no-cycle': 1,
      'import/no-named-as-default': 1,
      'import/no-unresolved': [2, { ignore: ['\\.png$', '\\?url'], caseSensitive: false }],
      'import/prefer-default-export': 'off',
      'import/order': [
        1,
        {
          'newlines-between': 'always',
          groups: [
            ['builtin', 'external'],
            ['type'],
            ['internal', 'parent', 'sibling', 'index'],
            ['object'],
            ['unknown'],
          ],
          pathGroups: [
            { pattern: '@public/**', group: 'internal', position: 'before' },
            { pattern: '@root/**', group: 'internal', position: 'before' },
            { pattern: '@assets/**', group: 'internal', position: 'before' },
            { pattern: '@common/**', group: 'internal', position: 'before' },
            { pattern: '@modules/**', group: 'internal', position: 'before' },
            { pattern: '@services/**', group: 'internal', position: 'before' },
            { pattern: '@pages/**', group: 'internal', position: 'before' },
            { pattern: '@appTypes/**', group: 'type', position: 'before' },
            { pattern: '@shared/**', group: 'internal', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          warnOnUnassignedImports: true,
          distinctGroup: true,
        },
      ],

      // React-specific rules
      'jsx-a11y/control-has-associated-label': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'react/function-component-definition': 0,
      'react/jsx-props-no-spreading': 0,
      'react/display-name': 0,
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      'react/no-array-index-key': 1,
      'react/no-unused-prop-types': [0, { skipShapeProps: true }],
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/require-default-props': 0,
      'react/self-closing-comp': 1,

      // TypeScript-specific rules
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/naming-convention': 0,
      '@typescript-eslint/no-unnecessary-type-arguments': 0,
      '@typescript-eslint/await-thenable': 2,
      '@typescript-eslint/ban-ts-comment': 2,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/no-duplicate-type-constituents': 2,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-floating-promises': 0,
      '@typescript-eslint/no-misused-promises': [
        2,
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false,
          },
        },
      ],
      '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-redundant-type-constituents': 2,
      '@typescript-eslint/no-unnecessary-type-assertion': 2,
      '@typescript-eslint/no-unsafe-argument': 2,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-call': 2,
      '@typescript-eslint/no-unsafe-enum-comparison': 2,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-unsafe-return': 2,
      '@typescript-eslint/require-await': 0,
      '@typescript-eslint/restrict-template-expressions': 2,
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/unbound-method': 0,
    },
  },
]

export default artCoreEslintConfig
