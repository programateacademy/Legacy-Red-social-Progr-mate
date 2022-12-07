import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, IsOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`${styles.modal} ${IsOpen && styles.isOpen}  `} onClick={closeModal}>
      <div className={styles.modalContainer} onClick={handleModalContainerClick}>
        <button className={styles.modalClose} onClick={closeModal}>
          x
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
