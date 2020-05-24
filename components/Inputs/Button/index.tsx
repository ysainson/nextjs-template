import React, { ReactNode } from 'react';
import styled from 'styled-components';
import theme, { VariantSet } from 'styled-theming';

// You can extends with ButtonHTMLAttributes<HTMLButtonElement> to get all button properties
interface ButtonProps {
  children?: ReactNode;
  variant?: 'outlined' | 'contained';
  onClick?: () => void;
}

const backgroundColor = theme.variants('mode', 'variant', {
  outlined: { light: 'white', dark: 'black' },
  contained: { light: 'black', dark: 'white' },
});

const textColor = theme.variants('mode', 'variant', {
  outlined: { light: 'black', dark: 'white' },
  contained: { light: 'white', dark: 'black' },
});

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  cursor: pointer;
  border: 2px solid
    ${({ variant }): VariantSet =>
      variant === 'outlined' ? textColor : backgroundColor};
  border-radius: 30px;
  background: ${backgroundColor};
  color: ${textColor};
`;

export default ({ variant, onClick, children }: ButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};
