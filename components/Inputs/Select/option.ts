import styled from 'styled-components';

import { theme } from '@utils';

export const StyledSelectOptionContainer = styled.div`
  // Style
  background: ${theme.cvar('colorBackground')};
  box-shadow: ${theme.cvar('shadowLarge')};
  border-radius: ${theme.cvar('layoutRadius')};

  // Layout
  position: absolute;
  width: 100%;
  margin-top: ${theme.cvar('layoutSpace2x')};
  z-index: 2;
`;

interface StyledSelectOptionProps {
  isFirst?: boolean;
  isLast?: boolean;
}

export const StyledSelectOption = styled.div<StyledSelectOptionProps>`
  // Style
  cursor: pointer;
  border-radius: ${({ isFirst, isLast }): string =>
    (isFirst &&
      `${theme.cvar('layoutRadius')} ${theme.cvar('layoutRadius')} 0 0`) ||
    (isLast &&
      `0 0 ${theme.cvar('layoutRadius')} ${theme.cvar('layoutRadius')}`) ||
    'none'};

  // Text
  color: ${theme.cvar('colorSelectOptionText')};
  font-size: ${theme.typography.small.size};
  font-family: Montserrat, sans-serif;

  // Layout
  padding: ${theme.cvar('layoutSpace2x')};

  // Interaction
  :hover {
    background: ${theme.cvar('colorSelectOptionHover')};
  }
`;
