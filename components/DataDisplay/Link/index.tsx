import * as React from 'react';
// eslint-disable-next-line import/no-named-default
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

import StyledLink from './style';

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
}

const Link = ({
  children,
  href,
  replace,
  scroll,
  shallow,
}: LinkProps): JSX.Element => {
  return (
    <NextLink
      href={href}
      passHref
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
