import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './festivalCreate.module.css';

const FestivalCreate = memo(({item}) => {
    const {title, eventstartdate, eventenddate, firstimage} = item;
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
    

    return (
            
        
                
                    
                    <li className={styles.list}  style={{background: `url(${img})`, backgroundSize: 'cover'  }}> 
                        <Link to={{pathname: '/details', state : {festivalInfo : item}}}>
                            <p className={styles.fstvname}>{title}</p>
                            <p className={styles.date}>[ {dateRefresh1} ~ {dateRefresh2} ]</p>
                        </Link>
                    </li>
                
                
                
           
    );
})

export default FestivalCreate;