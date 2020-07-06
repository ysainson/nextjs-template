import styled from 'styled-components';

import { theme } from '@utils';

export interface StyledSpacerProps {
  size: 'small' | 'medium' | 'large' | number;
}
export const StyledSpacer = styled.div<StyledSpacerProps>`
  padding: ${({ size }): string => {
    if (typeof size === 'number') {
      return `calc(${theme.layout.gap} * ${size})`;
    }
    switch (size) {
      case 'small':
        return `calc(${theme.layout.gap} * 4)`;
      case 'large':
        return `calc(${theme.layout.gap} * 8)`;
      case 'medium':
      default:
        return `calc(${theme.layout.gap} * 6)`;
    }
  }};
`;
