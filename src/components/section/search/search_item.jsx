import React from 'react';
import { Link } from 'react-router-dom';
import styles from './search_item.module.css'

const SearchItem = ({item}) => {

    const imgUrlChange = item.firstimage && item.firstimage.replace('http', 'https')

    return (
        <li className={styles.item}>            
            <div className={styles.imgBox}><img src={imgUrlChange} alt={item.title}/></div>
            <div className={styles.festivalInfo}>
                <Link 
                    to={{
                        pathname : '/details', 
                        state : {
                        festivalInfo : item
                    }}} 
                    className={styles.link}>
                    <h2>{item.title}</h2>
                    <p>주소 : {item.addr1}</p>
                </Link>
                <button><i className="fas fa-ellipsis-v"></i></button>
                <div>
                    <button>담아가기</button>
                </div>
        </div>
        
    </li>
    );
}

export default SearchItem;