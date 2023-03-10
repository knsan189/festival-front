import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
// import FestivalList from "../../components/Festival/FestivalList";
import Sidebar from "../../components/section/sidebar/Sidebar";
import styles from "./Festival.module.css";

const Festival = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [areaCodes, setAreaCodes] = useState([]);

  const [inputs, setInputs] = useState({
    pageNo: 1,
    arrange: "R",
    // areaCode: areaData && areaData,
    // areaName: historyAreaName && "#" + historyAreaName,
  });

  const { pageNo, arrange } = inputs;

  // const areaSelect = (data) => {
  //   const nextInputs = {
  //     ...inputs,
  //     areaCode: data.target.value,
  //     areaName: data.target.textContent,
  //     pageNo: 1,
  //   };
  //   setInputs(nextInputs);
  // };

  // const selectPageNo = (data) => {
  //   const nextInputs = {
  //     ...inputs,
  //     pageNo: data.target.textContent,
  //   };
  //   setInputs(nextInputs);
  // };

  // const selectArrage = (data) => {
  //   const nextInputs = {
  //     ...inputs,
  //     arrange: data,
  //   };
  //   setInputs(nextInputs);
  // };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // festivals
    //   .thisMonthFestival(eventDate, pageNo, arrange, areaCode, (setting) => setLoading(setting))
    //   .then((festivals) => setFestivalInfo(festivals));
    // festivals.areaCodes().then((Codes) => setAreaCodes(Codes));
  }, []);

  const onChangeDate = useCallback((newDate: Date) => {
    setDate(newDate);
  }, []);

  return (
    <section className={styles.list}>
      {/* <FestivalList
        date={date}
        areaName={areaName}
        selectPageNo={selectPageNo}
        pageNo={pageNo}
        selectArrage={selectArrage}
        arrange={arrange}
        loading={loading}
        areaData={areaData}
      /> */}
      <Sidebar date={date} onChangeDate={onChangeDate} />
    </section>
  );
};
export default Festival;
