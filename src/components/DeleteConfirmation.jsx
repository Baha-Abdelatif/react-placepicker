import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const DEFAULT_TIMER = 10000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
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
      <ProgressBar timer={DEFAULT_TIMER} />
      <div id='confirmation-actions'>
        <button onClick={onCancel} className='button-text'>
          No / Cancel
        </button>
        <button onClick={onConfirm} className='button'>
          Yes / Confirm
        </button>
      </div>
    </div>
  );
}
