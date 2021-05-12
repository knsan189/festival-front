import React, { memo } from 'react';
import styles from './area_item.module.css'

const AreaItem = memo(({areaCodes, areaSelect, areaCode}) => {
    const {code, name} = areaCodes
    const areaName = name === '세종특별자치시' ? '세종' 
        : name === '충청북도' ? '충북'
        : name === '충청남도' ? '충남'
        : name === '전라북도' ? '전북'
        : name === '경기도' ? '경기' 
        : name === '경상북도' ? '경북'
        : name === '경상남도' ? '경남'
        : name === '전라남도' ? '전남'
        : name === '제주도' ? '제주'
        : name === '강원도' ? '강원'  
        : name
    return (
            <li>
                <button type="button" className={
                    parseInt(areaCode) === code ? styles.active : styles.button} onClick={(event) => areaSelect(event)} value={code}> #{areaName}</button>
            </li>
    );
})
export default AreaItem;