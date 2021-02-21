import logo from './logo.svg';
import './App.css';
import { useGlobalState, useGlobalStateUpdate } from "./globalContext/globalContext";

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import React, { useContext } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";



function App() {

  const globalState = useGlobalState();
  const setGlobalState = useGlobalStateUpdate();

  const themStyle = {
    backgroundColor: globalState.darkTheme ? '#333' : '#ccc',
    color: globalState.darkTheme ? '#ccc' : '#333',
    padding: '2rem'
  }

  const navStyle = {
    display: "inline",
    boder: globalState.darkTheme ? '1px solid white' : '1px solid black',
    padding: "5px",
    marginLeft: "5px"
  }

  return (
    <>
      <div style={themStyle}>

        <Router>
          <nav>
            <ul>
              <li style={navStyle}><Link to="/">Login</Link></li>
              <li style={navStyle}><Link to="/signup">Signup</Link></li>
              <li style={navStyle}><Link to="/dashboard">Dashboard</Link></li>

              <button style={navStyle} onClick={() => setGlobalState(prev => ({
                ...prev, darkTheme: !prev.darkTheme
              }))}>Toggle</button>

              {"===>" + JSON.stringify(globalState)}
            </ul>
          </nav>

          {(globalState.loginStatus === false) ?
            <Route exact={true} path="/">
              <Login />
            </Route> :
            <Route path="/">
              <Dashboard />
            </Route>}

          <Route path="/signup">
            <Signup />
          </Route>

        </Router>


      </div>

    </>
  );
}

export default App;



