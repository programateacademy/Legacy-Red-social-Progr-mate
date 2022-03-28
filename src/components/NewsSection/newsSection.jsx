import React from "react";
import FilterPosts from "../FilterPosts/FilterPosts";
import BodyProfile from "../Profile/BodyProfile";
import styles from "./newsSection.module.css";
import style from "../filterHome/filterHome.module.css";
import Media from "react-media";
import ProfileMain from "../Profile/ProfileMain/ProfileMain";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
const NewsSection = () => {
    const { dataProfile } =
    useContext(DataContext);
  return (
    <section className={styles.newsSection}>
          <h2>Noticias</h2>
          <div>
              <div>
                  <FilterPosts postType="news" />
              </div>
      </div>
    </section>
  );
};
export { NewsSection };
