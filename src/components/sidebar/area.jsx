import React, { useRef } from 'react';
import styles from './area.module.css'
import AreaItem from './area_item'


const Area = ({areaSelect, areaCodes, areaCode}) => {

    return (
    <ul className={styles.area}>
        <li><button type='button'>#전체</button></li>
        {
            areaCodes.map(code => <AreaItem areaSelect={areaSelect} areaCodes={code} key={code.code} areaCode={areaCode}/>)
        }
    </ul>
    )
}

export default Area;