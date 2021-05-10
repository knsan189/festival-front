import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import axios from 'axios';
import Holiday from './service/holiday';
import Festival from './service/festival';

const httpClient = axios.create(
  {
    baseURL : 'https://festivalprojectapp.herokuapp.com/http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo',
    params : { 
      serviceKey : "P/todAwLp6jB3Dx9vFBWu/BbzqviE4YaMhDnJ1Jyl77akvPHajFVr72AqAgiUCRoCAq27WO29pYAIR3meH3MHw=="
    }
  }
)

const festivalClient =  axios.create(
  {
    baseURL : 'https://festivalprojectapp.herokuapp.com/http://api.visitkorea.or.kr/openapi/service/rest/KorService',
    params : { 
      serviceKey : "P/todAwLp6jB3Dx9vFBWu/BbzqviE4YaMhDnJ1Jyl77akvPHajFVr72AqAgiUCRoCAq27WO29pYAIR3meH3MHw=="
    }
  }
)

const festivals = new Festival(festivalClient)
const holidays = new Holiday(httpClient)

ReactDOM.render(
  <React.StrictMode>
    <App holidays={holidays} festivals={festivals}/>
  </React.StrictMode>,
  document.getElementById('root')
);

