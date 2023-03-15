import { useEffect, useRef, useState } from 'react';

const useDetectClose = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
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
