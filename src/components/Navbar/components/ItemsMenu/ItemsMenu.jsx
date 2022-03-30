import styles from './ItemsMenu.module.css';
import React from 'react';
import { Link } from "react-router-dom";
import Icon_news  from "../../../../assets/icons/Icon_new";
import Icon_events from "../../../../assets/icons/Icon_events";
import Icon_forum from "../../../../assets/icons/Icon_forum";
import Icon_job from "../../../../assets/icons/Icon_job";
const ItemsMenu = (props) => {
    const {toggle, onClickItem} = props
    return (
        <div className={`${styles.menu} ${toggle ? styles.show : styles.hide}`}>
            <ul className={styles.menu__elements}>
            <Link to="/news" onClick={()=>onClickItem()}>
              <li>
                <Icon_news/>
                <p>NEWS</p>
              </li>
            </Link>
            <Link to="/jobs" onClick={()=>onClickItem()}>
              <li>
                <Icon_job/>
                <p>JOBS</p>
              </li>
            </Link>
            
            <Link to="/events" onClick={()=>onClickItem()}>
              <li>
              <Icon_events/>
              <p>EVENTS</p>
              </li>
            </Link>
            <Link to="/community" onClick={()=>onClickItem()}>
              <li>
                <Icon_job/>
                <p>COMUNITY</p>
              </li>
            </Link>
            <Link to="/questions" onClick={()=>onClickItem()}>
              <li>
                <Icon_forum/>
                <p>FORUM</p>
              </li>
            </Link>
            

          
          </ul>
        </div>

    );

}
export {ItemsMenu}