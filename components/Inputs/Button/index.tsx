import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { variants } from 'styled-theming';

import { theme } from '@utils';

import { Text } from '@components/DataDisplay';
import { Container } from '@components/Layouts';

interface StyledButtonProps {
  variant: 'primary' | 'secondary' | 'disabled';
  size: 'short' | 'medium' | 'long';
  thickness: 'small' | 'medium' | 'large';
}

const color = {
  base: {
    text: variants('mode', 'variant', {
      primary: theme.colors['--default'],
      secondary: theme.colors['--grey'],
      disabled: theme.colors['--grey-inverted'],
    }),
    background: variants('mode', 'variant', {
      primary: theme.colors['--default-inverted'],
      secondary: theme.colors['--default'],
      disabled: theme.colors['--default'],
    }),
    border: variants('mode', 'variant', {
      primary: theme.colors['--default'],
      secondary: theme.colors['--grey-inverted'],
      disabled: theme.colors['--grey-inverted'],
    }),
  },
  hover: {
    text: variants('mode', 'variant', {
      primary: theme.colors['--default-inverted'],
      secondary: theme.colors['--default-inverted'],
      disabled: theme.colors['--grey-inverted'],
    }),
    background: variants('mode', 'variant', {
      primary: theme.colors['--default'],
      secondary: theme.colors['--default'],
      disabled: theme.colors['--default'],
    }),
    border: variants('mode', 'variant', {
      primary: theme.colors['--default-inverted'],
      secondary: theme.colors['--default-inverted'],
      disabled: theme.colors['--grey-inverted'],
    }),
  },
};

const StyledButton = styled.button<StyledButtonProps>`
  // Style
  cursor: ${({ variant }): string =>
    variant === 'disabled' ? 'not-allowed' : 'pointer'};
  background: ${color.base.background};
  border-radius: ${theme.layout.radius};
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
`;

interface ButtonProps extends Partial<StyledButtonProps> {
  children: ReactNode;
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
        <Text variant="small" weight={500}>
          {children}
        </Text>
      </StyledButton>
    </Container>
  );
};
