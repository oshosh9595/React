import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
    <App /> 
);
*/
setInterval(()=>{root.render(
  <App /> 
);}, 1000);
//사용자 정의태그 이앱이 리엑트 <App />