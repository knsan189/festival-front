import styles from "./FestivalList.module.css";
import FestivalPage from "./festival_page";
import FestivalArrage from "./festival_arrage";

const FestivalList = ({
  date,
  festivalInfo,
  areaName,
  selectPageNo,
  pageNo,
  selectArrage,
  arrange,
  loading,
  userId,
}) => {
  const { items } = festivalInfo;
  const pageNum = [];
  for (let i = 0; festivalInfo.numOfRows * i < festivalInfo.totalCount; i++) {
    pageNum.push(i);
  }
  const arrage = ["R", "P"];

  return (
    <div className={styles.festivalList}>
      <div className={styles.bar}>
        <h1>
          #축제 {areaName} {date && "#" + date.format("YYYY년 MM월 DD일")}
        </h1>
      </div>

      <div className={styles.status}>
        <div className={styles.total}>
          총 <span>{festivalInfo.totalCount}</span>건
        </div>
        <ul>
          {arrage.map((obj) => (
            <FestivalArrage key={obj} value={obj} selectArrage={selectArrage} arrange={arrange} />
          ))}
        </ul>
      </div>

      {!loading && (
        <ul className={styles.festivals}>
          {items ? (
            items.item.length > 1 ? (
              items.item.map((festivalInfo) => (
                <FestivalItem
                  festivalInfo={festivalInfo}
                  key={festivalInfo.contentid}
                  festivalRepository={festivalRepository}
                  userId={userId}
                />
              ))
            ) : (
              <FestivalItem
                festivalInfo={items.item}
                key={items.item.contentid}
                festivalRepository={festivalRepository}
                userId={userId}
              />
            )
          ) : (
            <p> 조건에 맞는 축제가 없습니다.</p>
          )}
        </ul>
      )}
      <ul className={styles.pageNum}>
        {pageNum.map((num, index) => (
          <FestivalPage key={num} num={index} selectPageNo={selectPageNo} pageNo={pageNo} />
        ))}
      </ul>
    </div>
  );
};

export default FestivalList;
