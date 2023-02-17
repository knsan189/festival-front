import React, { useEffect, useState } from "react";
import Loading from "../loading";
import Recommend from "../sunkist/recommend/recommend";
import SeasonList from "../sunkist/seasonList/seasonList";
import styles from "../../styles/seasonBlock.module.css";

const SeasonBlock = () => {
  const [season, setSeason] = useState<number>(1);
  const [show, setShow] = useState<number>(0);
  const [seasonListItem, setSeasonListItem] = useState([]);

  const showDown = () => {
    setShow(show === 0 ? show + 1 : show - 1);
    if (show === 1) window.scrollTo(0, 0);
  };

  const [startEnd, setStartEnd] = useState({
    start: "",
    end: "",
  });

  const { start, end } = startEnd;

  const seasonChange = (value, start, end) => {
    setSeason(value);
    const nextData = { start: start, end: end };
    setStartEnd(nextData);
    setShow(0);
  };

  useEffect(() => {
    festival
      ?.seasonData(start, end, (setting) => setLoading(setting))
      .then((seasonListItem) => setSeasonListItem(seasonListItem));
  }, [start, end, festival]);

  const [seasonName, setSeasonName] = useState("봄");

  const getSeason = (data) => {
    setSeasonName(data);
  };

  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.seasonBox}>
      <h1>
        #계절별 축제 모아보기 <span>#{seasonName}</span>
      </h1>
      <ul className={styles.season}>
        {Itemdata.seasonList.map((list) => (
          <SeasonList
            key={list.value}
            seasonName={list.name}
            startDate={list.start}
            seasonValue={list.value}
            endDate={list.end}
            season={season}
            seasonChange={seasonChange}
            getSeason={getSeason}
          />
        ))}
      </ul>

      <ul className={show === 1 ? styles.down : styles.recommend}>
        {loading && <Loading />}
        {!loading &&
          seasonListItem.map((item) => <Recommend key={item.contentid} festivalInfo={item} />)}
      </ul>

      <div className={styles.btnbox}>
        {show === 0 ? (
          <button type="button" className={styles.plusButton} onClick={() => showDown()}>
            축제 더보기
          </button>
        ) : (
          <button className={styles.minusButton} onClick={() => showDown()}>
            목록 접기
          </button>
        )}
      </div>
    </div>
  );
};

export default SeasonBlock;
