import { RefObject, useEffect, useRef, useState } from 'react';

export default <T extends HTMLElement>(
  callback: EventListener
): RefObject<T> => {
  const container = useRef<T>(null);
  const [isTouchEvent, setTouchEvent] = useState(false);
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

  useEffect(() => {
    document.addEventListener(eventType, handleEvent, true);

    return (): void => {
      document.removeEventListener(eventType, handleEvent, true);
    };
  });

  useEffect(() => {
    setTouchEvent('ontouchstart' in document.documentElement);
  }, []);

  return container;
};
