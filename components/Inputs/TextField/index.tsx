import * as React from 'react';

import { useClickOutside } from '@hooks';

import { Container } from '@components/Layouts';
import { Text } from '@components/DataDisplay';

import { StyledTextField, StyledTextFieldProps, TextFieldInput } from './style';

interface TextFieldProps
  extends Partial<Omit<StyledTextFieldProps, 'variant' | 'focused'>> {
  placeholder: string;
  onChange: (v: string) => void;
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'date';
  maxLength?: number;
  disabled?: boolean;
  error?: boolean;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const TextField = ({
  size,
  placeholder,
  onChange,
  thickness = 'medium',
  type = 'text',
  maxLength = undefined,
  disabled = false,
  error = false,
  gap = 3,
}: TextFieldProps): JSX.Element => {
  const [focused, setFocused] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [remainingLength, setRemainingLength] = React.useState(maxLength);
  const ref = useClickOutside<HTMLDivElement>(() => setFocused(false));

  const getVariant = React.useCallback(() => {
    if (disabled) return 'disabled';
    if (error) return 'error';
    return 'default';
  }, [disabled, error]);

  const handleInputChange = (newInput: string) => {
    setInput(newInput);
    onChange(newInput);
    if (maxLength) {
      setRemainingLength(maxLength - newInput.length);
    }
  };

  return (
    <Container gap={gap} flex={size ? 0 : 1} row>
      <StyledTextField
        ref={ref}
        size={size ?? 'medium'}
        focused={focused}
        thickness={thickness}
        variant={getVariant()}
        onClick={(): void => setFocused(!focused)}
      >
        <Container row>
          <TextFieldInput
            placeholder={placeholder}
            focused={focused}
            variant={getVariant()}
            type={type}
            maxLength={maxLength}
            value={input}
            onChange={(e): void => handleInputChange(e.target.value)}
          />
          {maxLength && (
            <div style={{ minWidth: '25px', textAlign: 'center' }}>
              <Text variant="small">{remainingLength}</Text>
            </div>
          )}
        </Container>
      </StyledTextField>
    </Container>
  );
};

export default TextField;
