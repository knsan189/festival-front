import React, { memo } from 'react';
import styles from './area.module.css'
import AreaItem from './area_item'


const Area = memo(({areaSelect, areaCodes, areaCode, areaData}) => {

    return (
    <ul className={styles.area}>
        <li>
            <button type='button' className={areaCode ? styles.button : styles.active} value='' onClick={(event) => areaSelect(event)}>#전국</button></li>
        {
            areaCodes.map(code => <AreaItem areaSelect={areaSelect} areaCodes={code} key={code.code} areaCode={areaCode} areaData={areaData}/>)
        }
    </ul>
    )
})

export default Area;