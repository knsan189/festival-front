import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'
import HeaderSearch from './header_search';
import Navgation from './navgation';

const Header = ({userId, authService}) => (
        <header className={styles.header}>
           <div className={styles.row}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src="./images/logo2.jpg" alt="logo" />
                    </Link>
                </div>
                <HeaderSearch />
                <Navgation userId={userId} authService={authService}/>
           </div>
        </header>
    );

export default Header;