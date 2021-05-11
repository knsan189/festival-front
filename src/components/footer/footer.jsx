import React from 'react';
import styles from './footer.module.css'

const Footer = (props) => (
            <footer className={styles.footer}>
                <div className={styles.row}>
                    <p>footer</p>
                    <img src="./festival_project/images/logo_foot_gg.png" alt="한국관광공사" />
                    <img src="./festival_project/images/logo_foot_mg.png" alt="문화체육관광부" />
                </div>
            </footer>
    );

export default Footer;