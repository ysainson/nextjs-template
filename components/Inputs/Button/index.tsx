import React, { ReactNode } from 'react';

import { Text } from '@components/DataDisplay';
import { Container } from '@components/Layouts';

import { StyledButton, StyledButtonProps, ButtonVariant } from './style';

interface ButtonProps extends Partial<Omit<StyledButtonProps, 'variant'>> {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  onClick?: () => void;
}

export default ({
  children,
  variant = 'primary',
  size = 'medium',
  thickness = 'medium',
  disabled = false,
  gap = 3,
  onClick = (): void => {},
}: ButtonProps): JSX.Element => {
  return (
    <Container gap={gap}>
      <StyledButton
        variant={disabled ? 'disabled' : variant}
        size={size}
        thickness={thickness}
        onClick={onClick}
      >
        <Text variant="small" weight={500} align="center">
          {children}
        </Text>
      </StyledButton>
    </Container>
  );
};
