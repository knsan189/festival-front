import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mypage_item.module.css'

const MypageItem = ({festival, userId, favorRemove}) => {

    const imgUrlChange = festival.firstimage2 && festival.firstimage2.replace('http', 'https')

    // 날짜 사이에 점(.) 추가
    const date1 = String(festival.eventstartdate)
    const year1 = date1.substring(0, 4)
    const month1 = date1.substring(4, 6)
    const day1 = date1.substring(6, 8)
    const dateRefresh1 = year1 + '.' + month1 + '.' + day1;  
        
    const date2 = String(festival.eventenddate)
    const year2 = date2.substring(0, 4)
    const month2 = date2.substring(4, 6)
    const day2 = date2.substring(6, 8)
    const dateRefresh2 = year2 + '.' + month2 + '.' + day2;


    return (
                <li className={styles.item}>
                    
                    <div className={styles.imgBox}><img src={imgUrlChange} alt={festival.title}/></div>
                    <div className={styles.festivalInfo}>
                            <Link to={{pathname : '/details', state : {festival}}} contentid={festival.contentid} className={styles.link}>
                                <h2>{festival.title}</h2>
                                <p>[{dateRefresh1} ~ {dateRefresh2}]</p>
                                <p>주소 : {festival.addr1}</p>
                            </Link>
                            <button><i className="fas fa-ellipsis-v"></i></button>
                            <div>
                                <button onClick={() => favorRemove(festival, userId)}>삭제하기</button>
                            </div>
                    </div>
                    
                </li>
    );
    }
export default MypageItem;