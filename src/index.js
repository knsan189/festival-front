import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import axios from 'axios';
import Holiday from './service/holiday';

const httpClient = axios.create(
  {
    baseURL : 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo',
    params : { 
      serviceKey : "P/todAwLp6jB3Dx9vFBWu/BbzqviE4YaMhDnJ1Jyl77akvPHajFVr72AqAgiUCRoCAq27WO29pYAIR3meH3MHw=="
    }
  }
)

// const festivals = new Festival(httpClient[0])
const holidays = new Holiday(httpClient)

ReactDOM.render(
  <React.StrictMode>
    <App holidays={holidays}/>
  </React.StrictMode>,
  document.getElementById('root')
);


