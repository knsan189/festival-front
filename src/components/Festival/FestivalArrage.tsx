import React from "react";
import styles from "./FestivalArrage.module.css";

interface Props {
  arrange: string;
  onChangeArrange: (arrage: "P" | "R") => void;
}
const FestivalArrage = ({ arrange, onChangeArrange }: Props) => {
  return (
    <>
      <li>
        <button
          className={arrange === "P" ? styles.active : styles.button}
          onClick={() => onChangeArrange("P")}
          type="button"
        >
          인기순
        </button>
      </li>
      <li>
        <button
          className={arrange === "R" ? styles.active : styles.button}
          onClick={() => onChangeArrange("R")}
          type="button"
        >
          최신순
        </button>
      </li>
    </>
  );
};
export default FestivalArrage;
