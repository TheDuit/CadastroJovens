import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css'; 
import Est from './main';
import App from "./App"
const root = ReactDOM.createRoot(document.getElementById('root'));

var estudante = new Est;

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

