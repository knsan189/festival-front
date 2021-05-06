import moment from 'moment';
import React from 'react';
import styles from './festival_item.module.css'


const FestivalItem = ({festivalInfo}) => {

    const imgUrlChange = festivalInfo.firstimage.replace('http', 'https')
    
            return (
                <li className={styles.item}>
                    <div className={styles.festivalInfo}>
                        <h2>{festivalInfo.title}</h2>
                        <span>행사기간</span>
                        <p>{festivalInfo.eventstartdate} ~ {festivalInfo.eventenddate}</p>
                        <div className={styles.imgBox}><img src={imgUrlChange} /></div>
                    </div>
                </li>
            )
};

export default FestivalItem;