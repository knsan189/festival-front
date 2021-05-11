import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './festival_item.module.css'


const FestivalItem = memo(({festivalInfo}) => {

    const imgUrlChange = festivalInfo.firstimage && festivalInfo.firstimage.replace('http', 'https')
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
                <Link to={{pathname : '/details', state : {festivalInfo}}} contentid={festivalInfo.contentid}>
                    <li className={styles.item}>
                        <div className={styles.imgBox}><img src={imgUrlChange} alt={festivalInfo.title}/></div>
                        <div className={styles.festivalInfo}>
                            <h2>{festivalInfo.title}</h2>
                            <p>[{dateRefresh1} ~ {dateRefresh2}]</p>
                            <p>주소 : {festivalInfo.addr1}</p>
                            <button><i className="fas fa-ellipsis-v"></i></button> 
                        </div>
                    </li>
                </Link>
            )
});

export default FestivalItem;