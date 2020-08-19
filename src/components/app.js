import React from 'react';
import HomeContainer from '../containers/homecontainer';
import Content from '../content';
import { HashRouter } from 'react-router-dom';
import '../App.css';

const App =()=>(
    <div className="App">
        <HashRouter>
        <Content></Content></HashRouter>
        {/* <HomeContainer></HomeContainer> */}
    </div>
);
export default App;