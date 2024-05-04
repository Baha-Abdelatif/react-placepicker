import { useEffect, useState } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const timerTimeout = setTimeout(() => {
      onCancel();
    }, 5000);
    const timerInterval = setInterval(() => {
      setTimer((pre) => pre - 1);
    }, 1000);
    return () => {
      clearTimeout(timerTimeout);
      clearInterval(timerInterval);
      setTimer(5);
    };
  }, [onCancel]);
  return (
    <div id='delete-confirmation'>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id='confirmation-actions'>
        <button onClick={onCancel} className='button-text'>
          No ({timer}s)
        </button>
        <button onClick={onConfirm} className='button'>
          Yes
        </button>
      </div>
    </div>
  );
}
