import React, { Fragment } from 'react';
import {Router, Route } from "react-router-dom";
import history from "./history";
import './App.css';
import './setupProxy';

//components
import UserProvider from './context/UserProvider';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MenuBar from "./components/menus/MenuBar";
import Login from "./pages/Login";

function App() {
  return (
    <Router history={history()}>
      <UserProvider>
        <Route path="/" component={MenuBar}/>
        <Route path="/home" component={Home}/>
        <Route path="/profile" component={Profile}/>
      </UserProvider>
      <Route path="/" exact component={Login}/>
      <Route path="/login" exact component={Login}/>
    </Router>
  );
}

export default App;
