import moment from "moment";
import React from "react";
import CalenderDay from "./CalenderDay";

interface Props {
  date: Date;
  week: number;
  holidays: Holiday[];
  onChangeDate: (date: Date) => void;
}

const CalenderWeek = ({ week, date, holidays, onChangeDate }: Props) => {
  return (
    <tr>
      {Array(7)
        .fill(0)
        .map((data, index) => {
          const day = moment(date)
            .clone()
            .startOf("year")
            .week(week)
            .startOf("week")
            .add(index, "day");
          return (
            <CalenderDay
              key={index}
              day={day}
              date={date}
              holidays={holidays}
              onChangeDate={onChangeDate}
            />
          );
        })}
    </tr>
  );
};

export default CalenderWeek;
