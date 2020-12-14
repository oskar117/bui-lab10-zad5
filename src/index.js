import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Page from "./components/Page";
import data from "./data/browsers.json";

ReactDOM.render(
  <React.StrictMode>
    <Page browsers={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
