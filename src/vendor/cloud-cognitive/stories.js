/**
 * @file Cloud & Cognitive stories.
 * @copyright IBM Security 2021
 */

import { cloudCognitive } from '../../../.storybook';
import { dependencies } from '../../../package.json';

const { '@carbon/ibm-cloud-cognitive': version } = dependencies;

export const CLOUD_COGNITIVE = 'Cloud & Cognitive';

export default () => cloudCognitive(version);
