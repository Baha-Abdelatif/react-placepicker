import { useEffect, useState } from "react";

const DEFAULT_TIMER = 5000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(DEFAULT_TIMER);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(timerInterval);
      // setRemainingTime(DEFAULT_TIMER);
    };
  }, []);

  useEffect(() => {
    const timerTimeout = setTimeout(() => {
      onConfirm();
    }, DEFAULT_TIMER);
    return () => {
      clearTimeout(timerTimeout);
    };
  }, [onConfirm]);
  return (
    <div id='delete-confirmation'>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id='confirmation-actions'>
        <button onClick={onCancel} className='button-text'>
          No / Cancel
        </button>
        <button onClick={onConfirm} className='button'>
          Yes / Confirm
        </button>
      </div>
      <span>({(remainingTime / 1000).toFixed(0)}s) </span>
      <progress value={remainingTime} max={DEFAULT_TIMER} min={0} />
    </div>
  );
}
