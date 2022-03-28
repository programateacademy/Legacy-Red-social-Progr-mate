import React from "react";
import Footer from "../components/Footer/Footer";
import Posts from "../components/homePublications/Posts";
import BodyProfile from "../components/Profile/BodyProfile";
import style from "../components/filterHome/filterHome.module.css";
import Media from "react-media";
import Modals from "../components/modals/Modals";

const HomePage = () => {
    return (
      <div className={style.homePage}>
        <div className={style.containBody}>
          <Media query="(min-width: 1024px)">
            {(matches) => {
              return (
                matches && (
                  <div className={style.containProfile}>
                    <BodyProfile />
                  </div>
                )
              );
            }}
          </Media>
          <div className={style.mainContent}>
            <div className={style.containFilter}>
            </div>
            <Modals />
            <Posts />
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default HomePage;
