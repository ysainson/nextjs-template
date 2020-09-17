import React, { ReactNode } from 'react';

import { theme } from '@utils';

import { StyledText, StyledTextProps, FontWeight } from './style';

interface TextProps extends Partial<Omit<StyledTextProps, 'size'>> {
  children: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
}

const Text = ({
  children,
  variant,
  color = theme.cvar('colorForeground'),
  weight = theme.typography[variant].weight as FontWeight,
  italic = false,
  bold = false,
  align = 'left',
}: TextProps): JSX.Element => {
  return (
    <StyledText
      size={theme.typography[variant].size}
      color={color}
      weight={weight}
      italic={italic}
      bold={bold}
      align={align}
      as={variant}
    >
      {bold ? <b>{children}</b> : children}
    </StyledText>
  );
};

export default Text;
