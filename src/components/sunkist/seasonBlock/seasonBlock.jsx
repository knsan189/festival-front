import React, { useEffect, useState } from 'react';
import Recommend from '../recommend/recommend';
import SeasonList from '../seasonList/seasonList';
import styles from './seasonBlock.module.css';

const SeasonBlock = ({Itemdata, festival}) => {
    const [season, setSeason] = useState(1);
    const [show, setShow] = useState(0);
    const [seasonListItem, setSeasonListItem] = useState([]);
    const showDown = () => {
        setShow(show === 0 ? show + 1 : show - 1)
        show === 1 && window.scrollTo(0, 0)
      } 
      
    const [startEnd, setStartEnd] = useState({
        start: '',
        end: ''
    });
    const {start, end} = startEnd;
    const seasonChange = (value, start, end) => {
        setSeason(value)
        const nextData = {start: start, end: end}
        setStartEnd(nextData)
        setShow(0)
    
      }
    useEffect(()=>{
    
        festival   
        .seasonData(start, end)
        .then(seasonListItem => setSeasonListItem(seasonListItem));
    
    }, [start, end])


    return (
        <>
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
                            <Recommend  key={item.contentid} festivalInfo={item} />
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
        </>
    );
};

export default SeasonBlock;