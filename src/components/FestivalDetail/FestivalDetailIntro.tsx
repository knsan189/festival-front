/* eslint-disable react/no-danger */
import React from "react";
import styles from "./FestivalDetailIntro.module.css";

interface Props {
  common?: FestivalDetailCommon;
  intro?: FestivalDetailIntro;
}

const FestivalDetailIntro = ({ intro, common }: Props) => {
  return (
    <ul className={styles.intro}>
      <li>
        <p>· 시작일</p>
        <span>{intro?.eventstartdate}</span>
      </li>
      <li>
        <p>· 종료일</p>
        <span>{intro?.eventenddate}</span>
      </li>
      <li>
        <p>· 전화번호</p>
        <span>{intro?.sponsor1tel}</span>
      </li>
      <li>
        <p>· 주소</p>
        <span>{common?.addr1}</span>
      </li>
      <li>
        <p>· 행사장소</p>
        <span>{intro?.eventplace}</span>
      </li>
      <li>
        <p>· 주최</p>
        <span>{intro?.sponsor1}</span>
      </li>
      <li>
        <p>· 주관</p>
        <span>{intro?.sponsor2 || "-"}</span>
      </li>
      <li>
        <p>· 공연시간 </p>
        <span dangerouslySetInnerHTML={{ __html: intro?.playtime || "" }} />
      </li>
      <li>
        <p>· 이용요금</p>
        <span dangerouslySetInnerHTML={{ __html: intro?.usetimefestival || "" }} />
      </li>
    </ul>
  );
};

FestivalDetailIntro.defaultProps = {
  common: undefined,
  intro: undefined,
};

export default FestivalDetailIntro;
