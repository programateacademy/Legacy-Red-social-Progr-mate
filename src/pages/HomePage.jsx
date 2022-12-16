import React from "react";
import Footer from "../components/Footer/Footer";
import Posts from "../components/homePublications/Posts";
import style from "../components/filterHome/filterHome.module.css";
import Modals from "../components/modals/Modals";
import Navbar from "../components/Navbar/Navbar";
import Isla from "../components/islaAccesibilidad/islaFlotante";
import LazyLoad from 'react-lazy-load';

const HomePage = () => {

  return (
    <div className={style.homePage} id="divGeneral">
      <Navbar />
      <LazyLoad threshold={0.95}>
        <div className={style.containBody}>
          <div className={style.mainContent}>
            <div className={style.containFilter}>
            </div>
            <Modals />
            <LazyLoad threshold={0.95}>
              <Posts />
            </LazyLoad>
          </div>
        </div>
      </LazyLoad>
      <Isla />
      <Footer />
    </div>
  );
};

export default HomePage;
