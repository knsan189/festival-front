import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./FestivalItem.module.css";

interface Props {
  festival: Festival;
}

const FestivalItem = ({ festival }: Props) => {
  // URL http -> https로 변환
  let imgUrlChange = festival.firstimage2 && festival.firstimage2.replace("http", "https");
  imgUrlChange = imgUrlChange || "./images/noimage1.jpg";

  const eventStartDate = moment(festival.eventstartdate).format("YYYY.MM.DD");
  const eventEndDate = moment(festival.eventenddate).format("YYYY.MM.DD");

  // const onAdd = (festivalInfo, userId) => {
  //   if (!userId) {
  //     history.push("/login");
  //     alert("로그인 후 이용해주세요.");
  //     return;
  //   }

  //   if (window.confirm("축제를 찜목록에 추가하시겠습니까?")) {
  //     festivalRepository.saveFestival(festivalInfo, userId).then(useConfirm);
  //   } else {
  //     return;
  //   }
  // };

  // const useConfirm = () => {
  //   if (window.confirm("찜 목록에서 확인하시겠습니까?")) {
  //     history.push("/mypage");
  //   } else return;
  // };

  return (
    <li className={styles.item}>
      <div className={styles.imgBox}>
        <img src={imgUrlChange} alt={festival.title} />
      </div>
      <div className={styles.festivalInfo}>
        <Link to={`/festival/${festival.contentid}`} className={styles.link}>
          <h2>{festival.title}</h2>
          <p>
            [{eventStartDate} ~ {eventEndDate}]
          </p>
          <p>주소 : {festival.addr1}</p>
        </Link>
        {/* <div>
          <button onClick={() => onAdd(festivalInfo, userId)} type="button">
            <i className="fas fa-plus" />
          </button>
        </div> */}
      </div>
    </li>
  );
};

export default FestivalItem;
