/**
 * @file Adapter.
 * @copyright IBM Security 2021
 */

import merge from 'deepmerge';

export default ({ source, target, transformer }) => {
  console.log({ source, target });

  const transform = transformer();

  const map = (source, target) => {
    const props = {};

    Object.entries(source).forEach(([prop, value]) => {
      if (Object.hasOwnProperty.call(target, value)) {
        props[prop] =
          typeof value === 'string' ? target[value] : map(value, target);
      }
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
