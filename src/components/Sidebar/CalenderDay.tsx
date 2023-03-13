import React, { useMemo } from "react";
import moment from "moment";
import styles from "./CalenderDay.module.css";

interface Props {
  day: moment.Moment;
  date: Date;
  holidays: Holiday[];
  onChangeDate: (date: Date) => void;
}

const CalenderDay = ({ day, date, holidays, onChangeDate }: Props) => {
  const todayStyle = moment().format("YYYYMMDD") === day.format("YYYYMMDD") && styles.today;

  const holiday = useMemo(() => {
    return holidays.find((d) => d.locdate.toString() === day.format("YYYYMMDD"));
  }, [holidays, day]);

  const color = useMemo(() => {
    const currentMonth = moment(date).format("MM");
    const month = day.format("MM");
    const weekDay = day.format("dddd");
    if (month !== currentMonth) {
      return "#c6c6c6";
    }

    if (
      weekDay === "Sunday" ||
      weekDay === "Saturday" ||
      holiday?.locdate.toString() === day.format("YYYYMMDD")
    ) {
      return "#f65e57";
    }
    return "#666";
  }, [date, day, holiday]);

  const handleClick = () => {
    onChangeDate(day.toDate());
  };

  return (
    <td className={styles.td} id={todayStyle || ""} style={{ color }}>
      <button type="button" onClick={handleClick}>
        {day.format("D")}
        {holiday && <span className={styles.datename}>{holiday.dateName}</span>}
      </button>
    </td>
  );
};

export default CalenderDay;
