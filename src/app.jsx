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
  const dayInfo = (info) => {
    setDate(info)
    festivals.select(info.format('YYYYMMDD')).then(festivals => setFestivalInfo(festivals))
  }

  const changedDate = (data) => {
    holidays.dateChange(data).then(holiday => setHoliday(holiday))
  }
  const [festivalInfo, setFestivalInfo] = useState([])

  useEffect(()=> {
      festivals.thisMonthFestival(today.format('YYYYMMDD')).then(festivals => setFestivalInfo(festivals))
      holidays.thisMonth().then(holiday => setHoliday(holiday))
  }, [festivals, holidays, today])

  return (
    <div className={styles.app}>
      <FestivalList date={date} festivalInfo={festivalInfo} today={today} />
      <Sidebar today={today} onAdd={onAdd} onSubtrack={onSubtrack} dayInfo={dayInfo} seletedDate={date} holiday={holiday} changedDate={changedDate}/>
    </div>

  );
}

export default App;
