import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const usePolling = (callback: any, delay: number) => {
  const dispatch = useDispatch();

  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      dispatch(savedCallback.current);
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [callback, delay, dispatch]);
};

export default usePolling;
