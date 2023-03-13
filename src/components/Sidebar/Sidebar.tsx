import React from "react";
import Calender from "./Calender";
import Area from "./Area";
import styles from "./Sidebar.module.css";

interface Props {
  areaCode: AreaCode;
  date: Date;
  onChangeDate: (date: Date) => void;
  onChangeAreaCode: (areaCode: AreaCode) => void;
}

const Sidebar = ({ areaCode, date, onChangeDate, onChangeAreaCode }: Props) => {
  return (
    <div className={styles.sidebar}>
      <Calender date={date} onChangeDate={onChangeDate} />
      <Area activeAreaCode={areaCode} onChangeActiveAreaCode={onChangeAreaCode} />
    </div>
  );
};

export default Sidebar;
