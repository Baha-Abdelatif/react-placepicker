import React, { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return (
    <>
      <progress value={remainingTime} max={timer} min={0} />
      <span>({(remainingTime / 1000).toFixed(0)}s) </span>
    </>
  );
}
