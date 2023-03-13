import React, { useEffect, useState } from "react";
import { MONTH_DESCRIPTION } from "../../config/const";
import FestivalService from "../../service/FesitvalService";
import Loading from "../Common/Loading/Loading";
import SeasonFestival from "../Season/SeasonFestival";
import styles from "./Month.module.css";

const Month = () => {
  const [addShow, setAddShow] = useState(0);
  const addShowDown = () => setAddShow(addShow === 0 ? addShow + 1 : addShow - 1);
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const year = new Date().getFullYear();
        const parsedMonth = `${month < 10 ? "0" : ""}${month}`;
        const target = `${year}${parsedMonth}`;
        const { response } = await FestivalService.getFestivals({
          eventStartDate: `${target}01`,
          eventEndDate: `${target}30`,
        });
        setFestivals(response.body.items.item);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [month]);

  const onChangeMonth = (num: number) => {
    const target = num + month;
    if (target < 1) return;
    if (target > 12) return;
    setMonth(target);
  };

  return (
    <div className={styles.monthBox}>
      <h1>#월별 인기 축제 확인하기 #{month}월</h1>
      {MONTH_DESCRIPTION.map(
        (list) =>
          list.mon === month && (
            <p className={styles.monInfo} key={list.mon}>
              {list.data}
            </p>
          ),
      )}
      <div className={styles.selectDate}>
        <button className={styles.arrowLeft} type="button" onClick={() => onChangeMonth(-1)}>
          <i className="fas fa-chevron-left" />
        </button>
        <p className={styles.arrowCenter}>
          <span>{month}</span>월
        </p>
        <button className={styles.arrowRight} type="button" onClick={() => onChangeMonth(1)}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <ul className={addShow === 1 ? styles.ulListDown : styles.ulList}>
          {festivals.length > 0 ? (
            festivals.map((festival) => (
              <SeasonFestival key={festival.contentid} festival={festival} />
            ))
          ) : (
            <p className={styles.none}>
              <i className="far fa-calendar-times" /> {month}월에는 계획된 행사가없습니다.
            </p>
          )}
        </ul>
      )}

      <div className={styles.btnbox}>
        {festivals.length > 7 &&
          (addShow === 0 ? (
            <button className={styles.plusButton} onClick={addShowDown} type="button">
              축제 더보기
            </button>
          ) : (
            <button className={styles.minusButton} onClick={addShowDown} type="button">
              목록 접기
            </button>
          ))}
      </div>
    </div>
  );
};

export default Month;
