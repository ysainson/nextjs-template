import * as React from 'react';

const useClickOutside = <T extends HTMLElement>(
  callback: EventListener,
): React.RefObject<T> => {
  const container = React.useRef<T>(null);
  const [isTouchEvent, setTouchEvent] = React.useState(false);
  const eventType = isTouchEvent ? 'touchend' : 'click';

  const handleEvent = (e: Event): void => {
    if (e.type === 'click' && isTouchEvent) {
      return;
    }

    if (container.current && e.target !== null) {
      if (!container.current.contains(e.target as Node)) {
        callback(e);
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener(eventType, handleEvent, true);

    return (): void => {
      document.removeEventListener(eventType, handleEvent, true);
    };
  });

  React.useEffect(() => {
    setTouchEvent('ontouchstart' in document.documentElement);
  }, []);

  return container;
};

export default useClickOutside;
