import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { variants } from 'styled-theming';

import { theme } from '@utils';
import { Text } from '@components/DataDisplay';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'short' | 'medium' | 'long';
  thickness?: 'small' | 'medium' | 'large';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  onClick?: () => void;
}

const color = {
  base: {
    text: variants('mode', 'variant', {
      primary: { light: theme.colors.white, dark: theme.colors.black },
      secondary: { light: theme.colors.grey, dark: theme.colors.lightGrey },
    }),
    background: variants('mode', 'variant', {
      primary: { light: theme.colors.black, dark: theme.colors.white },
      secondary: { light: theme.colors.white, dark: theme.colors.black },
    }),
    border: variants('mode', 'variant', {
      primary: { light: theme.colors.black, dark: theme.colors.white },
      secondary: {
        light: theme.colors.lightGrey,
        dark: theme.colors.grey,
      },
    }),
  },
  hover: {
    text: variants('mode', 'variant', {
      primary: { light: theme.colors.black, dark: theme.colors.white },
      secondary: { light: theme.colors.black, dark: theme.colors.white },
    }),
    background: variants('mode', 'variant', {
      primary: { light: theme.colors.white, dark: theme.colors.black },
      secondary: { light: theme.colors.white, dark: theme.colors.black },
    }),
    border: variants('mode', 'variant', {
      primary: { light: theme.colors.black, dark: theme.colors.white },
      secondary: { light: theme.colors.black, dark: theme.colors.white },
    }),
  },
};

const StyledButton = styled.button<Required<ButtonProps>>`
  // Style
  outline: none;
  cursor: pointer;
  background: ${color.base.background};
  border-radius: 5px;
  border: 1px solid ${color.base.border};

  // Text
  text-align: center;
  font-size: inherit;
  white-space: nowrap;
  small {
    color: ${color.base.text};
  }

  // Layout
  min-width: ${({ size }): string => {
    switch (size) {
      case 'long':
        return '180px';
      case 'short':
        return '120px';
      case 'medium':
      default:
        return '150px';
    }
  }};
  padding: ${({ thickness }): string => {
    switch (thickness) {
      case 'large':
        return `calc(${theme.layout.gap} * 3)`;
      case 'small':
        return `calc(${theme.layout.gap} * 1)`;
      case 'medium':
      default:
        return `calc(${theme.layout.gap} * 2)`;
    }
  }};
  margin: calc(${theme.layout.gap} * ${({ gap }): number => gap});

  // Animation
  transition: all 0.2s ease 0s;

  // Interaction
  :hover {
    small {
      color: ${color.hover.text};
    }
    border: 1px solid ${color.hover.border};
    background: ${color.hover.background};
  }
  :active {
    min-width: 148px;
  }
`;

export default ({
  children,
  variant = 'primary',
  size = 'medium',
  thickness = 'medium',
  gap = 3,
  onClick = (): void => {},
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      thickness={thickness}
      gap={gap}
      onClick={onClick}
    >
      <Text variant="small" weight={500}>
        {children}
      </Text>
    </StyledButton>
  );
};
