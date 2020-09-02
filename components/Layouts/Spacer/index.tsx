import React from 'react';

import { StyledSpacer, StyledSpacerProps } from './style';

const Spacer = ({
  size = 'medium',
}: Partial<StyledSpacerProps>): JSX.Element => {
  return <StyledSpacer size={size} />;
};

export default Spacer;
