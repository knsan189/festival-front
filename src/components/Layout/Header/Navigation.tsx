import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const onLogout = useCallback(() => {
    window.alert("로그아웃 되었습니다.");
  }, []);

  // 메뉴 관리
  const [menu, setMenu] = useState(false);
  const menuBtn = () => {
    if (!menu) setMenu(true);
    else setMenu(false);
  };

  return (
    <nav className={styles.nav}>
      <button onClick={menuBtn} className={styles.menuBtn} type="button">
        <i className="fas fa-bars" />
      </button>
      <ul className={styles.menu} style={{ display: !menu ? "none" : "block" }}>
        {/* {userId && (
          <li>
            <button onClick={onLogout} type="button">
              로그아웃
            </button>
          </li>
        )}
        {!userId && (
          <li>
            <Link to={{ pathname: "/login" }}> 로그인 </Link>
          </li>
        )} */}
        <li>
          <Link to={{ pathname: "/mypage" }}> 찜 목록 </Link>
        </li>
        <li>
          <Link to={{ pathname: "/list" }}>축제 한눈에 보기 </Link>
        </li>
        <li>
          <Link to={{ pathname: "/main" }}>인기축제 보기</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
