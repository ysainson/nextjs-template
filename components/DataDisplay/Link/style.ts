import styled from 'styled-components';

import { theme } from '@utils';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${theme.cvar('colorLink')};
`;

export default StyledLink;
