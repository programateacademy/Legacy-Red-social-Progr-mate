import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RenderPostHome from "../components/RenderPostHome/RenderPostHome";
import Posts from "../components/homePublications/Posts";
import FilterHome from "../components/filterHome/FilterHome";
import BodyProfile from "../components/Profile/BodyProfile";
import style from "../components/filterHome/filterHome.module.css";
import Notification from "../components/Notifications/Notification";
import Makingpost from "../components/makingpost/Makingpost";
import Media from "react-media";
import Modals from "../components/modals/Modals";

const HomePage = () => {
    // const [widthScreen, setWidthScreen] = useState();

    return (
      <div className={style.homePage}>
        <div>
          <Navbar />
        </div>

        {/* <Notification /> */}
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
              {/*<Makingpost />*/}
            </div>
            <Modals />
            <Posts />
          </div>
        </div>
        {/* <RenderPostHome />
            <JobCard /> */}
        <Footer />
      </div>
    );
};

export default HomePage;
