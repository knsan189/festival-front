import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const httpClient = axios.create({
//   baseURL: process.env.REACT_APP_HOLIDAY_API_URL,
//   params: {
//     serviceKey: process.env.REACT_APP_PUBLIC_API_KEY,
//   },
//   headers: {
//     "Access-Control-Allow-Origin": "festival_project",
//   },
// });

// const festivalClient = axios.create({
//   baseURL: process.env.REACT_APP_FESTIVAL_API_URL,
//   params: {
//     serviceKey: process.env.REACT_APP_PUBLIC_API_KEY,
//   },
//   headers: {
//     "Access-Control-Allow-Origin": "festival_project",
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
