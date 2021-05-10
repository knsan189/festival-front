import React, { memo } from 'react';
import CalenderDay from './calender_day';

const CalenderWeek = memo(({today, week, dayInfo, seletedDate, holiday, holidayDate}) => {
    return(

            <tr>
                {
                    Array(7).fill(0).map((data, index) => {
                        let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
                    return(
                            <CalenderDay key={index} days={days} today={today} dayInfo={dayInfo} seletedDate={seletedDate} holiday={holiday} holidayDate={holidayDate}/>
                        );
                    })
                }
            </tr>
    );
    })

export default CalenderWeek;