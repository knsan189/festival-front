import moment from 'moment';
import React from 'react';
import { useEffect, useState } from 'react';
import FestivalList from './festival_list/festival_list';
import Sidebar from './sidebar/sidebar';
import styles from './list.module.css'
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';

const List = ({festivals, holidays, festivalRepository, authService}) => {
    
    // Main 에서 넘어온 데이터 처리
  
    const history = useHistory()
    const historyData = history?.location?.state
    
    let areaData, historyAreaName;
  
    if(historyData){
      areaData = historyData.areaCode
      historyAreaName = historyData.areaName
    }
  
    //

    // 로그인 처리
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


    // Moment Js로 오늘날짜 및 날짜관리
    const [getMoment, setMoment] = useState(moment());
    const today = getMoment;
    
    // 이번달에서 1빼기
    const onSubtrack = () => {
        setMoment(getMoment.clone().subtract(1, 'month'))
        setDate('')
    }
    
    // 이번달에서 1더하기
    const onAdd = () =>{
      setMoment(getMoment.clone().add(1, 'month'))
      setDate('')
    }
      
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
        arrange : 'R',
        areaCode : areaData && areaData,
        areaName : historyAreaName && '#' + historyAreaName
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
      const [loading, setLoading] = useState(false)



    useEffect(()=> {
          festivals.thisMonthFestival(eventDate, pageNo, arrange, areaCode, setting => setLoading(setting) ).then(festivals => setFestivalInfo(festivals))
          festivals.areaCodes().then(Codes => setAreaCodes(Codes))
          holidays.thisMonth().then(holiday => setHoliday(holiday))
          sessionStorage.removeItem('data')
      }, [eventDate, areaCode, pageNo, arrange, festivals, holidays])
      

    return (
      <>
        <Header userId={userId} authService={authService}/>
          <section className={styles.list}>
            <FestivalList
              festivalInfo={festivalInfo} 
              date={date} 
              today={today}
              areaName={areaName} 
              selectPageNo={selectPageNo} 
              pageNo={pageNo} 
              selectArrage={selectArrage}
              arrange={arrange}
              loading={loading}
              festivalRepository={festivalRepository}
              userId={userId}
              areaData={areaData}
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
              areaData={areaData}
          />  
          </section>
        <Footer />
      </>
    );
}
export default List;