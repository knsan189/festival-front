import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import FestivalPage from '../festival_list/festival_page';
import SearchItem from './search_item';
import styles from './search_list.module.css'

const SearchList = ({festivals, authService}) => {

    const history = useHistory()
    let historyState = history?.location?.state
    const sessionData = JSON.parse(sessionStorage.getItem('data'))
    if(sessionData) historyState = sessionData

    const {keyword} = historyState

    useEffect(()=>{
        sessionStorage.setItem('data', JSON.stringify(historyState))
    }, [historyState])


    // API 요청 처리

    const [festivalInfo, setFestivalInfo] = useState()
    useEffect(()=> {
        festivals.searchKeyword(keyword).then(data => setFestivalInfo(data))
    }, [festivals, keyword])
    
    //

    const [userId, setUserId] = useState()

    useEffect(() => {

        const stopAuth = () => authService.onAuthChange(user => setUserId(user))
        stopAuth()
        return () => {
            stopAuth()
        };

    }, [authService])

    // 페이지 번호 생성 위한 함수
    const pageNum = []
    if(festivalInfo){
        for(let i = 0; festivalInfo.numOfRows * i < festivalInfo.totalCount; i++){
            pageNum.push(i)
        }
    }
    return(

        <>
            <Header userId={userId} authService={authService}/>
                <section className={styles.container}>
                    <h1>{keyword}로 검색한 결과 총 {festivalInfo && festivalInfo.totalCount}건</h1>
                    <ul>
                        
                        {
                            festivalInfo
                                ? festivalInfo.items.item.length > 1
                                    ?   festivalInfo.items.item.map((item) => <SearchItem item={item} key={item.contentid} />)
                                    :   <SearchItem item={festivalInfo.items.item} />
                                : <p> 검색 결과가 없습니다</p>
                        }
                    </ul>
                </section>
                <ul className={styles.pageNum}>
                    {pageNum.map((num, index) => <FestivalPage key={num} num={index}/>)}
                </ul> 
            <Footer />       
        </>
    );
}
export default SearchList;