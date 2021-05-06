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
  }

  const [festivalInfo, setFestivalInfo] = useState('')

  useEffect(()=> {
    // holidays.thisYear().then(console.log)
    for(let i=1; i < 31; i++){
      if(i<10) i= '0' + i
      festivals.thisMonthFestival(i).then()
    }
    
  },[])
  return (
    <div className={styles.app}>
      <Calender today={today} onAdd={onAdd} onSubtrack={onSubtrack} dayInfo={dayInfo}/>
      <FestivalList date={date}/>
    </div>

  );
}

export default App;
