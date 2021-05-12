import React, { useEffect, useState } from 'react';
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
    const moreDetail = (contentid) => {
        festivals.contentDetail(contentid).then(data => setMore(data))
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
                <pre dangerouslySetInnerHTML={{__html: overview }}></pre>
                <p dangerouslySetInnerHTML={{__html: homepage }}></p>
                <p>{telname}{tel}</p>    
                    <ul>
                        {more && more.map((more, index) => index !==0 && <DetailInfo more={more} key={more.fldgubun}/>)}
                    </ul>
                <button onClick={()=> moreDetail(festivalInfo.contentid)}>정보 더보기</button>
                <DetailMap mapx={mapx} mapy={mapy}/>
            </section>
    );}

export default FestivalDetail;