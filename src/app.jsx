import styles from './app.module.css';
import Calender from './components/calender';
import FestivalList from './components/festival_list/festival_list';
import moment from 'moment'
import { useEffect, useState } from 'react';



function App({holidays, festivals}) {
  const onSubtrack = () => {setMoment(getMoment.clone().subtract(1, 'month'))}
  const onAdd = () =>{setMoment(getMoment.clone().add(1, 'month'))}
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
  },[])

  return (
    <div className={styles.app}>
      <Calender today={today} onAdd={onAdd} onSubtrack={onSubtrack} dayInfo={dayInfo} seletedDate={date} holiday={holiday} changedDate={changedDate}/>
      <FestivalList date={date} festivalInfo={festivalInfo} today={today} />
    </div>

  );
}

export default App;
