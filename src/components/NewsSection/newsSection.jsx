import React from "react";
import FilterPosts from "../FilterPosts/FilterPosts";
import styles from "./newsSection.module.css";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Navbar from "../Navbar/Navbar";
const NewsSection = () => {
  const { dataProfile } =
    useContext(DataContext);
  return (
    <section className={styles.newsSection}>
      <Navbar />
      <h2 className={styles.titleSection}>Noticias</h2>
      <div>
        <div>
          <FilterPosts postType="news" />
        </div>
      </div>
    </section>
  );
};
export { NewsSection };
