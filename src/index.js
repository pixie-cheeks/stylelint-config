const genericOnlyClassRule = [
  0,
  { message: 'BEM: Only use a single class to avoid specificity issues' },
];

const BEM_NAMES = '[a-z][a-z0-9]*(-[a-z0-9]+)*';
const blockName = `${BEM_NAMES}`;
const elementName = `__${BEM_NAMES}`;
const modifierName = `--${BEM_NAMES}`;
const modifierValue = `--${BEM_NAMES}`;
const classPattern = `^${blockName}(${elementName})?(${modifierName})?(${modifierValue})?$`;

/** @type {import('stylelint').Config} */
export default {
  extends: ['./base.js'],
  rules: {
    'selector-class-pattern': [
      classPattern,
      {
        message: (selector) =>
          `Selector class ${selector} violates BEM Convention`,
        resolveNestedSelectors: true,
      },
    ],
    'selector-max-combinators': [
      0,
      {
        message: 'BEM: Combinators increase specificity',
      },
    ],
    'selector-max-class': [
      1,
      { message: 'BEM: Use a single class for flat specificity' },
    ],
    'selector-max-attribute': genericOnlyClassRule,
    'selector-max-id': genericOnlyClassRule,
    'selector-max-type': genericOnlyClassRule,
    'selector-max-universal': genericOnlyClassRule,
  },
};
