import React from 'react';
import styles from './navgation.module.css'

const Navgation = (props) => (
    <>
        <nav>
            <button className={styles.menuBtn}><i className="fas fa-bars"></i></button>
            <ul>
            </ul>
        </nav>
    </>
    );

export default Navgation;