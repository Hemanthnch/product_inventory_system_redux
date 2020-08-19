import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {createStore} from 'redux';
import allReducers from './reducers/allreducers'
import {Provider} from 'react-redux';
import Content from './content';
import { HashRouter } from "react-router-dom";


const store=createStore(allReducers);


ReactDOM.render(
<Provider store={store}><App></App></Provider>
, document.getElementById('root')
);


