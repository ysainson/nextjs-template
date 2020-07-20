import styled from 'styled-components';

import { theme } from '@utils';

const color = {
  icon: {
    unchecked: theme.cvar('colorCheckboxIconUnchecked'),
    checked: theme.cvar('colorCheckboxIconChecked'),
  },
  background: {
    unchecked: theme.cvar('colorCheckboxBgUnchecked'),
    checked: theme.cvar('colorCheckboxBgChecked'),
  },
  border: {
    unchecked: theme.cvar('colorCheckboxBorderUnchecked'),
    checked: theme.cvar('colorCheckboxBorderChecked'),
  },
};

export interface StyledCheckboxProps {
  variant: 'checked' | 'unchecked';
  disabled: boolean;
  strokeWidth: number;
}

export const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-direction: inherit;
  align-items: inherit;
  small {
    transition: all 0.2s ease 0s !important;
  }
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 18px;
`;

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  // Style
  background-color: ${({ disabled, variant }): string =>
    disabled && variant === 'checked'
      ? theme.cvar('colorCheckboxDisabled')
      : color.background[variant]};
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid
    ${({ variant, disabled }): string =>
      disabled ? theme.cvar('colorCheckboxDisabled') : color.border[variant]};
  border-radius: ${theme.cvar('layoutRadius')};

  // Image
  svg {
    display: block;
    margin: auto;
    color: ${({ variant }): string => color.icon[variant]};
    transform: scale(0.6);
    height: 100%;
    width: 100%;
    stroke-width: ${({ strokeWidth }): number => strokeWidth};
  }

  // Layout
  width: 0.85rem;
  height: 0.85rem;

  // Animation
  transition: all 0.2s ease 0s;
`;
