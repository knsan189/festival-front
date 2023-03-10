import React, { useEffect, useState } from "react";
import SeasonList from "../components/Season/SeasonList";
import AreaList from "../components/Area/AreaList";
import Month from "../components/Month/Month";

const Main = () => {
  const [userId, setUserId] = useState("");

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
      <SeasonList />
      <AreaList />
      <Month />
    </>
  );
};

export default Main;
