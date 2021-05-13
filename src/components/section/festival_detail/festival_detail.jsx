import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import DetailImg from './detail_img';
import DetailMap from './detail_map';
import styles from './festival_detail.module.css'
import Slider from 'react-slick'
import DetailInfo from './detail_info';

const FestivalDetail = ({festivals}) => {

    const [details, setDetails] = useState('')
    const [img, setImg] = useState('')
    let data = useLocation().state

    const sessionData = JSON.parse(sessionStorage.getItem('data'))
    
    if(sessionData){
        data = sessionData
    }
    
    const {festivalInfo} = data

    useEffect(() => {
        festivals.contentInfo(festivalInfo.contentid).then(data => setDetails(data))
        festivals.contentImg(festivalInfo.contentid).then(data => setImg(data))
    }, [festivalInfo.contentid, festivals])

    const {overview, homepage, mapx, mapy, tel, title, telname} = details 

    useEffect(()=> {
        sessionStorage.setItem('data', JSON.stringify(data))
    }, [data])

    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [more, setMore] = useState('')
    const moreBtn = useRef(0)
    const moreDetail = (contentid) => {
        const detailInfo = document.getElementById('detailInfo')
        festivals.contentDetail(contentid).then(data => setMore(data)).then(
            console.log(detailInfo.textContent)
        )
        moreBtn.current = 1
        
        
        
    }

    const closeDetail = () =>{
        setMore('')
        moreBtn.current = 0
    }

    return (
            <section className={styles.section}>
                <div className={styles.title}>
                    <h1>{title}</h1>
                    <span>{festivalInfo.eventstartdate} ~ {festivalInfo.eventenddate}</span>
                    <p className={styles.readcount}>조회수 {festivalInfo.readcount}</p>
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
                    <p>{telname}{tel}</p>

                    <ul id="detailInfo">
                        {more && more.map((more, index) => index !==0 && <DetailInfo more={more} key={more.fldgubun}/>)}
                    </ul>

                    <button className={styles.button} style={{ display : moreBtn.current === 0 ? 'block' : 'none'}} onClick={()=> moreDetail(festivalInfo.contentid)}>
                        <i className="fas fa-plus"></i> 
                        내용 더보기
                    </button>

                    <button className={styles.button} style={{ display : moreBtn.current === 1 ? 'block' : 'none'}} onClick={()=> closeDetail()}>
                        <i className="fas fa-minus"></i> 
                        내용 닫기
                    </button>
                </div>
                <DetailMap mapx={mapx} mapy={mapy}/>
            </section>
    );}

export default FestivalDetail;