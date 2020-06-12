import React, { useCallback, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import styled from 'styled-components';
import { variants, VariantSet } from 'styled-theming';

import { theme, uuid } from '@utils';
import { useClickOutside } from '@hooks';

import { Text } from '@components/DataDisplay';
import { Container } from '@components/Layouts';

import { StyledSelectOption, StyledSelectOptionContainer } from './option';

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

interface SelectProps {
  open: boolean;
  variant: 'default' | 'error' | 'disabled';
  size: 'short' | 'medium' | 'long';
  thickness: 'small' | 'medium' | 'large';
}

const StyledSelect = styled.div<SelectProps>`
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

type Option<T> = { value: T; label: string };

interface Props<T> extends Partial<Omit<SelectProps, 'variant' | 'open'>> {
  options: Option<T>[];
  onSelect: (value: T) => void;
  selected?: Option<T>;
  text?: string;
  disabled?: boolean;
  error?: boolean;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export default <T,>({
  options,
  onSelect,
  selected,
  text = 'Select...',
  size = 'medium',
  thickness = 'medium',
  disabled = false,
  error = false,
  gap = 3,
}: Props<T>): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));

  const variant = useCallback(() => {
    if (disabled) return 'disabled';
    if (error) return 'error';
    return 'default';
  }, [disabled, error]);

  const handleSelect = useCallback(
    (e: Option<T>): void => {
      onSelect(e.value);
      setOpen(false);
      setSelectedOption(e);
    },
    [onSelect]
  );

  return (
    <Container gap={gap}>
      <div ref={ref}>
        <StyledSelect
          open={open}
          size={size}
          thickness={thickness}
          variant={variant()}
          onClick={(): void => setOpen(!open)}
        >
          <Container row justify="space-between" gap={0}>
            <Text variant="small" weight={500}>
              {selectedOption?.label ?? text}
            </Text>
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </Container>
        </StyledSelect>
        {open && (
          <StyledSelectOptionContainer>
            {options.map((e, i) => (
              <StyledSelectOption
                key={uuid()}
                isFirst={i === 0}
                isLast={i === options.length - 1}
                onClick={(): void => handleSelect(e)}
              >
                {e.label}
              </StyledSelectOption>
            ))}
          </StyledSelectOptionContainer>
        )}
      </div>
    </Container>
  );
};
