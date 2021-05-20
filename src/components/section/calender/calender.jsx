import CalenderWeek from './calender_week';
import styles from './calender.module.css'
import { memo } from 'react';

const Calender = memo(({today, onSubtrack, onAdd, dayInfo, seletedDate, holiday, changedDate}) => {

    const firstWeek = today.clone().startOf('month').week()
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week()
    const holidayDate = holiday && (holiday.length > 1 ? holiday.map(obj => obj.locdate) : holiday.locdate)

    let result = [];
    let week = firstWeek;


    const calenderArr = () => {
        for(week; week <= lastWeek; week++){
            result = result.concat( <CalenderWeek today={today} key={week} week={week} dayInfo={dayInfo} seletedDate={seletedDate} holiday={holiday} holidayDate={holidayDate} /> )
        }
        return result;
    }
    const thisMonth = today.format('MM')
    const monthName = 
    thisMonth === '01' ? '#1월' 
    : thisMonth === '02' ? '#2월' 
    : thisMonth === '03' ? '#3월' 
    : thisMonth === '04' ? '#4월' 
    : thisMonth === '05' ? '#5월' 
    : thisMonth === '06' ? '#6월'
    : thisMonth === '07' ? '#7월'
    : thisMonth === '08' ? '#8월'
    : thisMonth === '09' ? '#9월'
    : thisMonth === '10' ? '#10월'
    : thisMonth === '11' ? '#11월'
    : '#12월'
    
    const onSubClick = () => {
        onSubtrack()
        changedDate(today.subtract(1, 'month'))
    }
    const onAddClick = () => {
        onAdd()
        changedDate(today.add(1, 'month'))
    }

    return (
            <div className={styles.calender}>
                <div className={styles.bar}>
                    <div className={styles.title}>
                        <button onClick={onSubClick} type="button"><i className="fas fa-chevron-left"></i></button>
                            <h3>{monthName}</h3>
                        <button onClick={onAddClick} type="button"><i className="fas fa-chevron-right"></i></button>
                    </div>
                    <span> {today.format('YYYY')} </span>
                    
                </div>
            
                <table className={styles.table} border="1px">
                    <tbody>
                        <tr>
                            <td className={styles.td}>일</td>
                            <td className={styles.td}>월</td>
                            <td className={styles.td}>화</td>
                            <td className={styles.td}>수</td>
                            <td className={styles.td}>목</td>
                            <td className={styles.td}>금</td>
                            <td className={styles.td}>토</td>
                        </tr>
                        {calenderArr()}
                    </tbody>
                </table>
            </div>
        )   
})           

export default Calender;