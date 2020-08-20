/**
 * @file Themes.
 * @copyright IBM Security 2019 - 2020
 */

import { formatTokenName, g100 } from '@carbon/themes';
import settings from '../settings';

const theme = {};

// Rewrites the theme using CSS custom properties.
Object.keys(g100).forEach(token => {
  theme[token] = `var(--${settings.cssCustomPropertyPrefix ||
    ''}${formatTokenName(token)}, ${g100[token]})`;
});

export default theme;
