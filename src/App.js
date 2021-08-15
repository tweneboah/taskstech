import React from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from './components/Auth'
// import NewInventory from "./components/inventory/NewInventory";
import CreateJob from "./components/Jobs/CreateJob";
import Header from "./components/Header/Header";
import RightSideBar from "./components/rightSideBar/RightSideBar";
import TradieSignUp from "./components/Trader/TradieSignUp";
import TradieLogin from "./components/Trader/TradieLogin";
import TradieProfileForm from "./components/Trader/TradieProfileForm";


function App() {
  return (
    <div className='App'>
      <Header />
      <RightSideBar />
      <Switch>
        <Route exact path='/login' component={TradieLogin} />
        <Route exact path='/signup' component={TradieSignUp} />
        
        <Auth>
          <Route exact path='/tradie/profile' component={TradieProfileForm} />
          <Route exact path='/create/job' component={CreateJob} />
        </Auth>
        
      </Switch>
    </div>
  );
}

export default App;
