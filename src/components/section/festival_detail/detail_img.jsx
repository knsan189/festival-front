import React from 'react';
import styles from './detail_img.module.css'

const DetailImg = ({img}) => {
    const imgUrlChange = img.originimgurl && img.originimgurl.replace('http', 'https')
    return(
                <div className={styles.content} style={{ background : `url( ${imgUrlChange}) center`, backgroundSize : 'cover'}}>
                </div>
    )};

export default DetailImg;