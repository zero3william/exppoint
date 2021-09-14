import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from './Component/Header/Header';
import Header2 from './Component/Header2/Header2';
import Index from './Component/Index/Index';
import Statistics from './Component/Statistics/Statistics';
import Managment from './Component/Managerment/Managment';
import Signin from './Component/Signin/Signin';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
