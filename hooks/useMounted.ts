import { useEffect, useState } from 'react';

export default (): boolean => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return mounted;
};
