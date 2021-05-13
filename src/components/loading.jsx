import React from 'react';
import ReactLoading from 'react-loading'

const Loading = ({loading}) => (

        <div className="contentWrap" style={{ display : loading ? 'block' : 'none'}}> 
            <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}> 
                <h2>창을 닫지 말아주세요.</h2> 
                <ReactLoading type='spin' color='blue' height={'80%'} width={'80%'} /> 
            </div> 
        </div>

    );

export default Loading;