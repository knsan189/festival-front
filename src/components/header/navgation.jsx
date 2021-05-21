import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './navgation.module.css'

const Navgation = ({userId, authService}) => {
    const onLogout = useCallback(() => {
        authService.logout()
    },[authService])

    return (
    <>
        <nav>
            <button className={styles.menuBtn}><i className="fas fa-bars"></i></button>
            <ul className={styles.menu}>
                {
                userId &&
                <li>
                    <button onClick={onLogout}>로그아웃</button>
                </li>
                }
                {!userId &&
                <li>
                    <Link to={{pathname: '/login'}}> 로그인 </Link>
                </li>
                }
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
            }
export default Navgation;