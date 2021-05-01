import React from 'react';

const Calender = ({onSubtrack, onAdd, calender, today}) => {

    return (
            <>
                <div className="control">
                    <button onClick={onSubtrack}>이전달</button>
                    <span> {today.format('YYYY년 MM월 ')}</span>
                    <button onClick={onAdd}>다음달</button>
                </div>
            
                <table>
                    <tbody>
                        {calender()}
                    </tbody>
                </table>
            </>
        )   
}           

export default Calender;