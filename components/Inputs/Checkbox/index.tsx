import React, { ReactNode, useState } from 'react';
import { Check } from 'react-feather';

import { theme } from '@utils';

import { Text } from '@components/DataDisplay';
import { Container, Spacer } from '@components/Layouts';

import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledCheckboxWrapper,
  StyledCheckboxProps,
} from './style';

interface CheckboxProps extends Partial<StyledCheckboxProps> {
  checked?: boolean;
  icon?: ReactNode;
  label?: string;
  labelLocation?: 'left' | 'right' | 'top' | 'bottom';
}

const Checkbox = ({
  strokeWidth = 6,
  disabled = false,
  checked = false,
  icon = <Check />,
  label,
  labelLocation = 'right',
}: CheckboxProps): JSX.Element => {
  const [isChecked, setChecked] = useState(checked);

  return (
    <Container
      align="center"
      row={labelLocation === 'left' || labelLocation === 'right'}
      reverse={labelLocation === 'left' || labelLocation === 'top'}
      gap={0}
    >
      <StyledCheckboxContainer>
        <StyledCheckboxWrapper>
          <StyledCheckbox
            variant={isChecked ? 'checked' : 'unchecked'}
            disabled={disabled}
            strokeWidth={strokeWidth}
            onClick={(): void => setChecked(disabled ? isChecked : !isChecked)}
          >
            {icon}
          </StyledCheckbox>
        </StyledCheckboxWrapper>
        {label && (
          <>
            <Spacer size={1} />
            <Text
              variant="small"
              color={disabled ? theme.cvar('colorCheckboxDisabled') : undefined}
            >
              {label}
            </Text>
          </>
        )}
      </StyledCheckboxContainer>
    </Container>
  );
};

export default Checkbox;
