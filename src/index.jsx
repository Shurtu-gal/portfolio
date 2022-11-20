import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

//For Night Mode
// const root = document.querySelector(':root');
// root.classList.toggle('change');
// console.log('ran');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
