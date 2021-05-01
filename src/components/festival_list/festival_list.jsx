import React, { useState } from 'react';
import moment from 'moment';

const FestivalList = ({date}) => {
    

            return (
            <>
                <h1>축제 목록</h1>
                { 
                    date && <p> 선택하신 날짜 <span> {date.format('YYYY년 MM월 DD일')}</span> </p>
                }
            </> 
            )
    }

export default FestivalList;