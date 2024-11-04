/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-concentric-order'],
  rules: {
    'declaration-no-important': true,
  },
};
