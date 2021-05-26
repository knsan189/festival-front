import React, { memo } from 'react';
import styles from './seasonList.module.css';

const SeasonList = memo(({seasonName, seasonValue, seasonChange, season, startDate, endDate, getSeason}) => {
    return (
        <>
            {   
                <li className={season === Number(seasonValue) ? styles.active : styles.seasontaglist} 
                    value={seasonValue}  
                    onClick={(e) => {
                        seasonChange(e.target.value, startDate, endDate)
                        getSeason(seasonName)
                    }}>
                        <button> {seasonName} </button>
                </li>
            }
        </>
    );
})

export default SeasonList;