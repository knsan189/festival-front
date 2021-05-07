import CalenderWeek from './calender/calender_week';
import styles from './calender.module.css'

const Calender = ({today, onSubtrack, onAdd, dayInfo, seletedDate, holiday, changedDate}) => {

    const firstWeek = today.clone().startOf('month').week()
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week() 

    let result = [];
    let week = firstWeek;

    const calenderArr = () => {
        for(week; week<=lastWeek; week++){
            result = result.concat( <CalenderWeek today={today} key={week} week={week} dayInfo={dayInfo} seletedDate={seletedDate} holiday={holiday}/> )
        }
        return result;
    }
    const thisMonth = today.format('MM')
    const monthName = 
    thisMonth === '01' ? 'January' 
    : thisMonth === '02' ? 'Feb' 
    : thisMonth === '03' ? 'March' 
    : thisMonth === '04' ? 'April' 
    : thisMonth === '05' ? 'May' 
    : thisMonth === '06' ? 'June'
    : thisMonth === '07' ? 'July'
    : thisMonth === '08' ? 'August'
    : thisMonth === '09' ? 'September'
    : thisMonth === '10' ? 'October'
    : thisMonth === '11' ? 'November'
    : 'December'
    
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
                            <td className={styles.td}>Sunday</td>
                            <td className={styles.td}>Monday</td>
                            <td className={styles.td}>Tuesday</td>
                            <td className={styles.td}>Wednesday</td>
                            <td className={styles.td}>Thursday</td>
                            <td className={styles.td}>Friday</td>
                            <td className={styles.td}>Saturday</td>
                        </tr>
                        {calenderArr()}
                    </tbody>
                </table>
            </div>
        )   
}           

export default Calender;