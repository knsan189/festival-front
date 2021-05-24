import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './recommend.module.css';


const Recommend = memo(({festivalInfo}) => {
    const {title, eventstartdate, eventenddate, firstimage} = festivalInfo;
    const img =   firstimage ? firstimage : 'images/noimage1.jpg'
    
    const date1 = String(eventstartdate)
    const year1 = date1.substring(0, 4)
    const month1 = date1.substring(4, 6)
    const day1 = date1.substring(6, 8)
    const dateRefresh1 = year1 + '.' + month1 + '.' + day1;  
    
    const date2 = String(eventenddate)
    const year2 = date2.substring(0, 4)
    const month2 = date2.substring(4, 6)
    const day2 = date2.substring(6, 8)
    const dateRefresh2 = year2 + '.' + month2 + '.' + day2;  
    
    let date = new Date();
    let year = date.getFullYear()              
    let month = (1 + date.getMonth())         
    month = month >= 10 ? month : '0' + month
    let day = date.getDate()                   
    day = day >= 10 ? day : '0' + day 
    const currentDate = year  + month + day  

    return (
        <li className={styles.list}  style={{background: `url(${img}) center no-repeat`, backgroundSize: 'cover'  }} > 
            <Link to={{pathname: '/details', state : {festivalInfo : festivalInfo}}}>
                <p className={styles.fstvname}>{title}</p>
                <p className={styles.date}>[ {dateRefresh1} ~ {dateRefresh2} ]</p>
                {
                (currentDate >= eventstartdate && currentDate <= eventenddate) ? <span className={styles.ing}>진행중</span> : eventenddate < currentDate ? <span className={styles.end}>종료됨</span> : <span className={styles.onSchedule}>예정중</span> 
                }
            </Link>
        </li>
    );
})

export default Recommend;