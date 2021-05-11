import React from 'react';
import styles from './header.module.css'

const Header = (props) => (
        <header className={styles.header}>
           <div className={styles.row}>
                <div className={styles.logo}>
                    <img src="./images/logo1.jpg" alt="로고" />
                </div>
                <nav>
                </nav>
           </div>
        </header>
    );

export default Header;