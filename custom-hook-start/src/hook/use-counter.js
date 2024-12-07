import { useState, useEffect } from "react";

const useCounter = (setCounterFn) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(setCounterFn);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter
};

export default useCounter;
