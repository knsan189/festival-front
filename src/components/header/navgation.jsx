import React, { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navgation.module.css'

const Navgation = memo(({userId, authService}) => {
    
    const onLogout = useCallback(() => {
        alert('로그아웃 되었습니다.')
        authService.logout()

    },[authService])

    // 메뉴 관리
    const [menu, setMenu] = useState(false)
    const menuBtn = () => {
        if(!menu) setMenu(true)
        else setMenu(false)
    }
    
    
    return (
    <>
        <nav className={styles.nav}>
            <button onClick={menuBtn} className={styles.menuBtn}><i className="fas fa-bars"></i></button>
            <ul className={styles.menu} style={{ display : !true ? 'none' : 'block'}}>
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
    )
})
export default Navgation;