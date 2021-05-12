import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import DetailImg from './detail_img';
import DetailMap from './detail_map';
import styles from './festival_detail.module.css'
import Slider from 'react-slick'

const FestivalDetail = ({festivals}) => {

    const [details, setDetails] = useState('')
    const [img, setImg] = useState('')
    const history = useHistory()
    const data = useLocation().state

    if(!data) {
        history.push('/') 
        window.location.reload()
    }
    
    const {festivalInfo} = data

    useEffect(() => {
        festivals.contentInfo(festivalInfo.contentid).then(data => setDetails(data))
        festivals.contentImg(festivalInfo.contentid).then(data => setImg(data))
    }, [festivalInfo.contentid, festivals])

    const {overview, hompage, mapx, mapy, tel, title} = details

    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
                <p>{overview}</p>
                <p>{hompage}</p>
                <p>{tel}</p>
                <p></p>
                {/* <buttton onClick={()=> }> + 더보기</buttton> */}
                <DetailMap mapx={mapx} mapy={mapy}/>
            </section>
    );}

export default FestivalDetail;