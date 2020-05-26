import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { theme } from '@utils';

interface PageProps {
  children: ReactNode;
}

const StyledPage = styled.div<PageProps>`
  padding: 0 calc(${theme.layout.gap} * 16);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default ({ children }: PageProps): JSX.Element => {
  return <StyledPage>{children}</StyledPage>;
};
