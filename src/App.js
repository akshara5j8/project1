import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume';
import data from './data.json';
let App=()=>{
  return(
    <BrowserRouter>
    <Route exact path="/" component={Profile}/>
    <Route exact path="/resume" component={Resume}/>
    </BrowserRouter>
  )
} 

export default App;
