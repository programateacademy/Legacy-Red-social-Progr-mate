import {useModals} from "../../modals/useModals"
import React from "react"
import Modal from "../../modals/Modal" 
import ProfileEditor from "../../ProfileEditor/ProfileEditor"

const ModalCompleteProfile = ({id}) => {
    const [IsOpenModalCompleteProfile, openModalCompleteProfile, closeModalJobCompleteProfile] = useModals(false);
    
    return (
    <>
        <button onClick={openModalCompleteProfile}>
            EDITAR
        </button>
        <Modal IsOpen={IsOpenModalCompleteProfile} closeModal={closeModalJobCompleteProfile}>
            <ProfileEditor id={id}/>
        </Modal>
    </>
    )
}

export default ModalCompleteProfile;