import React from 'react';
import moment from 'moment';


const CalenderDay = ({days, today, dayInfo}) => {

    const color = moment().format('YYYYMMDD') === days.format('YYYYMMDD') ? 'red' : days.format('MM') !== today.format('MM') ? 'gray' : 'inherit'
        return (
        <>
            <td style={{background : color}} onClick={() => dayInfo(days)}>
                <span>
                    {days.format('D')}
                </span>
            </td>
        </>
        )
}

export default CalenderDay;