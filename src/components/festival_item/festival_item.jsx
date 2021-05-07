import React from 'react';
import styles from './festival_item.module.css'


const FestivalItem = ({festivalInfo}) => {

    const imgUrlChange = festivalInfo.firstimage && festivalInfo.firstimage.replace('http', 'https')

            return (
                <li className={styles.item}>
                    <div className={styles.festivalInfo}>
                        <h2>{festivalInfo.title}</h2>
                        <p><span>행사기간</span>{festivalInfo.eventstartdate} ~ {festivalInfo.eventenddate}</p>
                        <p>주소 : {festivalInfo.addr1}</p>
                        <div className={styles.imgBox}><img src={imgUrlChange} alt={festivalInfo.title}/></div>
                    </div>
                </li>
            )
};

export default FestivalItem;