import React from 'react'
import FormEvent from '../FormEvent/FormEvent';
import FormJobs from '../FormJobs/FormJobs';
import FormNews from '../FormNews/Formnews';
import ForumAddQuestion from '../ForumAddQuestion/ForumAddQuestion';
import Modal from '../modals/Modal';
import { useModals } from '../modals/useModals';
import styles from "./SwitchCreatePost.module.css";
import LazyLoad from 'react-lazy-load';

/* Switch button to create post in Admin Panel */
function SwitchCreatePost({ postType, children }) {
    const [IsOpenModal, openModal, closeModal] = useModals(false);
    /* Button to render depending of post type */
    const selectType = () => {
        switch (postType) {
            case 'news':
                return <FormNews />
            case 'event':
                return <FormEvent />
            case 'jobs':
                return <FormJobs />
            case 'questions':
                return <ForumAddQuestion />
            default:
                return ""
        }
    }
    return (
        <>
            <LazyLoad threshold={0.95}>
                <button onClick={openModal} className={styles.button}>
                    {children}
                </button>
                <Modal IsOpen={IsOpenModal} closeModal={closeModal}>
                    {selectType()}
                </Modal>
            </LazyLoad>
        </>
    )
}

export { SwitchCreatePost }