import React, { useCallback, useEffect, useState } from "react";
import Loading from "../loading";
import Recommend from "./SeasonFestival";
import Season from "./SeasonItem";
import styles from "./SeasonList.module.css";
import FestivalService from "../../service/FesitvalService";
import { SEASON_LIST } from "../../config/const";

const SeasonList = () => {
  const [loading, setLoading] = useState(false);
  const [activeSeason, setActiveSeason] = useState<Season>(SEASON_LIST[0]);
  const [show, setShow] = useState<number>(0);
  const [festivals, setFestivals] = useState<Festival[]>([]);

  const showDown = () => {
    setShow(show === 0 ? show + 1 : show - 1);
    if (show === 1) window.scrollTo(0, 0);
  };

  const onChangeSeason = useCallback((season: Season) => {
    setActiveSeason(season);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { response } = await FestivalService.seasonData(
          activeSeason.start,
          activeSeason.end,
          18,
        );
        setFestivals(response.body.items.item);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [activeSeason]);

  return (
    <div className={styles.seasonBox}>
      <h1>
        #계절별 축제 모아보기 <span>#{activeSeason.name}</span>
      </h1>
      <ul className={styles.season}>
        {SEASON_LIST.map((season) => (
          <Season
            key={season.id}
            season={season}
            onChange={onChangeSeason}
            activeSeason={activeSeason}
          />
        ))}
      </ul>

      <ul className={show === 1 ? styles.down : styles.recommend}>
        {loading ? (
          <Loading />
        ) : (
          festivals.map((festival) => <Recommend key={festival.contentid} festival={festival} />)
        )}
      </ul>

      <div className={styles.btnbox}>
        {show === 0 ? (
          <button type="button" className={styles.plusButton} onClick={() => showDown()}>
            축제 더보기
          </button>
        ) : (
          <button type="button" className={styles.minusButton} onClick={() => showDown()}>
            목록 접기
          </button>
        )}
      </div>
    </div>
  );
};

export default SeasonList;
