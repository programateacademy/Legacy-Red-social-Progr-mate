import React from "react";
import FilterPosts from "../FilterPosts/FilterPosts";
import styles from './EventsSection.module.css';
const EventsSection = () => {
    return (
        <section className={styles.eventsSection}>
        <h2>Eventos</h2>
            <FilterPosts postType="event" />
        </section>
    );
}
export { EventsSection };