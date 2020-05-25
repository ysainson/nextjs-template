import React, { ReactNode } from 'react';
import styled from 'styled-components';
import styledTheme, { VariantSet } from 'styled-theming';

import { theme } from '@utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'outlined' | 'contained';
  size?: 'large' | 'medium' | 'short';
  thickness?: 'thick' | 'thin';
  gap?: 0 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  onClick?: () => void;
}

const backgroundColor = styledTheme.variants('mode', 'variant', {
  outlined: { light: 'white', dark: 'black' },
  contained: { light: 'black', dark: 'white' },
});

const textColor = styledTheme.variants('mode', 'variant', {
  outlined: { light: 'black', dark: 'white' },
  contained: { light: 'white', dark: 'black' },
});

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  cursor: pointer;
  color: ${textColor};
  border-radius: 5px;
  background: ${backgroundColor};
  text-align: center;
  font-size: ${theme.typography.small.size};
  white-space: nowrap;
  min-width: ${({ size }): string => {
    switch (size) {
      case 'large':
        return '180px';
      case 'short':
        return '120px';
      case 'medium':
      default:
        return '150px';
    }
  }};
  border: 0.5px solid
    ${({ variant }): VariantSet =>
      variant === 'outlined' ? textColor : backgroundColor};
  padding: calc(
    ${theme.layout.gap} *
      ${({ thickness }): number => (thickness === 'thick' ? 3 : 2)}
  );
  margin: calc(${theme.layout.gap} * ${({ gap }): number => gap ?? 3});
  transition: all 0.2s ease 0s;

  :hover {
    background: ${textColor};
    color: ${backgroundColor};
  }
`;

export default ({
  children,
  variant = 'contained',
  size = 'medium',
  thickness = 'thick',
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      size={size}
      thickness={thickness}
    >
      {children}
    </StyledButton>
  );
};
