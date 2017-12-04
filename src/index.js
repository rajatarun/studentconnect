import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom'

ReactDOM.render(<HashRouter><Route path="/dashboard/:name" component={App}></Route></HashRouter>, document.getElementById('root'));
registerServiceWorker();
