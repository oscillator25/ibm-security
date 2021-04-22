/**
 * @file Cloud & Cognitive stories.
 * @copyright IBM Security 2021
 */

import React from 'react';

import { cloudCognitive } from '../../../.storybook';
import { dependencies } from '../../../package.json';

import { Link, ListItem, UnorderedList, CloudCognitive } from '../..';

const { '@carbon/ibm-cloud-cognitive': version } = dependencies;

const {
  pkg: { component },
} = CloudCognitive;

const CLOUD_COGNITIVE = 'Cloud & Cognitive';

const ComponentsList = () => (
  <>
    <h3 className="storybook__version">v{version}</h3>

    <UnorderedList>
      {Object.keys(component)
        .filter(key => component[key])
        .map(component => (
          <ListItem key={`li__${component}`}>
            <Link
              href={`https://ibm-cloud-cognitive.netlify.app/?path=/story/cloud-cognitive-released-${component}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {component}
            </Link>
          </ListItem>
        ))}
    </UnorderedList>
  </>
);

export default title => cloudCognitive(title);
export { CLOUD_COGNITIVE, ComponentsList };
