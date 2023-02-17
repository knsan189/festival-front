import React, { useEffect, useState } from "react";
import Itemdata from "../components/sunkist/itemdata.json";
import SeasonBlock from "../components/sunkist/seasonBlock/seasonBlock";
import AreaBlock from "../components/sunkist/areaBlock/areaBlock";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "../styles/main.module.css";

const Main = () => {
  const [userId, setUserId] = useState();
  const [addShow, setAddShow] = useState(0);
  const addShowDown = () =>
    setAddShow(addShow === 0 ? addShow + 1 : addShow - 1);

  useEffect(() => {
    sessionStorage.clear();
  });

  // 로그인 상태 확인
  //   useEffect(() => {
  //     authService.onAuthChange((user) => setUserId(user));
  //     return () => {
  //       setUserId(null);
  //     };
  //   }, [authService]);
  //

  return (
    <>
      <Header userId={userId} />
      <section className={styles.container}>
        <SeasonBlock Itemdata={Itemdata} />
        <AreaBlock
          Itemdata={Itemdata}
          addShow={addShow}
          addShowDown={addShowDown}
        />
      </section>
      <Footer />
    </>
  );
};

export default Main;
