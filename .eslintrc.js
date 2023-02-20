module.exports = {
  extends: ['@moralisweb3', 'plugin:@next/next/recommended'],
  ignorePatterns: ['**/build/**/*'],
  rules: {
    'no-console': 'off',
     'no-mixed-spaces-and-tabs': 0, // disable rule
     'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'no-unused-vars': 'off'
  },
};