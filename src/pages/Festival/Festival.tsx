import React, { useCallback, useState } from "react";
import FestivalList from "../../components/Festival/FestivalList";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Festival.module.css";

const Festival = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [areaCode, setAreaCode] = useState<AreaCode>({ code: "", name: "전체", rnum: 0 });

  const onChangeDate = useCallback((newDate: Date) => {
    setDate(newDate);
  }, []);

  const onChangeAreaCode = useCallback((newAreaCode: AreaCode) => {
    setAreaCode(newAreaCode);
  }, []);

  return (
    <section className={styles.list}>
      <FestivalList date={date} areaCode={areaCode} />
      <Sidebar
        date={date}
        areaCode={areaCode}
        onChangeDate={onChangeDate}
        onChangeAreaCode={onChangeAreaCode}
      />
    </section>
  );
};
export default Festival;
