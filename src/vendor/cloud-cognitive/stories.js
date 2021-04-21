/**
 * @file Cloud & Cognitive stories.
 * @copyright IBM Security 2021
 */

import React from 'react';

import { cloudCognitive } from '../../../.storybook';
import { dependencies } from '../../../package.json';

import { CloudCognitive } from '../..';

const { '@carbon/ibm-cloud-cognitive': version } = dependencies;

const {
  pkg: { component },
} = CloudCognitive;

const CLOUD_COGNITIVE = 'Cloud & Cognitive';
const Components = () => (
  <ul>
    {Object.keys(component)
      .filter(key => component[key])
      .map(component => (
        <li key={`li__${component}`}>{component}</li>
      ))}
  </ul>
);

export default () => cloudCognitive(version);

export { CLOUD_COGNITIVE, Components };
