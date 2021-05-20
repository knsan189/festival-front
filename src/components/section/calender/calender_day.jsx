import React, { memo } from 'react';
import moment from 'moment';
import styles from './calender_day.module.css'


const CalenderDay = memo(({days, today, dayInfo, seletedDate, holiday, holidayDate}) => {

    const color =  days.format('MM') !== today.format('MM') ? '#c6c6c6' : days.format('dddd') === 'Sunday' || days.format('dddd')  === 'Saturday' ? 'red' : '#666'
    const todayStyle = moment().format('YYYYMMDD') === days.format('YYYYMMDD') &&  styles.today
    const isHoliday = holidayDate && ( holiday.length > 1 
        ? holidayDate.includes(parseInt(days.format('YYYYMMDD'))) ? styles.isholiday : styles.day
        : holidayDate === parseInt(days.format('YYYYMMDD')) ? styles.isholiday : styles.day )

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
                            ? holiday.map(obj => obj.locdate === parseInt(days.format('YYYYMMDD')) && <span className={styles.datename} key={obj.dateName}>{obj.dateName}</span>)  
                            : holiday.locdate === parseInt(days.format('YYYYMMDD')) && <span className={styles.datename}>{holiday.dateName}</span>                                                                
                        )
                    }
                </span>
            </td>
        </>
        )
})

export default CalenderDay;