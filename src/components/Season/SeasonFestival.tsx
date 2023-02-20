import React, { useMemo } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import styles from "./SeasonFestival.module.css";

interface Props {
  festival: Festival;
}
const SeasonFestival = ({ festival }: Props) => {
  const { title, eventstartdate, eventenddate, firstimage } = festival;
  const img = firstimage ? firstimage.replace("http", "https") : "images/noimage1.jpg";

  const checkExpired = useMemo(() => {
    const today = Date.now();
    const end = new Date(moment(eventenddate).format()).getTime();
    const start = new Date(moment(eventstartdate).format()).getTime();

    if (end < today) {
      return <span className={styles.end}>종료됨</span>;
    }

    if (start < today) {
      return <span className={styles.ing}>진행중</span>;
    }

    return <span className={styles.onSchedule}>예정중</span>;
  }, [eventenddate, eventstartdate]);

  return (
    <li
      className={styles.list}
      style={{ background: `url(${img}) center no-repeat`, backgroundSize: "cover" }}
    >
      <Link to="/details" state={festival}>
        <div>
          <p className={styles.fstvname}>{title}</p>
          <p className={styles.date}>
            {`${moment(eventstartdate).format("YYYY.MM.DD")} ~ ${moment(eventenddate).format(
              "YYYY.MM.DD",
            )}`}
          </p>
          {checkExpired}
        </div>
      </Link>
    </li>
  );
};

export default SeasonFestival;
