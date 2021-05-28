import React, {memo} from 'react';
import SearchItem from './search_item';
import styles from './search_list.module.css'

const SearchList = memo(({keyword, festivalInfo}) => {
    
    let totalCount, items

    if(festivalInfo){
        totalCount = festivalInfo.totalCount
        items = festivalInfo.items
    }

    return(
            <section className={styles.container}>
                <h1>'{keyword}' 검색한 결과 총 {totalCount}건</h1>
                <ul>
                    
                    {
                        items
                            ? items.item.length > 1
                                ? items.item.map((item) => <SearchItem item={item} key={item.contentid} />)
                                : <SearchItem item={items.item} />
                            : <p>검색 결과가 없습니다</p>
                    }
                </ul>
            </section>
    )
})
export default SearchList;