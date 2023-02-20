import React from "react";
import { Link } from "react-router-dom";
import styles from "./AreaItem.module.css";

interface Props {
  area: {
    value: string;
    name: string;
  };
}

const AreaItem = ({ area }: Props) => {
  return (
    <li className={styles.arealist}>
      <Link to="/list" state={area}>
        {area.name}
      </Link>
    </li>
  );
};

export default AreaItem;
