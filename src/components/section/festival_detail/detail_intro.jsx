import React from 'react';
import styles from './detail_intro.module.css'

const DetailIntro = ({intros, dateChange, details}) => {
    console.log(details)

    const {eventenddate, eventstartdate, usetimefestival, playtime, eventplace, sponsor1tel, spendtimefestival, sponsor1, sponsor2} = intros
    return (
        <ul className={styles.intro}>
            <li>시작일 <span>{dateChange(eventstartdate)}</span></li>
            <li>종료일 <span>{dateChange(eventenddate)}</span></li>
            <li>전화번호 <span>{sponsor1tel}</span></li>
            <li>주소 <span>{details.addr1}</span></li>
            <li>행사장소 <span>{eventplace}</span></li>
            <li>주최 <span>{sponsor1}</span></li>
            <li>주관 <span>{sponsor2}</span></li>
            <li>이용요금 <span>{usetimefestival}</span></li>
            <li>공연시간 <span>{playtime}</span></li>
        </ul>
    );
}
export default DetailIntro;