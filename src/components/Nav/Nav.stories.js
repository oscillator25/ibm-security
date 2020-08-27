/**
 * @file Navigation stories.
 * @copyright IBM Security 2019 - 2020
 */

import { storiesOf } from '@storybook/react';

// https://nextjs.org/docs/api-reference/next/link
import NextLink from 'next/link';
import React from 'react';

import { components } from '../../../.storybook';
import { Nav, NavItem, NavList } from '../..';

storiesOf(components('Nav'), module).add(
  'default',
  () => (
    <div style={{ width: '300px' }}>
      <Nav heading="Nav example" label="Nav">
        <NavList title="Nav list 1">
          <NavItem key="navitem_1-1" element="span">
            Nav item 1-1 (with a custom element)
          </NavItem>
          <NavItem
            key="navitem_1-2"
            element={NextLink}
            href={{ pathname: '/navitem', query: { name: '1-2' } }}
            passHref
          >
            <a href="#navitem_1-2">Nav item 1-2 (with a custom link)</a>
          </NavItem>
        </NavList>
        <NavList title="Nav list 2 expanded on page load" isExpandedOnPageload>
          <NavItem key="navitem_2-1" href="#navitem_2-1">
            Nav item 2-1
          </NavItem>
          <NavItem key="navitem_2-2" href="#navitem_2-2">
            Nav item 2-2
          </NavItem>
        </NavList>
        <NavList title="Nav list 3">
          <NavItem key="navitem_3-1" href="#navitem_3-1">
            Nav item 3-1
          </NavItem>
          <NavItem key="navitem_3-2" href="https://www.ibm.com/">
            Nav item that is an external link and wraps to a new line
          </NavItem>
        </NavList>
      </Nav>
    </div>
  ),
  {
    info: {
      text: 'Basic implementation of a Nav component',
    },
  }
);
