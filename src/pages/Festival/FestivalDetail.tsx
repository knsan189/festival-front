/* eslint-disable react/no-danger */
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import FestivalDetailMap from "../../components/FestivalDetail/FestivalDetailMap";
import styles from "./FestivalDetail.module.css";
import FestivalDetailInfo from "../../components/FestivalDetail/FestivalDetailInfo";
import DetailIntro from "../../components/FestivalDetail/FestivalDetailIntro";
import FestivalService from "../../service/FesitvalService";
import { parseDate } from "../../utils/parse";
import FestivalDetailSlider from "../../components/FestivalDetail/FestivalDetailSlider";

const FestivalDetail = () => {
  const { id } = useParams();
  const [common, setCommon] = useState<FestivalDetailCommon>();
  const [intro, setIntro] = useState<FestivalDetailIntro>();
  const [infos, setInfos] = useState<FestivalDetailInfo[]>([]);

  useEffect(() => {
    (async () => {
      try {
        if (!id) return;
        const { response: newCommon } = await FestivalService.getDetailCommon(id);
        const { response: newIntro } = await FestivalService.getDetailIntro(id);
        const { response: newInfos } = await FestivalService.getDetailInfo(id);
        setCommon(newCommon.body.items.item[0]);
        setIntro(newIntro.body.items.item[0]);
        setInfos(newInfos.body.items.item);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const eventStatus = useMemo(() => {
    if (!intro) return null;
    const today = Number(moment().format("YYYYMMDD"));
    const start = Number(intro.eventstartdate);
    const end = Number(intro.eventenddate);

    if (today < start) {
      return <span className={styles.eventBefore}>진행전</span>;
    }

    if (today > end) {
      return <span className={styles.eventEnd}>이벤트끝</span>;
    }

    return <span className={styles.eventIng}>진행중</span>;
  }, [intro]);

  return (
    <section className={styles.section}>
      {/* <button
        className={styles.addbutton}
        onClick={() => onAdd(festivalInfo, userId)}
        type="button"
      >
        담아두기
      </button> */}
      <div className={styles.title}>
        {eventStatus}
        <h1>{common?.title}</h1>
        <span className={styles.eventDate}>
          {parseDate(intro?.eventstartdate)} ~ {parseDate(intro?.eventenddate)}
        </span>
      </div>
      <div className={styles.slideBox}>
        <FestivalDetailSlider />
      </div>
      <h2>상세정보</h2>
      <div className={styles.info}>
        <pre dangerouslySetInnerHTML={{ __html: common?.overview || "" }} />
        <p dangerouslySetInnerHTML={{ __html: common?.homepage || "" }} />
        <ul className={styles.detailInfo}>
          {infos.map((info) => (
            <FestivalDetailInfo key={info.serialnum} info={info} />
          ))}
        </ul>
      </div>
      {common && <FestivalDetailMap x={common?.mapx} y={common?.mapy} />}
      <DetailIntro intro={intro} common={common} />
      {/* <button
        className={styles.addbutton}
        onClick={() => onAdd(festivalInfo, userId)}
        type="button"
      >
        담아두기
      </button> */}
    </section>
  );
};

export default FestivalDetail;
