import axios from 'axios';
import styles from './app.module.css';
import Festival from './service/festival';
import Calender from './components/calender';
import FestivalList from './components/festival_list/festival_list';
import moment from 'moment'
import { useState } from 'react';


// const httpClient = axios.create({
//   baseURL : 'http://api.data.go.kr/openapi/tn_pubr_public_cltur_fstvl_api',
//   params : { key : 'P/todAwLp6jB3Dx9vFBWu/BbzqviE4YaMhDnJ1Jyl77akvPHajFVr72AqAgiUCRoCAq27WO29pYAIR3meH3MHw=='}
// })
// const festival = new Festival(httpClient)

function App() {
  const onSubtrack = () => {setMoment(getMoment.clone().subtract(1, 'month'))}
  const onAdd = () =>{setMoment(getMoment.clone().add(1, 'month'))}
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;


  const [date, setDate] = useState('')
  const dayInfo = (info) => {
    setDate(info)

  }


  return (
    <div className={styles.app}>
      <Calender today={today} onAdd={onAdd} onSubtrack={onSubtrack} dayInfo={dayInfo}/>
      <FestivalList date={date}/>
    </div>

  );
}

export default App;
