import React from "react";
import SeasonList from "../components/Season/SeasonList";
import AreaList from "../components/Area/AreaList";
import Month from "../components/Month/Month";

const Main = () => {
  return (
    <>
      <SeasonList />
      <AreaList />
      <Month />
    </>
  );
};

export default Main;
