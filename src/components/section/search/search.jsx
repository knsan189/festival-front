import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import FestivalPage from '../festival_list/festival_page';
import SearchList from './search_list';
import styles from './search.module.css'

const Search = ({festivals, authService}) => {

    const history = useHistory()
    let historyState = history?.location?.state

    // Header 에서 입력된 검색어 처리 세션 스토리지에 저장해서 사용
    const sessionData = JSON.parse(sessionStorage.getItem('keyword'))
    if(sessionData) historyState = sessionData

    
    useEffect(()=>{
        sessionStorage.setItem('keyword', JSON.stringify(historyState))
    }, [historyState])

    
    const [keyword, setKeyword] = useState(historyState.keyword)
    
    // SearchList에서 다시 검색 요청시 처리
    const getKeyword = (value) => {
        setKeyword(value)
        sessionStorage.setItem('keyword', JSON.stringify({keyword : value}))
    }

    const [pageNo, setPageNo] = useState(1)

    const selectPageNo = (data) => {
        setPageNo(data.target.textContent)
    }


    // API 요청 처리
    const [festivalInfo, setFestivalInfo] = useState()
    useEffect(()=> {
        festivals.searchKeyword(keyword, pageNo).then(data => setFestivalInfo(data))
    }, [festivals, keyword, pageNo])
    //

    // 라우터 이동 후 로그인 확인
    const [userId, setUserId] = useState()

    useEffect(() => {
        let isMount = true;
        authService.onAuthChange(user => {
          if(isMount) {
            setUserId(user)
          }
        })
        return () => {isMount = false}
      }, [authService])

    
     // 페이지 번호 생성 위한 함수
    const pageNum = []
    if(festivalInfo){
        for(let i = 0; festivalInfo.numOfRows * i < festivalInfo.totalCount; i++){
            pageNum.push(i)
        }
    }
    //

    return (
        <>
            <Header userId={userId} authService={authService} getKeyword={getKeyword}/>
                <SearchList keyword={keyword} festivalInfo={festivalInfo}/>
                <ul className={styles.pageNum}>
                    {pageNum.map((num, index) => <FestivalPage key={num} num={index} selectPageNo={selectPageNo} pageNo={pageNo}/>)}
                </ul> 
            <Footer /> 
        </>
    )}

export default Search;