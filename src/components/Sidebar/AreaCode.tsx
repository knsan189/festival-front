import React, { useMemo } from "react";
import styles from "./AreaCode.module.css";

interface Props {
  areaCode: AreaCode;
  activeAreaCode: AreaCode;
  onChangeActiveAreaCode: (code: AreaCode) => void;
}
const AreaItem = ({ areaCode, activeAreaCode, onChangeActiveAreaCode }: Props) => {
  const { name, code } = areaCode;
  const areaName = useMemo(() => {
    switch (name) {
      case "세종특별자치시":
        return "세종";
      case "충청북도":
        return "충북";
      case "충청남도":
        return "충남";
      case "경상북도":
        return "경북";
      case "경상남도":
        return "경남";
      case "전라북도":
        return "전북";
      case "전라남도":
        return "정남";
      case "제주도":
        return "제주";
      case "강원도":
        return "강원";
      default:
        return name;
    }
  }, [name]);

  const handleClick = () => {
    onChangeActiveAreaCode(areaCode);
  };

  return (
    <li>
      <button
        type="button"
        className={activeAreaCode.code === code ? styles.active : styles.button}
        onClick={handleClick}
      >
        #{areaName}
      </button>
    </li>
  );
};
export default AreaItem;
