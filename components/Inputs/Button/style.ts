import styled from 'styled-components';

import { theme } from '@utils';

const color = {
  base: {
    text: {
      primary: theme.cvar('colorButtonTextPrimary'),
      secondary: theme.cvar('colorButtonTextSecondary'),
      disabled: theme.cvar('colorButtonTextDisabled'),
    },
    background: {
      primary: theme.cvar('colorButtonBgPrimary'),
      secondary: theme.cvar('colorButtonBgSecondary'),
      disabled: theme.cvar('colorButtonBgDisabled'),
    },
    border: {
      primary: theme.cvar('colorButtonBorderPrimary'),
      secondary: theme.cvar('colorButtonBorderSecondary'),
      disabled: theme.cvar('colorButtonBorderDisabled'),
    },
  },
  hover: {
    text: {
      primary: theme.cvar('colorButtonTextSecondary'),
      secondary: theme.cvar('colorButtonTextSecondary'),
      disabled: theme.cvar('colorButtonTextDisabled'),
    },
    background: {
      primary: theme.cvar('colorButtonBgSecondary'),
      secondary: theme.cvar('colorButtonBgSecondary'),
      disabled: theme.cvar('colorButtonBgDisabled'),
    },
    border: {
      primary: theme.cvar('colorButtonBorderPrimary'),
      secondary: theme.cvar('colorButtonBorderPrimary'),
      disabled: theme.cvar('colorButtonBorderDisabled'),
    },
  },
};

export type ButtonVariant = 'primary' | 'secondary';

export interface StyledButtonProps {
  variant: ButtonVariant | 'disabled';
  size: 'short' | 'medium' | 'long';
  thickness: 'small' | 'medium' | 'large';
}

export const StyledButton = styled.button<StyledButtonProps>`
  // Style
  cursor: ${({ variant }): string =>
    variant === 'disabled' ? 'not-allowed' : 'pointer'};
  background: ${({ variant }): string => color.base.background[variant]};
  border-radius: ${theme.cvar('layoutRadius')};
  border: 1px solid ${({ variant }): string => color.base.border[variant]};
  outline: none;

  // Text
  text-align: center;
  font-size: inherit;
  white-space: nowrap;
  small {
    color: ${({ variant }): string => color.base.text[variant]};
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
        return `${theme.cvar('layoutSpaceGapHalf')}`;
      case 'small':
        return `${theme.cvar('layoutSpace')}`;
      case 'medium':
      default:
        return `${theme.cvar('layoutSpace2x')}`;
    }
  }};

  // Animation
  transition: all 0.2s ease 0s;

  // Interaction
  :hover {
    small {
      color: ${({ variant }): string => color.hover.text[variant]};
    }
    border: 1px solid ${({ variant }): string => color.hover.border[variant]};
    background: ${({ variant }): string => color.hover.background[variant]};
  }
`;
