import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mypage_item.module.css'

const MypageItem = ({festivalInfo, userId, favorRemove}) => {

    const imgUrlChange = festivalInfo.firstimage2 && festivalInfo.firstimage2.replace('http', 'https')

    // 날짜 사이에 점(.) 추가
    const date1 = String(festivalInfo.eventstartdate)
    const year1 = date1.substring(0, 4)
    const month1 = date1.substring(4, 6)
    const day1 = date1.substring(6, 8)
    const dateRefresh1 = year1 + '.' + month1 + '.' + day1;  
        
    const date2 = String(festivalInfo.eventenddate)
    const year2 = date2.substring(0, 4)
    const month2 = date2.substring(4, 6)
    const day2 = date2.substring(6, 8)
    const dateRefresh2 = year2 + '.' + month2 + '.' + day2;


    return (
                <li className={styles.item}>
                    
                    <div className={styles.imgBox}><img src={imgUrlChange} alt={festivalInfo.title}/></div>
                    <div className={styles.festivalInfo}>
                            <Link to={{pathname : '/details', state : {festivalInfo}}} contentid={festivalInfo.contentid} className={styles.link}>
                                <h2>{festivalInfo.title}</h2>
                                <p>[{dateRefresh1} ~ {dateRefresh2}]</p>
                                <p>주소 : {festivalInfo.addr1}</p>
                            </Link>
                            <button onClick={() => favorRemove(festivalInfo, userId)}><i className="far fa-trash-alt"></i></button>
                    </div>
                    
                </li>
    );
    }
export default MypageItem;