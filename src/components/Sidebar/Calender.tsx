import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import CalenderWeek from "./CalenderWeek";
import styles from "./Calender.module.css";
import HolidayService from "../../service/HolidayService";

interface Props {
  date: Date;
  onChangeDate: (date: Date) => void;
}

const Calender = ({ date, onChangeDate }: Props) => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  const target = moment(date);
  const weeks = useMemo(() => {
    const firstWeek = target.startOf("month").week();
    const lastWeek = target.endOf("month").week() === 1 ? 53 : target.clone().endOf("month").week();
    const arr: number[] = [];
    for (let i = firstWeek; i <= lastWeek; i += 1) {
      arr.push(i);
    }
    return arr;
  }, [target]);

  const month = `${Number(target.format("MM"))}월`;
  const handleClickButton = (num: number) => {
    const newDate = moment(date).add(num, "month").toDate();
    onChangeDate(newDate);
  };

  useEffect(() => {
    (async () => {
      const { response } = await HolidayService.getHolidays(date);
      setHolidays(response.body.items.item);
    })();
  }, [date]);

  return (
    <div className={styles.calender}>
      <div className={styles.bar}>
        <div className={styles.title}>
          <button onClick={() => handleClickButton(-1)} type="button">
            <i className="fas fa-chevron-left" />
          </button>
          <h3>{month}</h3>
          <button onClick={() => handleClickButton(1)} type="button">
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
          {weeks.map((key) => (
            <CalenderWeek
              date={date}
              key={key}
              week={key}
              holidays={holidays}
              onChangeDate={onChangeDate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calender;
