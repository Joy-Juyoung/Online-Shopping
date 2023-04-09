import { useEffect, useRef, useState } from 'react';

const useDetectClose = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const listener = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        removeHandler(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('mouseover', listener);
    }
    return () => {
      window.removeEventListener('mouseout', listener);
    };
  });
  return [isOpen, ref, removeHandler];
};

export default useDetectClose;
