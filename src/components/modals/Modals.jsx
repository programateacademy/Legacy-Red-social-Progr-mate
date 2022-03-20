import React from "react";
import FormJobs from "../FormJobs/FormJobs.jsx";
import Modal from "./Modal.jsx"
import { useModals } from "./useModals.jsx";

const Modals = () => {
  const [IsOpenModalJob, openModalJob, closeModalJob] = useModals(false);
  const [IsOpenModalEvent, openModalEvent, closeModalEvent] = useModals(false);
  console.log(IsOpenModalJob)
  return (
    <div>
      <h2>Hay algo quequieras compartir?</h2>
      <button onClick={openModalEvent}>Evento </button>
      <Modal IsOpen={IsOpenModalEvent} closeModal={closeModalEvent}>
        <h3>Evento</h3>
        <p>Hola este es el contenido de mi modal event</p>
      </Modal>
      <button onClick={openModalJob}>Oferta de trabajo</button>
      <Modal IsOpen={IsOpenModalJob} closeModal={closeModalJob}>
        <FormJobs/>
      </Modal>
    </div>
  );
}

export default Modals;
