import { useEffect } from 'react';
import withTimer from 'hoc/WithTimer';

type TimerType = {
  count: number;
  startTimer: () => void;
  endTimer: () => void;
};

const Timer = ({ count, startTimer, endTimer }: TimerType) => {
  useEffect(() => {
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    if (count === 10) {
      endTimer();
    }
  }, [count, endTimer]);

  return <p>{count}</p>;
};

export default withTimer(Timer);
