import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './areaCode.module.css';

const AreaCode = memo(({areaValue, areaName, area}) => {
    
    return (
        <li className={styles.arealist}>
            <Link to={{
                pathname : '/list',
                state : {
                    areaCode : areaValue,
                    areaName : areaName
                }
            }}>
                {areaName}
            </Link>
        </li>
    )

    
})

export default AreaCode;