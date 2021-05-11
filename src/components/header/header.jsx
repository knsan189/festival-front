import React from 'react';
import styles from './header.module.css'
import HeaderSearch from './header_search';
import Navgation from './navgation';

const Header = (props) => (
        <header className={styles.header}>
           <div className={styles.row}>
                <div className={styles.logo}>
                    <img src="./images/logo2.jpg" alt="logo" />
                </div>
                <HeaderSearch />
                <Navgation />
           </div>
        </header>
    );

export default Header;