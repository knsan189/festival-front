import React from 'react';
import styles from './detail_img.module.css'

const DetailImg = ({img}) => {
    
    return(
                <div className={styles.content} style={{ background : `url( ${img.originimgurl}) center`, backgroundSize : 'cover'}}>
                </div>
    )};

export default DetailImg;