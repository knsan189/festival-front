import React from 'react';
import styles from './header_search.module.css'

const HeaderSearch = (props) => (
            <div className={styles.search}>
                <input className={styles.input} type="text" placeholder="축제 검색"/>
                <i className="fas fa-search"></i>
            </div>
    );

export default HeaderSearch;