import styled from 'styled-components';
import styledTheme from 'styled-theming';

import { theme } from '@utils';

const color = styledTheme.variants('mode', 'fill', {
  light: theme.colors['--default-inverted'],
  dark: theme.colors['--default'],
});

export type FontWeight =
  | 900
  | 800
  | 'bold'
  | 600
  | 500
  | 'normal'
  | 300
  | 200
  | 100;

export interface StyledTextProps {
  size: string;
  fill: 'light' | 'dark';
  weight: FontWeight;
  italic: boolean;
  bold: boolean;
}

export const StyledText = styled.text<StyledTextProps>`
  color: ${color};
  font-size: ${({ size }): string => size};
  font-weight: ${({ weight }): FontWeight => weight};
  font-style: ${({ italic }): string => (italic ? 'italic' : 'normal')};
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
