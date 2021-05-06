import React from 'react';
import moment from 'moment';
import styles from './calender_day.module.css'


const CalenderDay = ({days, today, dayInfo, seletedDate}) => {

    const color =  days.format('MM') !== today.format('MM') ? '#767c9e' : '#171d3d'
    const todayStyle = moment().format('YYYYMMDD') === days.format('YYYYMMDD') &&  styles.today
    
        return (
        <>
            <td className={styles.td} id={todayStyle ? todayStyle : undefined} 
            style={{color, background : seletedDate && seletedDate.format('YYYYMMDD') === days.format('YYYYMMDD') && 'red'}} onClick={() => dayInfo(days)}>
                <span>
                    {days.format('D')}
                    { moment().format('YYYYMMDD') === days.format('YYYYMMDD') && 
                    <p>Today</p>}
                </span>
            </td>
        </>
        )
}

export default CalenderDay;