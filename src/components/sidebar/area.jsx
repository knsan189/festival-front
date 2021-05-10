import React from 'react';
import styles from './area.module.css'

const Area = (props) => (
    <ul className={styles.area}>
        <li><button type="button">#전체</button></li>
        <li><button type="button">#서울</button></li>
        <li><button type="button">#부산</button></li>
        <li><button type="button">#대구</button></li>
        <li><button type="button">#인천</button></li>
        <li><button type="button">#광주</button></li>
        <li><button type="button">#대전</button></li>
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