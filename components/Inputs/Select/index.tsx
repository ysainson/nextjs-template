import React, { useCallback, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

import { uuid } from '@utils';
import { useClickOutside } from '@hooks';

import { Text } from '@components/DataDisplay';
import { Container } from '@components/Layouts';

import { StyledSelectOption, StyledSelectOptionContainer } from './option';
import {
  StyledSelect,
  StyledSelectContainer,
  StyledSelectProps,
  StyledSelectContainerProps,
} from './style';

type Option<T> = { value: T; label: string };

interface SelectProps<T>
  extends Partial<Omit<StyledSelectProps, 'variant' | 'open'>>,
    Partial<StyledSelectContainerProps> {
  options: Option<T>[];
  onSelect: (value: T) => void;
  selected?: Option<T>;
  text?: string;
  disabled?: boolean;
  error?: boolean;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const Select = <T,>({
  options,
  onSelect,
  selected,
  size,
  text = 'Select...',
  thickness = 'medium',
  disabled = false,
  error = false,
  gap = 3,
}: SelectProps<T>): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));

  const getVariant = useCallback(() => {
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
    <Container gap={gap} flex={size ? 0 : 1}>
      <StyledSelectContainer ref={ref} size={size ?? 'medium'}>
        <StyledSelect
          open={open}
          thickness={thickness}
          variant={getVariant()}
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
      </StyledSelectContainer>
    </Container>
  );
};

export default Select;
