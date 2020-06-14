import React, { ReactNode } from 'react';
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

interface StyledContainerProps {
  row: boolean;
  noWrap: boolean;
  justify: flexContent;
  align: flexContent;
  gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const StyledContainer = styled.div<StyledContainerProps>`
  // Layout
  display: flex;
  flex-direction: ${({ row }): string => (row ? 'row' : 'column')};
  flex-wrap: ${({ noWrap }): string => (noWrap ? 'nowrap' : 'wrap')};
  justify-content: ${({ justify }): string => justify};
  align-items: ${({ align }): string => align};
  margin: calc(${theme.layout.gap} * ${({ gap }): number => gap});
`;

interface ContainerProps extends Partial<StyledContainerProps> {
  children: ReactNode;
}

export default ({
  children,
  row = false,
  noWrap = false,
  justify = 'center',
  align = row ? 'center' : 'stretch',
  gap = 3,
}: ContainerProps): JSX.Element => {
  return (
    <StyledContainer
      row={row}
      noWrap={noWrap}
      justify={justify}
      align={align}
      gap={gap}
    >
      {children}
    </StyledContainer>
  );
};
