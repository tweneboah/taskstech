import React from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from './components/Auth'
import NewInventory from "./components/inventory/NewInventory";
import CreateJob from "./components/Jobs/CreateJob/CreateJob";
import Header from "./components/Header/Header";
import ViewJobs from "./components/Jobs/ViewJobs/ViewJobs";
import InventoryList from './components/inventory/InventoryList';
import RightSideBar from "./components/rightSideBar/RightSideBar";

import TradieLogin from "./components/Trader/TradieLogin";
import TradieSignUp from "./components/Trader/TradieSignUp";
import TradieProfileForm from "./components/Trader/TradieProfileForm";
import JobDiary from './components/Jobs/JobDiary/JobDiary';

function App() {
  return (
    <div className='App'>
      <Header />
      <RightSideBar />
      <Switch>
        <Route exact path='/login' component={TradieLogin} />
        <Route exact path='/view/jobs' component={ViewJobs} />
        <Route exact path='/create/job' component={CreateJob} />
        <Route exact path='/signup' component={TradieSignUp} />

        <Auth>
          <Route exact path='/create/job' component={CreateJob} /> 
          <Route exact={true} path='/inventory/create' component={NewInventory} />
          <Route exact={true} path='/inventory/list' component={InventoryList} />
          <Route exact path='/tradie/profile' component={TradieProfileForm} />
          <Route exact path='/view/jobs/diary' component={JobDiary} />
        </Auth>
      
      </Switch>
    </div>
  );
}

export default App;
