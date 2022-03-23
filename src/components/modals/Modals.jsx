import React from "react";
import FormJobs from "../FormJobs/FormJobs.jsx";
import Icon_job from "../../assets/icons/Icon_job.jsx";
import FormEvent from "../FormEvent/FormEvent";
import Icon_events from "../../assets/icons/Icon_events.jsx";
import FormNews from "../FormNews/Formnews.jsx";
import Icon_news from "../../assets/icons/Icon_new.jsx";
import Modal from "./Modal.jsx"
import { useModals } from "./useModals.jsx";


const Modals = () => {
  const [IsOpenModalJob, openModalJob, closeModalJob] = useModals(false);
  const [IsOpenModalEvent, openModalEvent, closeModalEvent] = useModals(false);
  const [IsOpenModalNews, openModalNews, closeModalNews] = useModals(false);
  console.log(IsOpenModalJob)
  return (
    <div>
      <h2>Hay algo quequieras compartir?</h2>
      <button onClick={openModalNews}>
        <Icon_news />
      </button>
      <Modal IsOpen={IsOpenModalNews} closeModal={closeModalNews}>
        <FormNews />
      </Modal>
      <button onClick={openModalJob}>
        <Icon_job />
      </button>
      <Modal IsOpen={IsOpenModalJob} closeModal={closeModalJob}>
        <FormJobs />
      </Modal>
      <button onClick={openModalEvent}>
        <Icon_events />
      </button>
      <Modal IsOpen={IsOpenModalEvent} closeModal={closeModalEvent}>
        <h3>Evento</h3>
        <p>Hola este es el contenido de mi modal event</p>
        <FormEvent />
      </Modal>
      
    </div>
  );
}

export default Modals;
