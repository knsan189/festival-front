import React, { useEffect, useState } from "react";
import FestivalService from "../../service/FesitvalService";
import styles from "./Area.module.css";
import AreaCode from "./AreaCode";

interface Props {
  activeAreaCode: AreaCode;
  onChangeActiveAreaCode: (areaCode: AreaCode) => void;
}

const Area = ({ activeAreaCode, onChangeActiveAreaCode }: Props) => {
  const [areaCodes, setAreaCodes] = useState<AreaCode[]>([]);

  useEffect(() => {
    (async () => {
      const { response } = await FestivalService.getAreaCodes();
      setAreaCodes(response.body.items.item);
    })();
  }, []);

  return (
    <ul className={styles.area}>
      <li>
        <button
          type="button"
          className={activeAreaCode.code !== "" ? styles.button : styles.active}
          onClick={() => onChangeActiveAreaCode({ code: "", name: "전체", rnum: 0 })}
        >
          #전국
        </button>
      </li>
      {areaCodes.map((areaCode) => (
        <AreaCode
          key={areaCode.code}
          areaCode={areaCode}
          activeAreaCode={activeAreaCode}
          onChangeActiveAreaCode={onChangeActiveAreaCode}
        />
      ))}
    </ul>
  );
};

export default Area;
