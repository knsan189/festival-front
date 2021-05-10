import React, { memo } from 'react';
import styles from './festival_item.module.css'


const FestivalItem = memo(({festivalInfo}) => {

    const imgUrlChange = festivalInfo.firstimage && festivalInfo.firstimage.replace('http', 'https')

            return (
                <li className={styles.item}>
                    <div className={styles.imgBox}><img src={imgUrlChange} alt={festivalInfo.title}/></div>
                    <div className={styles.festivalInfo}>
                        <h2>{festivalInfo.title}</h2>
                        <p>[{festivalInfo.eventstartdate} ~ {festivalInfo.eventenddate}]</p>
                        <p>주소 : {festivalInfo.addr1}</p>
                        <button><i className="fas fa-ellipsis-v"></i></button> 
                    </div>
                </li>
            )
});

export default FestivalItem;