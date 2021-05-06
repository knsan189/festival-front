import React from 'react';
import moment from 'moment';
import styles from './calender_day.module.css'


const CalenderDay = ({days, today, dayInfo}) => {

    const color =  days.format('MM') !== today.format('MM') ? '#767c9e' : '#191f41'
    const background = moment().format('YYYYMMDD') === days.format('YYYYMMDD') && 'linear-gradient(180deg, rgba(164,110,248,1) 0%, rgba(141,81,237,1) 35%, rgba(104,39,221,1) 100%);linear-gradient(180deg, rgba(164,110,248,1) 0%, rgba(141,81,237,1) 35%, rgba(104,39,221,1) 100%);'

        return (
        <>
            <td className={styles.td} style={{color, background}} onClick={() => dayInfo(days)}>
                <span>
                    {days.format('D')}
                </span>
            </td>
        </>
        )
}

export default CalenderDay;