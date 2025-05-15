const camelCase = '[a-z]+([A-Z][a-z]+)*';
const blockName = camelCase;
const elementName = camelCase;
const modifierName = camelCase;
const modifierValue = camelCase;
const separator = '_';
const classPattern =
  `^${blockName}(${separator}${elementName})?` +
  `(${separator}${modifierName})?(${separator}${modifierValue})?$`;

/** @type {import('stylelint').Config} */
export default {
  rules: {
    'selector-class-pattern': [
      classPattern,
      {
        message: (selector) => `Selector class ${selector} isn't in camelCase`,
        resolveNestedSelectors: true,
      },
    ],
    'value-keyword-case': ['lower', { ignoreProperties: [/^composes$/] }],
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
