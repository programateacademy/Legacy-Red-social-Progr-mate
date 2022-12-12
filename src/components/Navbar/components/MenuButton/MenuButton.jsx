import React from 'react';
import styles from './MenuButton.module.css';
const MenuButton = (props) => {
    const { onClickMenu, iconActive } = props
    return (
        <>
            <span className={styles.btnMenu} onClick={() => onClickMenu()}>
                <i className={iconActive}></i>
            </span>
        </>

    );
}
export { MenuButton }