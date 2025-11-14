import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'build', '.vite'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // Airbnb Style Rules
      // Variables
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      
      // Best Practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-alert': 'warn',
      'eqeqeq': ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-return-await': 'error',
      'require-await': 'error',
      
      // TypeScript Specific
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      }],
      
      // Code Style (enforces if statements over ternaries)
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'max-len': ['warn', { 
        code: 120,
        tabWidth: 4,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }],
      
      // React Specific
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // Import Organization
      'sort-imports': ['error', {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      }],
      
      // Naming Conventions
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      
      // Complexity
      'complexity': ['warn', 10],
      'max-depth': ['warn', 4],
      'max-lines-per-function': ['warn', {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      }],
    },
  },
)
