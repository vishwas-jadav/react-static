module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      'version': 'detect'
    },
    'import/resolver': {
      'node': {
        'extensions': ['.ts', '.tsx']
      }
    }
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript/base',
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': [
      'error', 
      {
        'devDependencies': true
      }
    ],
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        'extendDefaults': true,
        'types': {
          '{}': false
        }
      }
    ]
  },
};
