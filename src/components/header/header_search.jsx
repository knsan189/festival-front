import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import styles from './header_search.module.css'

const HeaderSearch = (props) => {
    const history = useHistory()
    const inputRef = useRef()
    
    const handleSearch = () => {
        const value = inputRef.current.value
        history.push({
            pathname : '/searchlist',
            state : {
                keyword : value
            }
        })    
    }

    const onClick = () => {
        handleSearch()
    }

    const onKeyPress = (event) => {
        event.key === 'Enter' && handleSearch()
    }
    return (
            <div className={styles.search}>
                <input ref={inputRef} className={styles.input} type="text" placeholder="축제 검색해보세요 ex) 강원" onKeyPress={onKeyPress}/>
                <button onClick={onClick}><i className="fas fa-search"></i></button>
            </div>
    );
}

export default HeaderSearch;