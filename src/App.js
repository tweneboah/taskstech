import "./App.css";
import SignUp from "./components/Forms/SignUp";
import { Switch, Route } from "react-router-dom";
import TradieLogin from "./components/Forms/TradieLogin";
import NewInventory from "./components/inventory/NewInventory";
import CreateJob from "./components/Jobs/CreateJob";
import JobWorkflow from "./components/Jobs/JobWorkflow";
import Header from "./components/Header/Header";
import RightSideBar from "./components/rightSideBar/RightSideBar";
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store = {store}>
      <div className='App'>
        <Header />
        <RightSideBar />
        <Switch>
          <Route exact={true} path='/' component={NewInventory} />
          <Route exact path='/login' component={TradieLogin} />
          <Route exact path='/create/job' component={CreateJob} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
