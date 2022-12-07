import React, { useState } from 'react'
import AdminCommunity from './adminCommunity/AdminCommunity'
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import AdminCrudPosts from './AdminCrudPosts/AdminCrudPosts';
import CreateCohort from '../CreateCohort/CreateCohort'
import style from "./AdminHome.module.css"
/* Renders in AdminHomePage */
const AdminHome = () => {
    const [activePanel, setActivePanel] = useState('users')
    const setActiveState = (panel) => {
        setActivePanel(panel)
        console.log(activePanel)
    }
    const panelReturned = (panel) => {
        switch (panel) {
            case 'news':
                return <AdminCrudPosts name={"Noticias"} postType={"news"} fields={[]} activePanel={activePanel} />
            case 'jobs':
                return (<AdminCrudPosts name={"Ofertas"} postType={"jobs"} fields={["company", "place", "modality", "salary", "contact"]} activePanel={activePanel}>
                    <th>Compañia</th>
                    <th>Lugar</th>
                    <th>Modalidad</th>
                    <th>Salario</th>
                    <th>Contacto</th>
                </AdminCrudPosts>)
            case 'events':
                return (
                    <AdminCrudPosts name={"Eventos"} postType={"event"} fields={["dateEvent", "link", "place"]} activePanel={activePanel}>
                        <th>Fecha Evento</th>
                        <th>Link</th>
                        <th>Lugar</th>
                    </AdminCrudPosts>
                )
            case 'forum':
                return <AdminCrudPosts name={"Preguntas"} postType={"questions"} fields={[]} activePanel={activePanel}></AdminCrudPosts >
            case 'cohorts':
                return <CreateCohort />
            case 'users':
                return <AdminCommunity />
            default:
                return <AdminCommunity />
        }
    }
    return (
        <div className={style.home_container}>
            <div className={style.admin_navigation}><AdminNavigation setActiveState={setActiveState} activePanel={activePanel} /></div>
            {<div className={style.admin_panel}>
                {panelReturned(activePanel)}
            </div>}
        </div>
    );
};

export default AdminHome;
