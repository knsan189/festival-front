import React from 'react';
import styles from './area.module.css'

const Area = ({selectArea}) => (
    <ul className={styles.area}>
        <li><button type="button" value='0' onClick>#전체</button></li>
        <li><button type="button" value='1' onClick={(event) => selectArea(event)}>#서울</button></li>
        <li><button type="button" value='6'>#부산</button></li>
        <li><button type="button" value='4'>#대구</button></li>
        <li><button type="button" value='2'>#인천</button></li>
        <li><button type="button" value='5'>#광주</button></li>
        <li><button type="button" value='3'>#대전</button></li>
        <li><button type="button">#울산</button></li>
        <li><button type="button">#세종</button></li>
        <li><button type="button">#강원</button></li>
        <li><button type="button">#충북</button></li>
        <li><button type="button">#충남</button></li>
        <li><button type="button">#경북</button></li>
        <li><button type="button">#경남</button></li>
        <li><button type="button">#전북</button></li>
        <li><button type="button">#전남</button></li>
        <li><button type="button">#제주</button></li>
    </ul>
)

export default Area;