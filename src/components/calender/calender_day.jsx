import React, { memo } from 'react';
import moment from 'moment';
import styles from './calender_day.module.css'


const CalenderDay = memo(({days, today, dayInfo, seletedDate, holiday, holidayDate}) => {

    const color =  days.format('MM') !== today.format('MM') ? '#767c9e' : days.format('dddd') === 'Sunday' || days.format('dddd')  === 'Saturday' ? 'red' : 'black'
    const todayStyle = moment().format('YYYYMMDD') === days.format('YYYYMMDD') &&  styles.today
    const isHoliday = holidayDate && ( holiday.length > 1 
        ? holidayDate.includes(parseInt(days.format('YYYYMMDD'))) ? styles.isholiday : styles.day
        : holidayDate === parseInt(days.format('YYYYMMDD')) ? styles.isholiday : styles.day )

    console.log('렌더링중')
        return (
        <>  
            <td className={styles.td} id={todayStyle ? todayStyle : undefined} 
            style={{color, background : seletedDate && seletedDate.format('YYYYMMDD') === days.format('YYYYMMDD') && 'red'}} onClick={() => dayInfo(days)}>
                <span className={isHoliday}>
                    {days.format('D')}
                    { moment().format('YYYYMMDD') === days.format('YYYYMMDD') && <p></p> }
                    {
                        holiday && (
                            holiday.length > 1
                            ? holiday.map(obj => obj.locdate === parseInt(days.format('YYYYMMDD'))&& <p className={styles.datename} key={obj.dateName}>{obj.dateName}</p>)  
                            : holiday.locdate === parseInt(days.format('YYYYMMDD')) && <p className={styles.datename}>{holiday.dateName}</p>                                                                
                        )
                    }
                </span>
            </td>
        </>
        )
})

export default CalenderDay;