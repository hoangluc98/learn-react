import React, { useCallback, useState } from 'react';

function withTimer<T>(WrappedComponent: React.ComponentType<T>) {
  return (hocs: Omit<T, 'count' | 'startTimer' | 'endTimer'>) => {
    const [count, setCount] = useState<number>(0);
    const [timer, setTimer] = useState<any>(-1);

    const startTimer = useCallback(() => {
      const timer = setInterval(() => {
        setCount((previous) => {
          return previous + 1;
        });
      }, 1000);

      setTimer(timer);
    }, []);

    const endTimer = useCallback(() => {
      clearInterval(timer);
      setCount(0);
    }, [timer]);

    return (
      <WrappedComponent
        {...(hocs as T)}
        startTimer={startTimer}
        endTimer={endTimer}
        count={count}
      />
    );
  };
}

export default withTimer;
