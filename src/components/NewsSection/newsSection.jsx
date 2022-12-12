import React from "react";
import FilterPosts from "../FilterPosts/FilterPosts";
import styles from "./newsSection.module.css";
import Navbar from "../Navbar/Navbar";
import LazyLoad from 'react-lazy-load';

const NewsSection = () => {
  // const { dataProfile } =
  //   useContext(DataContext);
  return (
    <section className={styles.newsSection}>
      <Navbar />
      <h2 className={styles.titleSection}>Noticias</h2>
      <LazyLoad threshold={0.95}>
        <div>
          <div>
            <LazyLoad threshold={0.95}>
              <FilterPosts postType="news" />
            </LazyLoad>
          </div>
        </div>
      </LazyLoad>
    </section>
  );
};
export { NewsSection };
