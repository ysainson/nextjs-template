import React, { ReactNode } from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';

import StyledLink from './style';

interface LinkProps extends NextLinkProps {
  children: ReactNode;
}

export default ({
  children,
  href,
  replace,
  scroll,
  shallow,
}: LinkProps): JSX.Element => {
  return (
    <Link
      href={href}
      passHref
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
