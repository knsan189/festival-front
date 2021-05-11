import React from 'react';
import styles from './header.module.css'

const Header = (props) => (
        <header>
            <div className={styles.header}>
                <img src="./images/logo1.jpg" alt="로고" />
            </div>
            <nav>
            </nav>
        </header>
    );

export default Header;