import React from "react";
import { AREA_CODES } from "../../../config/const";
import AreaItem from "./AreaItem";
import styles from "./AreaList.module.css";

const AreaList = () => {
  return (
    <div className={styles.locationBox}>
      <h1>#지역별 축제 확인하기</h1>
      <div className={styles.selectbox}>
        <ul className={styles.area}>
          {AREA_CODES.map((area) => (
            <AreaItem key={area.value} area={area} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AreaList;
