import styles from './calender.module.css'
import CalenderWeek from './calender/calender_week';

const Calender = ({today, onSubtrack, onAdd, dayInfo}) => {

    const firstWeek = today.clone().startOf('month').week()
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week() 

    let result = [];
    let week = firstWeek;

    const calenderArr = () => {
        for(week; week<=lastWeek; week++){
            result = result.concat( <CalenderWeek today={today} key={week} week={week} dayInfo={dayInfo}/> )
        }
        return result;
    }

    return (
            <div className={styles.calender}>
                <div className={styles.bar}>
                    <button onClick={onSubtrack} type="button"><i className="fas fa-chevron-left"></i></button>
                    <span> {today.format('YYYY년 MM월 ')}</span>
                    <button onClick={onAdd} type="button"><i className="fas fa-chevron-right"></i></button>
                </div>
            
                <table className={styles.table}>
                    <tbody>
                        {calenderArr()}
                    </tbody>
                </table>
            </div>
        )   
}           

export default Calender;