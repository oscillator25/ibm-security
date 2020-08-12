/**
 * @file Nav item link.
 * @copyright IBM Security 2019 - 2020
 */

import { Launch16 } from '@carbon/icons-react';
import classnames from 'classnames';
import { elementType, node, string } from 'prop-types';
import React, { cloneElement, createElement, forwardRef } from 'react';

import { getComponentNamespace } from '../../../globals/namespace';

import Icon from '../../Icon';

const namespace = getComponentNamespace('nav__list__item__link');

const NavItemLink = forwardRef((props, ref) => {
  const { children, className, element, href, id, ...other } = props;

  const isExternalLink = /^https?:\/\//.test(href);

  const childProps = {
    className: classnames(className, {
      [`${namespace}--external`]: isExternalLink,
    }),
    id,
    ...(isExternalLink && {
      rel: 'noopener noreferrer',
      target: '_blank',
    }),
  };

  const { type } = children;
  const parentProps = { ...(!type && childProps) };

  const content = (
    <>
      {createElement(
        element,
        { href, ref, ...parentProps, ...other },
        type ? cloneElement(children, childProps) : children
      )}
      {isExternalLink && (
        <Icon
          className={`${namespace}--external__icon`}
          renderIcon={Launch16}
        />
      )}
    </>
  );

  return isExternalLink ? (
    <div
      className={classnames({ [`${namespace}__container`]: isExternalLink })}
    >
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

  /** Specify the URL of the link */
  href: string,

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
