import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'
import HeaderSearch from './header_search';
import Navgation from './navgation';

const Header = memo(({userId, authService, getKeyword}) => (
        <header className={styles.header}>
           <div className={styles.row}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src="./images/logo2.jpg" alt="logo" />
                    </Link>
                </div>
                <HeaderSearch getKeyword={getKeyword}/>
                <Navgation userId={userId} authService={authService}/>
           </div>
        </header>
    ))

export default Header;