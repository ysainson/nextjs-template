import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { VariantSet } from 'styled-theming';

import { theme } from '@utils';

type FontWeight = 900 | 800 | 'bold' | 600 | 500 | 'normal' | 300 | 200 | 100;

interface TextProps {
  children: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
  fill?: VariantSet | string;
  weight?: FontWeight;
  italic?: boolean;
  bold?: boolean;
}

const StyledText = styled.text<TextProps>`
  color: ${({ fill }): VariantSet | string => fill ?? theme.color.text};
  font-size: ${({ variant }): string => theme.typography[variant].size};
  font-weight: ${({ variant }): string | number =>
    theme.typography[variant].weight};
  font-style: ${({ italic }): string => (italic ? 'italic' : 'normal')};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default ({
  children,
  variant,
  fill,
  weight,
  italic,
  bold,
}: TextProps): JSX.Element => {
  return (
    <StyledText
      variant={variant}
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
