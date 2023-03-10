import React, { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./festival_item.module.css";

const FestivalItem = memo(({ festivalInfo, festivalRepository, userId }) => {
  // URL http -> https로 변환
  let imgUrlChange =
    festivalInfo.firstimage2 &&
    festivalInfo.firstimage2.replace("http", "https");
  imgUrlChange = imgUrlChange || "./images/noimage1.jpg";

  // 날짜 사이에 점(.) 추가
  const date1 = String(festivalInfo.eventstartdate);
  const year1 = date1.substring(0, 4);
  const month1 = date1.substring(4, 6);
  const day1 = date1.substring(6, 8);
  const dateRefresh1 = year1 + "." + month1 + "." + day1;

  const date2 = String(festivalInfo.eventenddate);
  const year2 = date2.substring(0, 4);
  const month2 = date2.substring(4, 6);
  const day2 = date2.substring(6, 8);
  const dateRefresh2 = year2 + "." + month2 + "." + day2;
  //

  const history = useHistory();

  const onAdd = (festivalInfo, userId) => {
    if (!userId) {
      history.push("/login");
      alert("로그인 후 이용해주세요.");
      return;
    }

    if (window.confirm("축제를 찜목록에 추가하시겠습니까?")) {
      festivalRepository.saveFestival(festivalInfo, userId).then(useConfirm);
    } else {
      return;
    }
  };

  const useConfirm = () => {
    if (window.confirm("찜 목록에서 확인하시겠습니까?")) {
      history.push("/mypage");
    } else return;
  };

  return (
    <li className={styles.item}>
      <div className={styles.imgBox}>
        <img src={imgUrlChange} alt={festivalInfo.title} />
      </div>
      <div className={styles.festivalInfo}>
        <Link
          to={{ pathname: "/details", state: { festivalInfo } }}
          contentid={festivalInfo.contentid}
          className={styles.link}
        >
          <h2>{festivalInfo.title}</h2>
          <p>
            [{dateRefresh1} ~ {dateRefresh2}]
          </p>
          <p>주소 : {festivalInfo.addr1}</p>
        </Link>
        <div>
          <button onClick={() => onAdd(festivalInfo, userId)}>
            <i className="fas fa-plus"></i>{" "}
          </button>
        </div>
      </div>
    </li>
  );
});

export default FestivalItem;
