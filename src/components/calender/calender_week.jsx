import React from 'react';
import CalenderDay from './calender_day';

const CalenderWeek = ({today, week, dayInfo, seletedDate}) => (

            <tr>
                {
                    Array(7).fill(0).map((data, index) => {
                        let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
                    return(
                            <CalenderDay key={index} days={days} today={today} dayInfo={dayInfo} seletedDate={seletedDate}/>
                        );
                    })
                }
            </tr>
    );

export default CalenderWeek;