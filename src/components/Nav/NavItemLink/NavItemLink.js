/**
 * @file Nav item link.
 * @copyright IBM Security 2019 - 2020
 */

import { Launch16 } from '@carbon/icons-react';
import classnames from 'classnames';
import { bool, elementType, node, string } from 'prop-types';
import React, { cloneElement, createElement, forwardRef } from 'react';

import { getComponentNamespace } from '../../../globals/namespace';

import Icon from '../../Icon';

const namespace = getComponentNamespace('nav__list__item__link');

const NavItemLink = forwardRef((props, ref) => {
  const { children, className, element, external, id, ...other } = props;

  const { type } = children;
  const elementProps = !type ? { className, id } : {};

  const content = (
    <>
      {createElement(
        element,
        { ref, ...elementProps, ...other },
        type ? cloneElement(children, { className }) : children
      )}
      {external && (
        <Icon
          className={`${namespace}--external__icon`}
          renderIcon={Launch16}
        />
      )}
    </>
  );

  return external ? (
    <div className={classnames({ [`${namespace}__container`]: external })}>
      {content}
    </div>
  ) : (
    content
  );
});

NavItemLink.displayName = 'NavItemLink';

NavItemLink.propTypes = {
  /** Specify the content of the `NavItemLink` */
  children: node,

  /** Specify the base element to use to build the link - this defaults to `a`, but can also accept alternative tag names or custom components like `Link` from `react-router-dom`. */
  element: elementType,

  /** Specify the ID of the `NavItemLink` */
  id: string,

  /** Specify whether the link is external or not */
  external: bool,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

NavItemLink.defaultProps = {
  children: null,
  element: 'a',
  id: null,
  external: false,
  className: null,
};

export default NavItemLink;
