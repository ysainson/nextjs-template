import styled from 'styled-components';
import styledTheme, { ThemeSet, variants, VariantSet } from 'styled-theming';

import { theme } from '@utils';

const color = {
  icon: variants('mode', 'variant', {
    checked: theme.colors['--default'],
    unchecked: theme.colors['--transparent'],
  }),
  background: variants('mode', 'variant', {
    checked: theme.colors['--pink'],
    unchecked: theme.colors['--transparent'],
  }),
  border: variants('mode', 'variant', {
    checked: theme.colors['--pink'],
    unchecked: theme.colors['--grey'],
  }),
};

export interface StyledCheckboxProps {
  variant: 'checked' | 'unchecked';
  disabled: boolean;
  strokeWidth: number;
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  // Style
  background-color: ${({ disabled, variant }): ThemeSet | VariantSet =>
    disabled && variant === 'checked'
      ? styledTheme('mode', theme.colors['--grey-inverted'])
      : color.background};
  border: 1px solid grey;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid
    ${({ disabled }): ThemeSet | VariantSet =>
      disabled
        ? styledTheme('mode', theme.colors['--grey-inverted'])
        : color.border};
  border-radius: ${theme.layout.radius};

  // Image
  svg {
    color: ${color.icon};
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
