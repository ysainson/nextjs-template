import React, { ReactNode } from 'react';

import { StyledContainer, StyledContainerProps } from './style';

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
