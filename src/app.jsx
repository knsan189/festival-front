import styles from './app.module.css';
import FestivalList from './components/festival_list/festival_list';
import moment from 'moment'
import { useEffect, useState } from 'react';
import Sidebar from './components/sidebar/sidebar'



function App({holidays, festivals}) {


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

  useEffect(()=> {
      festivals.thisMonthFestival(eventDate, pageNo, arrange, areaCode).then(festivals => setFestivalInfo(festivals))
      festivals.areaCodes().then(Codes => setAreaCodes(Codes))
      holidays.thisMonth().then(holiday => setHoliday(holiday))
  }, [eventDate, areaCode, pageNo, arrange])

  return (
    <div className={styles.app}>
      
      <FestivalList
        date={date} 
        festivalInfo={festivalInfo} 
        today={today}
        areaName={areaName} 
        selectPageNo={selectPageNo} 
        pageNo={pageNo} 
        selectArrage={selectArrage}
        arrange={arrange}
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
    </div>

  );
}

export default App;
