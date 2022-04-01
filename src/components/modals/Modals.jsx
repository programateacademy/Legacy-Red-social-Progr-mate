import React from "react";
import FormJobs from "../FormJobs/FormJobs.jsx";
import Icon_job from "../../assets/icons/Icon_job.jsx";
import FormEvent from "../FormEvent/FormEvent";
import Icon_events from "../../assets/icons/Icon_events.jsx";
import FormNews from "../FormNews/Formnews.jsx";
import Icon_news from "../../assets/icons/Icon_new.jsx";
import Modal from "./Modal.jsx"
import { useModals } from "./useModals.jsx";
import "./Modals.css";



const Modals = () => {
  const [IsOpenModalJob, openModalJob, closeModalJob] = useModals(false);
  const [IsOpenModalEvent, openModalEvent, closeModalEvent] = useModals(false);
  const [IsOpenModalNews, openModalNews, closeModalNews] = useModals(false);
  return (
    <div className="containernewposts">
      <h1>¿Hay algo que quieras compartir?</h1>
      <div className="buttonsnewposts">
      <button onClick={openModalJob}>
        <Icon_job width={40} height={40}/>
        <p>JOBS</p>
      </button>
      <Modal IsOpen={IsOpenModalJob} closeModal={closeModalJob}>
        <FormJobs width={40} height={40}/>
      </Modal>
      <button onClick={openModalNews}>
        <Icon_news width={40} height={40}/>
        <p>NEWS</p>
      </button>
      <Modal IsOpen={IsOpenModalNews} closeModal={closeModalNews}>
        <FormNews/>
      </Modal>
      <button onClick={openModalEvent}>
        <Icon_events width={40} height={40}/>
        <p>EVENTS</p>
      </button>
      <Modal IsOpen={IsOpenModalEvent} closeModal={closeModalEvent}>
        <FormEvent />
      </Modal>
      </div>
    </div>
  );
}

export default Modals;
