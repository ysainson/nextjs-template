import styled from 'styled-components';

import { theme } from '@utils';

export interface StyledToggleProps {
  toggled: boolean;
}

export const StyledToggleWrapper = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  padding: 3px 0;
`;

export const StyledToggle = styled.span<StyledToggleProps>`
  cursor: pointer;
  display: inline-block;
  height: 14px;
  position: relative;
  transition-delay: 0.12s;
  transition-duration: 0.28s;
  transition-property: background, border;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  width: 28px;
  border-radius: 14px;
  background: ${({ toggled }): string =>
    toggled ? theme.cvar('colorToggleBgOn') : theme.cvar('colorToggleBgOff')};
`;

export const StyledToggleContent = styled.div<StyledToggleProps>`
  left: ${({ toggled }): string => (toggled ? 'calc(15px)' : '1px')};
  cursor: pointer;
  height: 12px;
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  transition: left 0.28s cubic-bezier(0, 0, 0.2, 1);
  width: 12px;
  border-radius: 14px;
  background: ${theme.cvar('colorBackground')};
`;
