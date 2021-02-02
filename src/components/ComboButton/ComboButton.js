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

  const transform = transformer();

  const map = (source, target) => {
    const props = {};

    Object.entries(source).forEach(([prop, value]) => {
      props[prop] =
        typeof value === 'string' ? target[value] : map(value, target);
    });

    return props;
  };

  return {
    adapt: props => map(transform, props),
    propTypes: merge(target.propTypes, map(transform, source.propTypes)),
    defaultProps: merge(
      target.defaultProps,
      map(transform, source.defaultProps)
    ),
  };
};

const { adapt, defaultProps, propTypes } = createAdapter({
  source,
  target: CarbonComboButton,
  transformer: () => ({
    children: 'children',
    className: 'className',
    overflowMenu: {
      direction: 'direction',
      menuOffset: 'menuOffset',
      menuOffsetFlip: 'menuOffsetFlip',
      selectorPrimaryFocus: 'selectorPrimaryFocus',
    },
  }),
});

const ComboButton = props => <CarbonComboButton {...adapt(props)} />;

ComboButton.propTypes = propTypes;
ComboButton.defaultProps = defaultProps;

console.log(ComboButton.defaultProps);

export default ComboButton;
