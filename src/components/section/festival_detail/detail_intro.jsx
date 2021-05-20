import React from 'react';
import styles from './detail_intro.module.css'

const DetailIntro = ({intros, dateChange, details}) => {

    const {eventenddate, eventstartdate, usetimefestival, playtime, eventplace, sponsor1tel, sponsor1, sponsor2} = intros
    return (
        <ul className={styles.intro}>
            <li>
                <p>· 시작일</p> 
                <span>{dateChange(eventstartdate)}</span>
            </li>
            <li>
                <p>· 종료일</p> 
                <span>{dateChange(eventenddate)}</span>
            </li>
            <li>
                <p>· 전화번호</p> 
                <span>{sponsor1tel}</span>
            </li>
            <li>
                <p>· 주소</p>
                <span>{details.addr1}</span>
            </li>
            <li>
                <p>· 행사장소</p>
                <span>{eventplace}</span>
            </li>
            <li>
                <p>· 주최</p> 
                <span>{sponsor1}</span>
            </li>
            <li>
                <p>· 주관</p>
                <span>{sponsor2 || '-'}</span>
            </li>
            <li>
                <p>· 공연시간 </p>
                <span dangerouslySetInnerHTML={{__html:playtime}}></span>
            </li>   
            <li>
                <p>· 이용요금</p> 
                <span dangerouslySetInnerHTML={{__html:usetimefestival}}></span>
            </li>
        </ul>
    );
}
export default DetailIntro;