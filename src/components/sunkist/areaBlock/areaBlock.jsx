import React, { useEffect, useState } from 'react';
import Loading from '../../loading';
import AreaCode from '../areaCode/areaCode';
import FestivalCreate from '../festivalCreate/festivalCreate';
import styles from './areaBlock.module.css';

const AreaBlock = ({Itemdata, addShow, addShowDown, festival}) => {
    const [ftv, setFtv] = useState([]);
    const [mon, setMon] = useState(1);
    const minus = (mon) => setMon(mon <= 1 ? mon = 12 : mon - 1)
    const plus = (mon) => setMon(mon >= 12 ? mon = 1 : mon + 1)
    

    const [loading, setLoading] = useState(false)

    useEffect( () => {  
      
        festival   
        .festivalData(mon, setting => setLoading(setting))
        .then(ftv => setFtv(ftv)); 
          
        }
        ,[mon, festival])
    
    return (
        <>  
            <div className={styles.locationBox}>
                <h1>#지역별 축제 확인하기</h1>
                <div className={styles.selectbox}>
                    <ul className={styles.area}>
                        {
                            Itemdata.areaCode.map((list) => 
                            <AreaCode 
                            key={list.value} 
                            areaName={list.name} 
                            areaValue={list.value} 
                            />) 
                        }
                    </ul>
                </div>
            </div>
            
            <div className={styles.monthBox}>
                <h1>#월별 인기 축제 확인하기 #{mon}월</h1>
                                {Itemdata.monthInfo.map((list)=> list.mon === mon &&  <p className={styles.monInfo} key={list.mon} > {list.data} </p>)}
                <div className={styles.selectDate}>
                    <button className={styles.arrowLeft} onClick={()=> minus(mon)}><i className="fas fa-chevron-left"></i></button>
                    <p className={styles.arrowCenter}><span>{mon}</span>월</p>
                    <button className={styles.arrowRight} onClick={()=> plus(mon)}><i className="fas fa-chevron-right"></i></button>
                </div>


                { loading && <Loading /> }          
                { !loading &&
                    <ul className={addShow === 1 ? styles.ulListDown : styles.ulList}>
                        {  
                            ftv 
                            ? ftv.length > 1 
                            ? ftv.map((item)=>
                            
                            <FestivalCreate key={item.contentid} item={item}  /> )
                            : <FestivalCreate item={ftv}  />
                            : <p className={styles.none}><i className="far fa-calendar-times"></i> {mon}월에는 계획된 행사가없습니다.</p>
                        }
                    </ul>
                }


                <div className={styles.btnbox}>
                {   
                    ftv
                    ? ftv.length > 7 &&
                    (addShow === 0 ? <button className={styles.plusButton} onClick={()=> addShowDown()}>축제 더보기</button>
                              : <button className={styles.minusButton} onClick={()=> addShowDown()}>목록 접기</button>)
                    : ''
                }
                </div>
            </div>
        </>
    );
};

export default AreaBlock;