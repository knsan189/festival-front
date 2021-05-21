import React, { memo } from 'react';
import styles from './detail_img.module.css'

const DetailImg = memo(({img}) => {
    
    // URL http -> https로 변환
    const imgUrlChange = img.originimgurl && img.originimgurl.replace('http', 'https')
    return(
                <div className={styles.content} style={{ background : `url( ${imgUrlChange}) center`, backgroundSize : 'cover'}}>
                </div>
    )})

export default DetailImg;