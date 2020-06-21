import React, { Fragment } from 'react';
import {Router, Route } from "react-router-dom";
import history from "./history";
import './App.css';

//components
import InputTodo from "./components/InputTodo";
import ListTodos from './components/ListTodo';
import UserProvider from './context/UserProvider';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MenuBar from "./components/menus/MenuBar";

function App() {
  return (
    <Router history={history()}>
      <UserProvider>
        <Route path="/" component={MenuBar}/>
        <Route path="/profile" component={Profile}/>
      </UserProvider>
      <Route path="/" exact component={Home}/>
    </Router>
  );
}

export default App;
