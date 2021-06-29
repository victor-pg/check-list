import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './App.css';




const RouteFile =()=>{
    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}

export default RouteFile;