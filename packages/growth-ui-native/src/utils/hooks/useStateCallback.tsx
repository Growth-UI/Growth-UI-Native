import { useCallback, useEffect, useRef, useState } from "react";

export default function useStateCallback<T = any>(
  initialState: T
): [T, (state: T, callback?: (state: T) => void) => void] {
  const [state, setState] = useState<T>(initialState);
  const cbRef = useRef<(state: T) => void>();

  const setStateCallback = useCallback((state: T, cb?: (state: T) => void) => {
    cbRef.current = cb;
    setState(state);
  }, []);

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = undefined;
    }
  }, [state]);

  return [state, setStateCallback];
}
