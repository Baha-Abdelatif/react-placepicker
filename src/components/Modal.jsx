import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, close, children }) => {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);
  return createPortal(
    <dialog className='modal' ref={dialog} onClose={close}>
      {open && children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
