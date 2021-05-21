import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navgation.module.css'

const Navgation = (props) => (
    <>
        <nav>
            <button className={styles.menuBtn}><i className="fas fa-bars"></i></button>
            <ul className={styles.menu}>
                <li>
                    <Link to={{pathname: '/login'}}> 로그인 </Link>
                </li>
                <li>
                    <Link to={{pathname: '/mypage'}}> 마이페이지 </Link>
                </li>
                <li>
                    <Link to={{pathname: '/main'}}>메인</Link>
                </li>
            </ul>
        </nav>
    </>
    );

export default Navgation;