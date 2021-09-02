import React from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from './components/Auth'
import TradieLogin from "./components/Forms/TradieLogin";
import NewInventory from "./components/inventory/NewInventory";
import CreateJob from "./components/Jobs/CreateJob";
import Header from "./components/Header/Header";
import RightSideBar from "./components/rightSideBar/RightSideBar";
import InventoryList from './components/inventory/InventoryList';

function App() {
  return (
    <div className='App'>
      <Header />
      <RightSideBar />
      <Switch>
        <Route exact={true} path='/' component={NewInventory} />
        <Route exact={true} path='/inventory/list' component={InventoryList} />
        <Route exact path='/login' component={TradieLogin} />

        <Auth>
          <Route exact path='/create/job' component={CreateJob} /> 
        </Auth>
      </Switch>
    </div>
  );
}

export default App;
