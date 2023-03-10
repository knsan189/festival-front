import React, { memo } from 'react';
import styles from './festival_page.module.css'

const FestivalPage = memo(({selectPageNo, num, pageNo}) => {

    return (
            <li className={styles.pageNum}>
                <button type="button" className={parseInt(pageNo) === num + 1 ? styles.active : styles.button} onClick={(event) => selectPageNo(event)}>{num + 1}</button>
            </li>
    );
})
export default FestivalPage; 