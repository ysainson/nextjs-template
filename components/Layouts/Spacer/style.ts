import styled from 'styled-components';

import { theme } from '@utils';

export interface StyledSpacerProps {
  size: 'small' | 'medium' | 'large' | number;
}
export const StyledSpacer = styled.div<StyledSpacerProps>`
  padding: ${({ size }): string => {
    if (typeof size === 'number') {
      return `calc(${theme.cvar('layoutSpace')} * ${size})`;
    }
    switch (size) {
      case 'small':
        return `${theme.cvar('layoutSpace4x')}`;
      case 'large':
        return `${theme.cvar('layoutSpace8x')}`;
      case 'medium':
      default:
        return `${theme.cvar('layoutSpaceGap')}`;
    }
  }};
`;
