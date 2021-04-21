# Type

Type-related code now directly references underlying Carbon modules to provide consistency in accessing common functions, mixins, variables, and more.

Also refer to [usage in Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/type#usage).

## Imports

| `1.x`                                                     | `2.x`                                                             |
| --------------------------------------------------------- | ----------------------------------------------------------------- |
| `@import '@carbon/ibm-security/scss/globals/type/index';` | - `@import '@carbon/type/scss/type';`                             |
|                                                           | - `@import 'carbon-components/scss/globals/scss/css--font-face';` |