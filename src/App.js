import React from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RightSideBar from "./components/rightSideBar/RightSideBar";
import TradieSignUp from "./components/Forms/TradieSignUp";
import TradieLogin from "./components/Forms/TradieLogin";
import TradieProfileForm from "./components/Forms/TradieProfileForm";


function App() {
  return (
    <div className='App'>
      <Header />
      <RightSideBar />
      <Switch>
        <Route exact path='/login' component={TradieLogin} />
        <Route exact path='/tradie/signup' component={TradieSignUp} />
        <Route exact path='/tradie/profile' component={TradieProfileForm} />


      </Switch>
    </div>
  );
}

export default App;
