import styled from 'styled-components';
import { variants, VariantSet } from 'styled-theming';

import { theme } from '@utils';

const color = {
  base: {
    primary: variants('mode', 'variant', {
      default: theme.colors['--grey'],
      error: theme.colors['--error'],
      disabled: theme.colors['--grey-inverted'],
    }),
    secondary: variants('mode', 'variant', {
      default: theme.colors['--grey-inverted'],
      error: theme.colors['--error-light'],
      disabled: theme.colors['--grey-inverted'],
    }),
  },
  hover: variants('mode', 'variant', {
    default: theme.colors['--default-inverted'],
    error: theme.colors['--error'],
    disabled: theme.colors['--grey-inverted'],
  }),
};

export interface StyledSelectContainerProps {
  size: 'short' | 'medium' | 'long';
}

export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
  // Layout
  position: relative;
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
`;

export interface StyledSelectProps {
  open: boolean;
  variant: 'default' | 'error' | 'disabled';
  thickness: 'small' | 'medium' | 'large';
}

export const StyledSelect = styled.div<StyledSelectProps>`
  // Style
  cursor: ${({ variant }): string =>
    variant === 'disabled' ? 'not-allowed' : 'pointer'};
  border: 1px solid
    ${({ open }): VariantSet => (open ? color.hover : color.base.secondary)};
  border-radius: ${theme.layout.radius};

  // Image
  svg {
    color: ${({ open }): VariantSet =>
      open ? color.hover : color.base.primary};
  }

  // Text
  white-space: nowrap;
  small {
    color: ${({ open }): VariantSet =>
      open ? color.hover : color.base.primary};
  }

  // Layout
  div {
    margin: 0 calc(${theme.layout.gap} * 2);
  }
  padding: ${({ thickness }): string => {
    switch (thickness) {
      case 'large':
        return `calc(${theme.layout.gap} * 3) 0`;
      case 'small':
        return `calc(${theme.layout.gap} * 1) 0`;
      case 'medium':
      default:
        return `calc(${theme.layout.gap} * 2) 0`;
    }
  }};

  // Animation
  transition: all 0.2s ease 0s;

  // Interaction
  :hover {
    svg {
      color: ${color.hover};
    }
    small {
      color: ${color.hover};
    }
    border: 1px solid ${color.hover};
  }
`;
