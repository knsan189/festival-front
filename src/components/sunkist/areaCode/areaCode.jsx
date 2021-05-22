import React, { memo } from 'react';
import styles from './areaCode.module.css';

const AreaCode = memo(({areaValue, areaName, areaChange, area}) => {
            

            return (
                <li className={Number(area) === Number(areaValue) ? styles.active : styles.arealist} onClick={(e) => areaChange(e.target.value)} value={areaValue}>{areaName}</li>
            )

            
})

export default AreaCode;