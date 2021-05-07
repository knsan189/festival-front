import React from 'react';
import moment from 'moment';
import styles from './calender_day.module.css'


const CalenderDay = ({days, today, dayInfo, seletedDate, holiday}) => {

    const color =  days.format('MM') !== today.format('MM') ? '#767c9e' : '#171d3d'
    const todayStyle = moment().format('YYYYMMDD') === days.format('YYYYMMDD') &&  styles.today
    
        return (
        <>  
            <td className={styles.td} id={todayStyle ? todayStyle : undefined} 
            style={{color, background : seletedDate && seletedDate.format('YYYYMMDD') === days.format('YYYYMMDD') && 'red'}} onClick={() => dayInfo(days)}>
                <span>
                    {days.format('D')}
                    { 
                        moment().format('YYYYMMDD') === days.format('YYYYMMDD') && <p>Today</p>
                    }
                    {
                        // 매달마다 공휴일을 호출해오는 api인데 4월은 공휴일이 없고 5월 두번, 6월은 1번만 있어서 4월에 공휴일을 호출하면 오류가 나요

                        holiday && (
                            holiday.length > 1
                            ? holiday.map(obj => obj.locdate == days.format('YYYYMMDD') && <p key={obj.dateName}>{obj.dateName}</p>)  
                            : holiday.locdate == days.format('YYYYMMDD') && <p>{holiday.dateName}</p>                                                                
                        )
                    }
                </span>
            </td>
        </>
        )
}

export default CalenderDay;