import styled from 'styled-components';

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
  color: string;
  weight: FontWeight;
  italic: boolean;
  bold: boolean;
}

export const StyledText = styled.text<StyledTextProps>`
  // Style
  color: ${({ color }): string => color};
  font-size: ${({ size }): string => size};
  font-weight: ${({ weight }): FontWeight => weight};
  font-style: ${({ italic }): string => (italic ? 'italic' : 'normal')};
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
