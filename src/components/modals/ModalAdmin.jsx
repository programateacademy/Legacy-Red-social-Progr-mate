import React from "react";
import FormJobs from "../FormJobs/FormJobs.jsx";
import Icon_job from "../../assets/icons/Icon_job.jsx";
import Modal from "./Modal.jsx";
import { useModals } from "./useModals.jsx";

const Modals = () => {
  const [IsOpenModalJob, openModalJob, closeModalJob] = useModals(false);
  console.log(IsOpenModalJob);
  return (
    <div>
      <h2>Hay algo quequieras compartir?</h2>
      <button onClick={openModalJob}>
        <Icon_job />
      </button>
      <Modal IsOpen={IsOpenModalJob} closeModal={closeModalJob}>
        <FormJobs />
      </Modal>
    </div>
  );
};

export default Modals;
