import styled from 'styled-components';

import { theme } from '@utils';
import { FlexContent } from '@types';

export interface StyledContainerProps {
  flex: number;
  row: boolean;
  reverse: boolean;
  noWrap: boolean;
  justify: FlexContent;
  align: FlexContent;
  gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  // Layout
  display: flex;
  flex: ${({ flex }): number => flex};
  flex-direction: ${({ row, reverse }): string =>
    `${row ? 'row' : 'column'}${reverse ? '-reverse' : ''}`};
  flex-wrap: ${({ noWrap }): string => (noWrap ? 'nowrap' : 'wrap')};
  justify-content: ${({ justify }): string => justify};
  align-items: ${({ align }): string => align};
  margin: calc(${theme.cvar('layoutSpace')} * ${({ gap }): number => gap});
`;
