import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import Contact from "./Components/Register/register-container/contact.js";
import Signin from "./Components/Signin/Signin.js";
import Welcome from "./Components/Welcome/Welcome.js"
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
    Redirect
  } from "react-router-dom";

function App() {

  return (
    <div className="App">
    <HashRouter>
            <Switch>
                <Route exact path = '/' component={Contact}/>
                <Route exact path='/signin' component={Signin}/>
                <Route exact path='/welcome' component={Welcome}/>
              </Switch>
        </HashRouter>

    </div>
  );
}

export default App;
