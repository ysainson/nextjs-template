import React from 'react';

import StyledInlineCode from './style';

interface InlineCodeProps {
  children: string;
}

const InlineCode = ({ children }: InlineCodeProps): JSX.Element => {
  return (
    <StyledInlineCode>
      &nbsp;`
      {children}
      `&nbsp;
    </StyledInlineCode>
  );
};

export default InlineCode;
