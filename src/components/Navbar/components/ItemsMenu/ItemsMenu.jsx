import styles from './ItemsMenu.module.css';
import React from 'react';
import { Link } from "react-router-dom";
import Icon_news from "../../../../assets/icons/Icon_new";
import Icon_events from "../../../../assets/icons/Icon_events";
import Icon_forum from "../../../../assets/icons/Icon_forum";
import Icon_job from "../../../../assets/icons/Icon_job";
import Icon_cohorte from '../../../../assets/icons/Icon_cohorte';
const ItemsMenu = (props) => {
  const { toggle, onClickItem } = props
  return (
    <div className={`${styles.menu} ${toggle ? styles.show : styles.hide}`}>
      <ul className={styles.menu__elements}>
        <Link to="/news" onClick={() => onClickItem()}>
          <li className={styles.element}>
            <Icon_news width={30} height={30} />
            <p>NEWS</p>
          </li>
        </Link>
        <Link to="/jobs" onClick={() => onClickItem()}>
          <li className={styles.element}>
            <Icon_job width={30} height={30} />
            <p>JOBS</p>
          </li>
        </Link>

        <Link to="/events" onClick={() => onClickItem()}>
          <li className={styles.element}>
            <Icon_events width={30} height={30} />
            <p>EVENTS</p>
          </li >
        </Link>
        <Link to="/community" onClick={() => onClickItem()}>
          <li className={styles.element}>
            <Icon_cohorte width={30} height={30} />
            <p>COMUNITY</p>
          </li>
        </Link>
        <Link to="/questions" onClick={() => onClickItem()}>
          <li className={styles.element}>
            <Icon_forum width={30} height={30} />
            <p>FORUM</p>
          </li>
        </Link>



      </ul>
    </div>

  );

}
export { ItemsMenu }