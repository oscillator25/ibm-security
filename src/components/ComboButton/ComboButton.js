/**
 * @file Combo button.
 * @copyright IBM Security 2019 - 2021
 */

import { ComboButton as CarbonComboButton } from '@carbon/ibm-cloud-cognitive-security/lib/ComboButton';
import merge from 'deepmerge';

import {
  func,
  node,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

import React from 'react';

import { TooltipDirection } from '../IconButton/IconButton';

const ComboButton = ({
  children,
  className,
  direction,
  menuOffset,
  menuOffsetFlip,
  selectorPrimaryFocus,
  ...other
}) => (
  <CarbonComboButton
    overflowMenu={{
      direction,
      menuOffset,
      menuOffsetFlip,
      selectorPrimaryFocus,
    }}
    {...other}
  >
    {children}
  </CarbonComboButton>
);

const { BOTTOM, TOP } = TooltipDirection;

const source = {
  propTypes: {
    children: node.isRequired,
    className: string,
    direction: oneOf([TOP, BOTTOM]),
    menuOffset: oneOfType([
      shape({
        left: oneOf([number, string]),
        top: oneOf([number, string]),
      }),
      func,
    ]),
    menuOffsetFlip: oneOfType([
      shape({
        left: oneOf([number, string]),
        top: oneOf([number, string]),
      }),
      func,
    ]),
    selectorPrimaryFocus: string,
  },
  defaultProps: {
    className: '',
    direction: TOP,
    menuOffset: () => ({
      left: 'auto',
    }),
    menuOffsetFlip: undefined,
    selectorPrimaryFocus: '[data-overflow-menu-primary-focus]',
  },
};

const getDifference = (source, target) =>
  Object.keys(source).reduce(
    (difference, key) =>
      target[key] === source[key]
        ? difference
        : {
            ...difference,
            [key]: source[key],
          },

    {}
  );

const createAdapter = ({ source, target, transformer }) => {
  const toTransform = {
    source: {
      propTypes: getDifference(source.propTypes, target.propTypes),
      defaultProps: getDifference(source.defaultProps, target.defaultProps),
    },
    target: {
      propTypes: getDifference(target.propTypes, source.propTypes),
      defaultProps: getDifference(target.defaultProps, source.defaultProps),
    },
  };

  console.log(toTransform);

  const transform = transformer(toTransform);

  const { propTypes, defaultProps } = transform;

  return {
    propTypes: merge(target.propTypes, propTypes),
    defaultProps: merge(target.defaultProps, defaultProps),
  };
};

const { defaultProps, propTypes } = createAdapter({
  source,
  target: CarbonComboButton,
  transformer: ({ source, target }) => ({
    propTypes: {},
    defaultProps: {
      className: source.defaultProps.className,
      overflowMenu: {
        direction: source.defaultProps.direction,
        menuOffset: source.defaultProps.menuOffset,
      },
    },
  }),
});

ComboButton.propTypes = propTypes;
ComboButton.defaultProps = defaultProps;

export default ComboButton;
