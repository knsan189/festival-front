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


  const [date, setDate] = useState('')
  const dayInfo = (info) => {
    setDate(info)
    festivals.select(info.format('YYYYMMDD')).then(festivals => setFestivalInfo(festivals))
  }
  const [festivalInfo, setFestivalInfo] = useState([])

  useEffect(()=> {
      festivals.thisMonthFestival(today.format('YYYYMMDD')).then(festivals => setFestivalInfo(festivals))
      holidays.thisMonth().then(console.log)
    
  },[])

  return (
    <div className={styles.app}>
      <Calender today={today} onAdd={onAdd} onSubtrack={onSubtrack} dayInfo={dayInfo} seletedDate={date}/>
      <FestivalList date={date} festivalInfo={festivalInfo} />
    </div>

  );
}

export default App;
