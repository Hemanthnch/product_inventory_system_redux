import React from 'react';
import HomeContainer from '../containers/homecontainer';
import Content from '../content';
import { HashRouter } from 'react-router-dom';
import '../App.css';
import NotificationBarContainer from '../containers/notificationbarcontainer'

const App =()=>(
    <div className="App">
       
        <HashRouter>
        <NotificationBarContainer></NotificationBarContainer>
        <Content></Content></HashRouter>
        
        {/* <HomeContainer></HomeContainer> */}
    </div>
);
export default App;