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

interface ContainerProps {
  children: ReactNode;
  row?: boolean;
  noWrap?: boolean;
  justify?: flexContent;
  align?: flexContent;
  gap?: 0 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ row }): string => (row ? 'row' : 'column')};
  flex-wrap: ${({ noWrap }): string => (noWrap ? 'nowrap' : 'wrap')};
  justify-content: ${({ justify }): string => justify ?? 'center'};
  align-items: ${({ row, align }): string =>
    align ?? (row ? 'center' : 'stretch')};
  padding: calc(${theme.layout.gap} * ${({ gap }): number => gap ?? 3});
`;

export default ({
  children,
  row,
  noWrap,
  justify,
  align,
  gap,
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
