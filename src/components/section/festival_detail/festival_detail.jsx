import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import DetailImg from './detail_img';
import DetailMap from './detail_map';
import styles from './festival_detail.module.css'
import Slider from 'react-slick'
import DetailInfo from './detail_info';
import moment from 'moment';
import DetailIntro from './detail_intro';
import Header from '../../header/header';
import Footer from '../../footer/footer';

const FestivalDetail = ({festivals}) => {
    
    // 오늘 날짜 가져오기
    const today = moment().format('YYYYMMDD')
    //

    // 페이지 로딩이 완료되면 세션스토리지에 프롭스 임시저장
    let data = useLocation().state
    const sessionData = JSON.parse(sessionStorage.getItem('data'))
    if(sessionData){
        data = sessionData
    }    
    const {festivalInfo} = data

    useEffect(()=> {
        sessionStorage.setItem('data', JSON.stringify(data))
    }, [data])
    //

    // API 요청 처리 시작
    const [details, setDetails] = useState('')
    const [img, setImg] = useState('')
    const [intros, setIntros] = useState('')

    useEffect(() => {
        festivals.contentInfo(festivalInfo.contentid).then(data => setDetails(prev => prev = data))
        festivals.contentImg(festivalInfo.contentid).then(data => setImg(prev => prev = data))
        festivals.contentIntro(festivalInfo.contentid).then(data => setIntros(prev => prev = data))
    }, [festivalInfo.contentid, festivals])

    const {overview, homepage, mapx, mapy, title} = details 
    // 끝


    // 정보 더보기 버튼 클릭시 처리 
    const [more, setMore] = useState('')
    const moreBtn = useRef(0)
    const moreDetail = (contentid) => {
        festivals.contentDetail(contentid).then(data => setMore(data))
        moreBtn.current = 1
    }

    const closeDetail = () =>{
        setMore('')
        moreBtn.current = 0
    }
    //
    

    // slick 슬라이더 세팅값 
    const settings = { dots: false, infinite: true,speed: 500, slidesToShow: 1, slidesToScroll: 1}
    //

    // 날짜 중간에 .표시해주는 함수
    const dateChange = (date) => {
        if(date) {
        const temp = date.toString().split('')
        temp.splice(4, 0, '.')
        temp.splice(7, 0, '.')
        return temp.join('')
        }   
    }

    return (
            <>
                <Header />
                <section className={styles.section}>
                    <div className={styles.title}>
                        {
                            today > festivalInfo.eventstartdate && today < festivalInfo.eventenddate
                                ? <span className={styles.eventIng}>진행중</span>
                                : today < festivalInfo.eventstartdate 
                                    ? <span className={styles.eventBefore}>진행전</span>
                                    : <span className={styles.eventEnd}>이벤트끝</span>
                        }
                        <h1>{title}</h1>
                        <span className={styles.eventDate}>{dateChange(festivalInfo.eventstartdate)} ~ {dateChange(festivalInfo.eventenddate)}</span>
                    </div>
                    <div className={styles.slideBox}>
                        <Slider {...settings}>
                            { 
                                img && img.map(img =><DetailImg img={img} key={img.serialnum} title={title}/>)
                            }
                        </Slider>
                    </div>
                    <h2>상세정보</h2>
                    <div className={styles.info}>
                        <pre dangerouslySetInnerHTML={{__html: overview }}></pre>
                        <p dangerouslySetInnerHTML={{__html: homepage }}></p>
    
                        <ul className={styles.detailInfo}>
                            {more && 
                                more.length > 1 
                                    ? more.map((more, index) => index !==0 && <DetailInfo more={more} key={more.fldgubun}/>)
                                    : more.length === 1 && <DetailInfo more={more} />
                            }
                        </ul>
    
                        <div className={styles.buttonBox}>
                            <button className={styles.button} style={{ display : moreBtn.current === 0 ? 'inline-block' : 'none'}} onClick={()=> moreDetail(festivalInfo.contentid)}>
                                내용 더보기
                                <i className="fas fa-plus"></i> 
                            </button>
        
                            <button className={styles.button} style={{ display : moreBtn.current === 1 ? 'inline-block' : 'none'}} onClick={()=> closeDetail()}>
                                내용 닫기
                                <i className="fas fa-minus"></i> 
                            </button>
                        </div>
                    </div>
                    <DetailMap mapx={mapx} mapy={mapy}/>
                    <DetailIntro intros={intros} details={details} dateChange={dateChange} festivalInfo={festivalInfo}/>
                </section>
                <Footer />
            </>
    );}

export default FestivalDetail;