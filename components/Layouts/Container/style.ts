import styled from 'styled-components';

import { theme } from '@utils';

type flexContent =
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-evenly'
  | 'space-between'
  | 'stretch'
  | 'center';

export interface StyledContainerProps {
  flex: number;
  row: boolean;
  noWrap: boolean;
  justify: flexContent;
  align: flexContent;
  gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  // Layout
  display: flex;
  flex: ${({ flex }): number => flex};
  flex-direction: ${({ row }): string => (row ? 'row' : 'column')};
  flex-wrap: ${({ noWrap }): string => (noWrap ? 'nowrap' : 'wrap')};
  justify-content: ${({ justify }): string => justify};
  align-items: ${({ align }): string => align};
  margin: calc(${theme.layout.gap} * ${({ gap }): number => gap});
`;
