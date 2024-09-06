import { useRef } from 'react';

const useDebounce = (callback, delay) => {
  const timerRef = useRef(null);

  return (...args) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default useDebounce;
