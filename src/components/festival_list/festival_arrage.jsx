import React, { memo } from 'react';
import styles from './festival_arrage.module.css'

const FestivalArrage = memo(({value, selectArrage, arrange}) => {
    return (
            <li>
                <button className={value === arrange ? styles.active : styles.button} onClick={() => selectArrage(value)}>{value === 'P' ? '인기순' : value === 'R' && '최신순'}</button>
            </li>
    );
})
export default FestivalArrage;