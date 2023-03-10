import React, { useState } from "react";
import moment from "moment";
import CalenderWeek from "./calender_week";
import styles from "./Calender.module.css";

interface Props {
  activeDate: Date;
  onChangeDate: (date: Date) => void;
}

const Calender = ({ activeDate, onChangeDate }: Props) => {
  const [date, setDate] = useState(new Date());
  const target = moment(date);
  const firstWeek = target.startOf("month").week();
  const lastWeek = target.endOf("month").week() === 1 ? 53 : target.clone().endOf("month").week();
  const weeks = [];
  // const holidayDate =
  //   holiday && (holiday.length > 1 ? holiday.map((obj) => obj.locdate) : holiday.locdate);

  const calenderArr = () => {
    let result = [];
    for (let week = firstWeek; week <= lastWeek; week += 1) {
      result = result.concat(
        <CalenderWeek
          target={today}
          key={week}
          week={week}
          dayInfo={dayInfo}
          seletedDate={seletedDate}
          holiday={holiday}
          holidayDate={holidayDate}
        />,
      );
    }
    return result;
  };
  console.log(firstWeek);
  console.log(lastWeek);

  const month = `${Number(target.format("MM"))}월`;

  const handleClickButton = () => {};

  return (
    <div className={styles.calender}>
      <div className={styles.bar}>
        <div className={styles.title}>
          <button onClick={handleClickButton} type="button">
            <i className="fas fa-chevron-left" />
          </button>
          <h3>{month}</h3>
          <button onClick={handleClickButton} type="button">
            <i className="fas fa-chevron-right" />
          </button>
        </div>
        <span>{target.format("YYYY")}</span>
      </div>

      <table className={styles.table} border={1}>
        <tbody>
          <tr>
            <td className={styles.td}>일</td>
            <td className={styles.td}>월</td>
            <td className={styles.td}>화</td>
            <td className={styles.td}>수</td>
            <td className={styles.td}>목</td>
            <td className={styles.td}>금</td>
            <td className={styles.td}>토</td>
          </tr>
          {/* {calenderArr()} */}
        </tbody>
      </table>
    </div>
  );
};

export default Calender;
