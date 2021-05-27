import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import axios from 'axios';
import Holiday from './service/holiday';
import Festival from './service/festival';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthService from './service/auth_service';
import FestivalRepository from './service/festival_repository';

const httpClient = axios.create(
  {
    baseURL : process.env.REACT_APP_HOLIDAY_API_URL,
    params : { 
      serviceKey : process.env.REACT_APP_PUBLIC_API_KEY
    },
    headers:{
      "Access-Control-Allow-Origin" : "festival_project"
    }
  }
)

const festivalClient =  axios.create(
  {
    baseURL : process.env.REACT_APP_FESTIVAL_API_URL,
    params : { 
      serviceKey : process.env.REACT_APP_PUBLIC_API_KEY
    },
    headers:{
      "Access-Control-Allow-Origin" : "festival_project"
    }
  }
)

const festivals = new Festival(festivalClient)
const holidays = new Holiday(httpClient)
const authService = new AuthService()
const festivalRepository = new FestivalRepository()

ReactDOM.render(
  <React.StrictMode>
    <App holidays={holidays} festivals={festivals} authService={authService} festivalRepository={festivalRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);

