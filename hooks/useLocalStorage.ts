import * as React from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const isBrowser = typeof window !== 'undefined';

  const [storedValue, setStoredValue] = React.useState<T>(() => {
    if (isBrowser) {
      try {
        const item = window.localStorage.getItem(key);

        return item ? (JSON.parse(item) as T) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    }
    return initialValue;
  });

  const setValue = (value: T): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      if (isBrowser) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
