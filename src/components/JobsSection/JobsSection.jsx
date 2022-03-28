import React from "react";
import FilterPosts from "../FilterPosts/FilterPosts";
import styles from './JobsSection.module.css';
const JobsSection = () => {
    return (
        <section className={styles.jobsSection}>
        <h2>Ofertas</h2>
            <FilterPosts postType="jobs" />
        </section>
    );
}
export { JobsSection };