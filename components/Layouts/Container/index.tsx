import React, { ReactNode } from 'react';

import { StyledContainer, StyledContainerProps } from './style';

interface ContainerProps extends Partial<StyledContainerProps> {
  children: ReactNode;
}

export default ({
  children,
  flex = 1,
  row = false,
  noWrap = false,
  justify = 'flex-start',
  align = row ? 'center' : 'stretch',
  gap = 3,
}: ContainerProps): JSX.Element => {
  return (
    <StyledContainer
      flex={flex}
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
