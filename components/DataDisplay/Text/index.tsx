import React, { ReactNode } from 'react';
import styled from 'styled-components';
import styledTheme from 'styled-theming';

import { theme } from '@utils';

const color = styledTheme.variants('mode', 'fill', {
  light: theme.colors['--default-inverted'],
  dark: theme.colors['--default'],
});

type FontWeight = 900 | 800 | 'bold' | 600 | 500 | 'normal' | 300 | 200 | 100;

interface StyledTextProps {
  size: string;
  fill: 'light' | 'dark';
  weight: FontWeight;
  italic: boolean;
  bold: boolean;
}

const StyledText = styled.text<StyledTextProps>`
  color: ${color};
  font-size: ${({ size }): string => size};
  font-weight: ${({ weight }): FontWeight => weight};
  font-style: ${({ italic }): string => (italic ? 'italic' : 'normal')};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

interface TextProps extends Partial<Omit<StyledTextProps, 'size'>> {
  children: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
}

export default ({
  children,
  variant,
  fill = 'light',
  weight = theme.typography[variant].weight as FontWeight,
  italic = false,
  bold = false,
}: TextProps): JSX.Element => {
  return (
    <StyledText
      size={theme.typography[variant].size}
      fill={fill}
      weight={weight}
      italic={italic}
      bold={bold}
      as={variant}
    >
      {bold ? <b>{children}</b> : children}
    </StyledText>
  );
};
