import React, { ReactNode, useMemo } from 'react';

import { theme } from '@utils';

import { Container } from '@components/Layouts';
import { StyledText, StyledTextProps, FontWeight } from './style';

interface TextProps extends Partial<Omit<StyledTextProps, 'size'>> {
  children: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
  align?: 'left' | 'center' | 'right';
}

export default ({
  children,
  variant,
  align = 'left',
  fill = 'light',
  weight = theme.typography[variant].weight as FontWeight,
  italic = false,
  bold = false,
}: TextProps): JSX.Element => {
  const textAlign = useMemo(() => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'center':
      default:
        return 'center';
    }
  }, [align]);

  return (
    <Container gap={0} align={textAlign}>
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
    </Container>
  );
};
