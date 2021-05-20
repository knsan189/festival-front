import React from 'react';
import ReactLoading from 'react-loading'
import styles from './loading.module.css'

const Loading = ({loading}) => (

        <div className={styles.container}> 
            <div className={styles.spinner}> 
                <h2>자료 불러오는중...</h2> 
                <ReactLoading type='spin' color='black' height={'50%'} width={'50%'}/> 
            </div> 
        </div>

    );

export default Loading;