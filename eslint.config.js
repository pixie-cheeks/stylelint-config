import pixie from '@pixie-cheeks/eslint-config';

export default [
  ...pixie.base,
  {
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  pixie.prettier,
];
