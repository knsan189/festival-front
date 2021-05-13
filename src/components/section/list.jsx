import moment from 'moment';
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import FestivalList from './festival_list/festival_list';
import Sidebar from './sidebar/sidebar';
import styles from './list.module.css'
import Loading from '../loading';

const List = ({festivals, holidays}) => {

    const onSubtrack = () => {
        setMoment(getMoment.clone().subtract(1, 'month'))
        setDate('')
      }
      
      const onAdd = () =>{
        setMoment(getMoment.clone().add(1, 'month'))
        setDate('')
      }
      
      const [getMoment, setMoment] = useState(moment());
      const today = getMoment;
    
      const [holiday, setHoliday] = useState([])
      const [date, setDate] = useState('')
    
      const changedDate = (data) => {
        holidays.dateChange(data).then(holiday => setHoliday(holiday))
      }

      const [areaCodes, setAreaCodes] = useState([])
      const [festivalInfo, setFestivalInfo] = useState([])
    
      const [inputs, setInputs] = useState({
        eventDate : today.format('YYYYMMDD'),
        pageNo : 1,
        arrange : 'P',
        areaCode : '',
        areaName : ''
      })
    
      const {eventDate, pageNo, arrange, areaCode, areaName} = inputs
    
      const daySelect = (data) => {
        setDate(data)
        const nextInputs = {
          ...inputs,
          eventDate : data.format('YYYYMMDD')
        }
        setInputs(nextInputs)
      }
    
      const areaSelect = (data) => {
        const nextInputs = {
          ...inputs,
          areaCode : data.target.value,
          areaName : data.target.textContent,
          pageNo : 1
        }
        setInputs(nextInputs)
      }
    
      const selectPageNo = (data) => {
        const nextInputs = {
          ...inputs,
          pageNo : data.target.textContent
        }
        setInputs(nextInputs)
      }
    
      const selectArrage = (data) => {
        const nextInputs = {
          ...inputs,
          arrange : data
        }
        setInputs(nextInputs)
      }
      const [loading, setLoading] = useState(null)

      useEffect(()=> {
          setLoading(true)
          festivals.thisMonthFestival(eventDate, pageNo, arrange, areaCode).then(festivals => setFestivalInfo(festivals))
          festivals.areaCodes().then(Codes => setAreaCodes(Codes))
          holidays.thisMonth().then(holiday => setHoliday(holiday))
          sessionStorage.clear()
      }, [eventDate, areaCode, pageNo, arrange, festivals, holidays])
      
      const handleLoading = () => {
        setLoading(false)
        }

    return (
        <section className={styles.list}>
            <Loading loading={loading}/>
                <FestivalList
                    festivalInfo={festivalInfo} 
                    date={date} 
                    today={today}
                    areaName={areaName} 
                    selectPageNo={selectPageNo} 
                    pageNo={pageNo} 
                    selectArrage={selectArrage}
                    arrange={arrange}
                    handleLoading = {handleLoading}
                />
                <Sidebar 
                    today={today} 
                    onAdd={onAdd} 
                    onSubtrack={onSubtrack} 
                    dayInfo={daySelect} 
                    seletedDate={date} 
                    holiday={holiday} 
                    changedDate={changedDate} 
                    areaSelect={areaSelect} 
                    areaCode={areaCode} 
                    areaCodes={areaCodes}
                />  
        </section>  
    );
}
export default List;