import React from 'react';

import { StyledSpacer, StyledSpacerProps } from './style';

export default ({
  size = 'medium',
}: Partial<StyledSpacerProps>): JSX.Element => {
  return <StyledSpacer size={size} />;
};
