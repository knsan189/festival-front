import React from "react";
import styles from "./SeasonItem.module.css";

interface Props {
  onChange: (season: Season) => void;
  season: Season;
  activeSeason: Season;
}

const SeasonItem = ({ season, activeSeason, onChange }: Props) => {
  const handleClick = () => {
    onChange(season);
  };

  return (
    <li className={activeSeason.id === season.id ? styles.active : styles.seasontaglist}>
      <button type="button" onClick={handleClick}>
        {season.name}
      </button>
    </li>
  );
};

export default SeasonItem;
