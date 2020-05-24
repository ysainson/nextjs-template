import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { theme } from '@utils';

interface PageProps {
  children: ReactNode;
}

const StyledPage = styled.div<PageProps>`
  min-height: 100vh;
  background-color: ${theme.color.background};
`;

export default ({ children }: PageProps): JSX.Element => {
  return <StyledPage>{children}</StyledPage>;
};
