/**
 * @file Combo button.
 * @copyright IBM Security 2019 - 2021
 */

import { ComboButton as CarbonComboButton } from '@carbon/ibm-cloud-cognitive-security/lib/ComboButton';
import React from 'react';

const ComboButton = ({
  children,
  className,
  direction,
  menuOffset,
  menuOffsetFlip,
  selectorPrimaryFocus,
  ...other
}) => {
  return (
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
};

const { defaultProps, propTypes } = CarbonComboButton;

ComboButton.propTypes = propTypes;
ComboButton.defaultProps = defaultProps;

export default ComboButton;
