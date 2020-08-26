/**
 * @file Nav item link.
 * @copyright IBM Security 2019 - 2020
 */

import { elementType, node, object, oneOfType, string } from 'prop-types';
import { cloneElement, createElement, forwardRef } from 'react';

const NavItemLink = forwardRef((props, ref) => {
  const { children, className, element, href, id, ...other } = props;
  const isChildLink = children.type === 'a';

  const childProps = {
    className,
    id,
  };

  return createElement(
    element,
    { href, ref, ...(!isChildLink && childProps), ...other },
    isChildLink ? cloneElement(children, childProps) : children
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

  /** Specify the URL of the link */
  href: oneOfType([object, string]),

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

NavItemLink.defaultProps = {
  children: null,
  element: 'a',
  id: null,
  href: null,
  className: null,
};

export default NavItemLink;
