import React, { memo } from 'react';
import styles from './area.module.css'
import AreaItem from './area_item'


const Area = memo(({areaSelect, areaCodes, areaCode}) => {

    return (
    <ul className={styles.area}>
        <li><button type='button' className={areaCode ? styles.button : styles.active} value='' onClick={(event) => areaSelect(event)}>#전체</button></li>
        {
            areaCodes.map(code => <AreaItem areaSelect={areaSelect} areaCodes={code} key={code.code} areaCode={areaCode}/>)
        }
    </ul>
    )
})

export default Area;