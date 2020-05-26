import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/DataDisplay';

interface SelectProps {
  size?: 'long' | 'medium' | 'short';
}

const StyledSelect = styled.div<SelectProps>`
  border: 0.5px solid black;
  border-radius: 5px;
  padding: 12px;
  margin: 12px;
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

export default ({ size = 'medium' }: SelectProps): JSX.Element => {
  return (
    <StyledSelect size={size}>
      <Text variant="small">...</Text>
    </StyledSelect>
  );
};
