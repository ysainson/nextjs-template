import React from 'react';

import StyledInlineCode from './style';

interface InlineCodeProps {
  children: string;
}

export default ({ children }: InlineCodeProps): JSX.Element => {
  return (
    <StyledInlineCode>
      &nbsp;`
      {children}
      `&nbsp;
    </StyledInlineCode>
  );
};
