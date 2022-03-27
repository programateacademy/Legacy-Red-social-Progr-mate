import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, IsOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`${styles.modal} ${IsOpen && styles.isOpen}  `} onClick={closeModal}>
      
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
