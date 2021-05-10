import React, { memo } from 'react';
import Calender from '../calender/calender';
import Area from './area';
import styles from './sidebar.module.css'

const Sidebar = memo(({today, onAdd, onSubtrack, dayInfo, date, holiday, changedDate, selectArea}) => {
    
    return (
        <div className={styles.sidebar}>
            <Calender today={today} onAdd={onAdd} onSubtrack={onSubtrack} dayInfo={dayInfo} seletedDate={date} holiday={holiday} changedDate={changedDate}/>
            <Area selectArea={selectArea}/>
        </div>
    )
    });

export default Sidebar;