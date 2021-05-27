import React, { memo } from 'react';
import styles from './footer.module.css'

const Footer = memo((props) => (
            <footer className={styles.footer}>
                <div className={styles.row}>
                    <a href="https://kto.visitkorea.or.kr/kor.kto" target="_blank" rel='noopener noreferrer'><img src="./images/logo_foot_gg.png" alt="한국관광공사" /></a>
                    <a href="https://www.mcst.go.kr/kor/main.jsp" target="_blank" rel='noopener noreferrer'><img src="./images/logo_foot_mg.png" alt="문화체육관광부" /></a>
                    <a href="https://www.mcst.go.kr/kor/main.jsp" target="_blank" rel='noopener noreferrer'><img src="./images/logo_foot_public.png" alt="공공데이터포털" /></a>
                </div>
            </footer>
    ))

export default Footer;