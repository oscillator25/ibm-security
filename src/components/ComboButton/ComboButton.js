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

const createAdapter = ({ source, target, transformer }) => {
  console.log({ source, target });

  const { propTypes, defaultProps } = transformer(source);

  return {
    adapt: props => {
      console.log(props);
    },
    propTypes: merge(target.propTypes, propTypes),
    defaultProps: merge(target.defaultProps, defaultProps),
  };
};

const adapter = createAdapter({
  source,
  target: CarbonComboButton,
  transformer: ({ defaultProps, propTypes }) => ({
    propTypes: {
      children: propTypes.children,
      className: propTypes.className,
      overflowMenu: {
        direction: propTypes.direction,
        menuOffset: propTypes.menuOffset,
        menuOffsetFlip: propTypes.menuOffsetFlip,
        selectorPrimaryFocus: propTypes.selectorPrimaryFocus,
      },
    },
    defaultProps: {
      className: defaultProps.className,
      overflowMenu: {
        direction: defaultProps.direction,
        menuOffset: defaultProps.menuOffset,
        menuOffsetFlip: defaultProps.menuOffsetFlip,
        selectorPrimaryFocus: defaultProps.selectorPrimaryFocus,
      },
    },
  }),
});

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

const { defaultProps, propTypes } = adapter;

ComboButton.propTypes = propTypes;
ComboButton.defaultProps = defaultProps;

export default ComboButton;
