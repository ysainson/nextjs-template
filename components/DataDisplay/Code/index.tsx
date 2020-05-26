import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CodeProps {
  children: ReactNode;
}

const StyledCode = styled.code<CodeProps>``;

export default ({ children }: CodeProps): JSX.Element => {
  return (
    <pre>
      <StyledCode>{children}</StyledCode>
    </pre>
  );
};
