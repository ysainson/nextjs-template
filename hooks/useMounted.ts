import * as React from 'react';

const useMounted = (): boolean => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  return mounted;
};

export default useMounted;
