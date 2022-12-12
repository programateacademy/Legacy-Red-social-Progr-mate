import React from "react";
import FilterPosts from "../FilterPosts/FilterPosts";
import Navbar from "../Navbar/Navbar";
import styles from './JobsSection.module.css';
import LazyLoad from 'react-lazy-load';

const JobsSection = () => {
    return (
        <section className={styles.jobsSection}>
            <Navbar />
            <h2 className={styles.titleSection}>Ofertas</h2>
            <LazyLoad threshold={0.95}>
                <FilterPosts postType="jobs" />
            </LazyLoad>
        </section>
    );
}
export { JobsSection };