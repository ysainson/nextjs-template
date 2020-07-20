import styled from 'styled-components';

import { theme } from '@utils';

const StyledInlineCode = styled.code`
  color: ${theme.cvar('colorInlineCode')};
  font-family: 'JetBrains Mono', sans-serif;
  font-weight: normal;
`;

export default StyledInlineCode;
