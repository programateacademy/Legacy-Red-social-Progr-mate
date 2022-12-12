import React from "react";
import FilterPosts from "../FilterPosts/FilterPosts";
import Navbar from "../Navbar/Navbar";
import styles from './EventsSection.module.css';
const EventsSection = () => {
    return (
        <section className={styles.eventsSection}>
            <Navbar />
            <h2 className={styles.titleSection}>Eventos</h2>
            <FilterPosts postType="event" />
        </section>
    );
}
export { EventsSection };