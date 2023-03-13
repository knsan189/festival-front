import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchItem.module.css";

interface Props {
  festival: Festival;
}
const SearchItem = ({ festival }: Props) => {
  const imgUrlChange = festival.firstimage && festival.firstimage.replace("http", "https");

  return (
    <li className={styles.item}>
      <div className={styles.imgBox}>
        <img src={imgUrlChange} alt={festival.title} />
      </div>
      <div className={styles.festivalInfo}>
        <Link to={`/festival/${festival.contentid}`} className={styles.link}>
          <h2>{festival.title}</h2>
          <p>주소 : {festival.addr1}</p>
        </Link>
      </div>
    </li>
  );
};

export default SearchItem;
