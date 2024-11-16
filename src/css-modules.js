const blockName = `[a-z]+`;
const elementName = `[A-Z][a-z]+`;
const modifierName = `[A-Z][a-z]+`;
const modifierValue = `[A-Z][a-z]+`;
const classPattern = `^${blockName}(${elementName})?(${modifierName})?(${modifierValue})?$`;

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-css-modules'],
  rules: {
    'selector-class-pattern': [
      classPattern,
      {
        message: (selector) => `Selector class ${selector} isn't in camelCase`,
        resolveNestedSelectors: true,
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'export',
          'import',
          'global',
          'local',
          'external',
        ],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['from'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', /^:import/],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['global'],
      },
    ],
  },
};
