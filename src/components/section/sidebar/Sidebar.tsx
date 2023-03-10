import React from "react";
import Calender from "../calender/Calender";
import Area from "./area";
import styles from "./Sidebar.module.css";

interface Props {
  date: Date;
  onChangeDate: (date: Date) => void;
}

const Sidebar = ({ date, onChangeDate }: Props) => {
  return (
    <div className={styles.sidebar}>
      <Calender activeDate={date} onChangeDate={onChangeDate} />
      {/* <Area areaSelect={areaSelect} areaCodes={areaCodes} areaCode={areaCode} areaData={areaData} /> */}
    </div>
  );
};

export default Sidebar;
