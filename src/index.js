import React from 'react';
import ReactDOM from 'react-dom';
import './Static/css/index.css';
import App from './Components/App.js';
import * as serviceWorker from './serviceWorker';

//const devUrl = "http://localhost:5000/api/v1/"
const prodUrl = "https://testing-deployment-01.herokuapp.com/api/v1/"
const socketUrl = "http://localhost:3231"
ReactDOM.render(<App url={prodUrl} socketUrl={socketUrl} webPacksPerPage={3} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
