import React, { ReactNode, useState } from 'react';
import { Check } from 'react-feather';

import { StyledCheckbox, StyledCheckboxProps } from './style';

interface CheckboxProps extends Partial<StyledCheckboxProps> {
  checked?: boolean;
  icon?: ReactNode;
}

export default ({
  checked = false,
  disabled = false,
  icon = <Check />,
  strokeWidth = 6,
}: CheckboxProps): JSX.Element => {
  const [isChecked, setChecked] = useState(checked);

  return (
    <StyledCheckbox
      variant={isChecked ? 'checked' : 'unchecked'}
      disabled={disabled}
      strokeWidth={strokeWidth}
      onClick={(): void => setChecked(disabled ? isChecked : !isChecked)}
    >
      {icon}
    </StyledCheckbox>
  );
};
