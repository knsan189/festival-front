import axios from 'axios';
import './app.module.css';
import { useState } from 'react';
import Festival from './service/festival';
import moment from 'moment';
import Calender from './components/calender';
import FestivalList from './components/festival_list/festival_list';



const httpClient = axios.create({
  baseURL : 'http://api.data.go.kr/openapi/tn_pubr_public_cltur_fstvl_api',
  params : { key : 'P/todAwLp6jB3Dx9vFBWu/BbzqviE4YaMhDnJ1Jyl77akvPHajFVr72AqAgiUCRoCAq27WO29pYAIR3meH3MHw=='}
})
const festival = new Festival(httpClient)


function App() {

  const [getMoment, setMoment] = useState(moment());
  const today = getMoment
  const firstWeek = today.clone().startOf('month').week()
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week() 

  const onSubtrack = () => {
    setMoment(getMoment.clone().subtract(1, 'month'))
  }

  const onAdd = () =>{
    setMoment(getMoment.clone().add(1, 'month'))
  }

  const calendarArr = () => {

    let result = [];
    let week = firstWeek;
    for(week; week <= lastWeek; week++){
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 
                'day');
              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                return (
                  <td key= {index} style={{background : 'red'}}>
                    <span>{days.format('D')}</span>
                  </td>
                )
              }
              else if(days.format('MM') !== today.format('MM')){
                return (
                  <td key= {index} style={{background : 'gray'}}>
                    <span>{days.format('D')}</span>
                  </td>
                )
              }
              else {
                return (
                  <td key= {index}>
                    <span>{days.format('D')}</span>
                  </td>
                )
              }

            })
          }
        </tr>
      )
      
    }
    return result;
  }


  return (
    <div className="wrap">
      <Calender onSubtrack={onSubtrack} onAdd={onAdd} calender={calendarArr} today={today}/>
      <FestivalList />
    </div>

  );
}

export default App;
