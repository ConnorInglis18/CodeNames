import React from 'react';
import ReactDOM from 'react-dom';
import './Static/css/index.css';
import App from './Components/App.js';
import * as serviceWorker from './serviceWorker';

//const databaseUrl = "http://localhost:5000/api/v1/"
const databaseUrl = "https://codenames-back-end-packs.herokuapp.com/api/v1/"
//const socketUrl = "http://localhost:3231"
const socketUrl = "https://codenames-back-end-socket.herokuapp.com/"
ReactDOM.render(<App url={databaseUrl} socketUrl={socketUrl} webPacksPerPage={3} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
