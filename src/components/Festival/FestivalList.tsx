import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import styles from "./FestivalList.module.css";
import Pagenation from "../Common/Pagenation/Pagenation";
import FestivalArrage from "./FestivalArrage";
import FestivalService from "../../service/FesitvalService";
import Loading from "../Common/Loading/Loading";
import FestivalItem from "./FestivalItem";

interface Props {
  date: Date;
  areaCode: AreaCode;
}

const FestivalList = ({ date, areaCode }: Props) => {
  const [loading, setLoading] = useState(false);
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [arrange, setArrange] = useState<"P" | "R">("P");
  const [pageNo, setPageNo] = useState(1);
  const [options, setOptions] = useState<{ numOfRows: number; totalCount: number }>({
    numOfRows: 30,
    totalCount: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const targetDate = moment(date).format("YYYYMMDD");
        const { response } = await FestivalService.getFestivals({
          areaCode: areaCode.code,
          eventEndDate: targetDate,
          eventStartDate: targetDate,
          arrange,
          pageNo,
          numOfRows: 10,
        });
        const { items, numOfRows, totalCount } = response.body;
        setFestivals(items.item || []);
        setOptions({ numOfRows, totalCount });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [areaCode, date, arrange, pageNo]);

  const onChangeArrange = useCallback((newArrange: "P" | "R") => {
    setArrange(newArrange);
  }, []);

  const onChangePageNo = useCallback((newPageNo: number) => {
    setPageNo(newPageNo);
  }, []);

  return (
    <div className={styles.festivalList}>
      <div className={styles.bar}>
        <h1>
          #{areaCode.name} {date && `#${moment(date).format("YY년 MM월 DD일")}`}
        </h1>
      </div>

      <div className={styles.status}>
        <div className={styles.total}>
          총 <span>{options.totalCount}</span>건
        </div>
        <ul>
          <FestivalArrage arrange={arrange} onChangeArrange={onChangeArrange} />
        </ul>
      </div>

      {!loading ? (
        <ul className={styles.festivals}>
          {festivals.length > 0 ? (
            festivals.map((festival) => (
              <FestivalItem festival={festival} key={festival.contentid} />
            ))
          ) : (
            <p> 조건에 맞는 축제가 없습니다.</p>
          )}
        </ul>
      ) : (
        <Loading />
      )}
      <ul className={styles.pageNum}>
        <Pagenation {...options} pageNo={pageNo} onChangePageNo={onChangePageNo} />
      </ul>
    </div>
  );
};

export default FestivalList;
