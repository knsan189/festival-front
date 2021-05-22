import React, { useEffect, useState } from 'react';
import AreaCode from '../areaCode/areaCode';
import Festival from '../data/festival';
import FestivalCreate from '../festivalCreate/festivalCreate';
import styles from './main.module.css';
import Recommend from '../recommend/recommend';
import SeasonList from '../seasonList/seasonList';
import Itemdata from '../itemdata.json';
import Header from '../../header/header';
import Footer from '../../footer/footer';

const Main = (props) => {
    
    const festival = new Festival();

    const [ftv, setFtv] = useState([]);
    const [mon, setMon] = useState(1);
    const [area, setArea] = useState('');
    const [season, setSeason] = useState(1);
    const [show, setShow] = useState(0);
    const [addShow, setAddShow] = useState(0);
    const [seasonListItem, setSeasonListItem] = useState([]);
    
    const areaChange = (value) => setArea(value)
  
    const seasonChange = (value, start, end) => {
      setSeason(value)
      setShow(0)
  
      festival   
      .seasonData(start, end)
      .then(seasonListItem => setSeasonListItem(seasonListItem));
    }
    
    const showDown = () => {
      setShow(show === 0 ? show + 1 : show - 1)
      show === 1 && window.scrollTo(0, 0)
    } 
    
    const addShowDown = () => setAddShow(addShow === 0 ? addShow + 1 : addShow - 1)
    const minus = (mon) => setMon(mon <= 1 ? mon = 12 : mon - 1)
    const plus = (mon) => setMon(mon >= 12 ? mon = 1 : mon + 1)
    
    useEffect(()=>{
    
    festival   
    .seasonData(20210301, 20210531)
    .then(seasonListItem => setSeasonListItem(seasonListItem));

    }, [])

    useEffect( () => {  
      
    festival   
    .festivalData( mon, area)
    .then(ftv => setFtv(ftv)); 
      
    }
    ,[area, mon])

    
    return (
        <>
        <Header />
            <ul className={styles.season}>
                        { 
                            Itemdata.seasonList.map((list)=> 
                                <SeasonList 
                                key={list.value} 
                                seasonName={list.name} 
                                startDate={list.start} 
                                seasonValue={list.value} 
                                endDate={list.end} 
                                season={season} 
                                seasonChange={seasonChange}
                                /> )
                        }
                    </ul>

                    <ul className={show === 1 ? styles.down : styles.recommend}>
                    
                    {  
                          seasonListItem.map((item) =>
                            <Recommend key={item.contentid} item={item} />
                        )
                        
                       
                    }

                    </ul>
                    
                    <div className={styles.btnbox}>
                    {   
                       
                            show === 0
                         
                            ? <button className={styles.plusButton} onClick={()=> showDown()}>더보기</button>
                            : <button className={styles.minusButton} onClick={()=> showDown()}>목록 접기</button>
                    }
                    </div>
                    
                    
            <div className={styles.selectbox}>
                <ul className={styles.area}  >
                    {
                        Itemdata.areaCode.map((list) => 
                        <AreaCode 
                        key={list.value} 
                        areaName={list.name} 
                        area={area} 
                        areaValue={list.value} 
                        areaChange={areaChange} 
                        />) 
                    }
                </ul>
            </div>

            <div className={styles.selectDate}>
                <button className={styles.arrowLeft} onClick={()=> minus(mon)}><i className="fas fa-caret-left"></i></button>
                <p className={styles.arrowCenter}>{mon + '월'}</p>
                <button className={styles.arrowRight} onClick={()=> plus(mon)}><i className="fas fa-caret-right">   </i></button>
            </div>
            {Itemdata.monthInfo.map((list)=> list.mon === mon &&  <p className={styles.monInfo} key={list.mon} > {list.data} </p>)}
            
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
            <div className={styles.btnbox}>
            {   
                ftv
                ? ftv.length > 7 &&
                (addShow === 0 ? <button className={styles.plusButton} onClick={()=> addShowDown()}>더보기</button>
                          : <button className={styles.minusButton} onClick={()=> addShowDown()}>목록 접기</button>)
                : ''
            }
            </div>
            <Footer />
        </>
    );
};

export default Main;