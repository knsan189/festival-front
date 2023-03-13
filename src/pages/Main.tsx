import React from "react";
import SeasonList from "../components/Main/Season/SeasonList";
import AreaList from "../components/Main/Area/AreaList";
import Month from "../components/Main/Month/Month";
import MainForm from "../components/Main/Form/MainForm";

const Main = () => {
  return (
    <>
      {/* <MainForm /> */}
      <SeasonList />
      <AreaList />
      <Month />
    </>
  );
};

export default Main;
