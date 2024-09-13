import { useEffect, useRef } from "react";

function usePrevious<T = any>(value: T) {
  const prev = useRef<T | undefined>(undefined);

  useEffect(() => {
    prev.current = value;
  }, [value]);

  return prev.current;
}

export default usePrevious;
