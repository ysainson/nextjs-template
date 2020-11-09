import * as React from 'react';

import { StyledContainer, StyledContainerProps } from './style';

interface ContainerProps extends Partial<StyledContainerProps> {
  children: React.ReactNode;
}

const Container = ({
  children,
  flex = 'auto',
  row = false,
  reverse = false,
  noWrap = false,
  justify = 'flex-start',
  align = row ? 'center' : 'stretch',
  bg = 'transparent',
  gap = 3,
}: ContainerProps): JSX.Element => {
  return (
    <StyledContainer
      {...{ flex, row, reverse, noWrap, justify, align, gap, bg, children }}
    />
  );
};

export default Container;
