import "./App.css";
import SignUp from "./components/Forms/CustomerSignUp";
import { Switch, Route } from "react-router-dom";
import TradieLogin from "./components/Forms/TradieLogin";
import NewInventory from "./components/inventory/NewInventory";
import Header from "./components/Header/Header";

import RightSideBar from "./components/rightSideBar/RightSideBar";
import CustomerSignUp from "./components/Forms/CustomerSignUp";
import CustomerLogin from "./components/Forms/CustomerLogIn";
import TradieSignUp from "./components/Forms/TradieSignUp";

function App() {
  return (
    <div className='App'>
      <Header />
      <RightSideBar />
      <Switch>
        <Route exact={true} path='/' component={SignUp} />
        <Route exact path='/login' component={TradieLogin} />
        <Route exact path='/customer/signup' component={CustomerSignUp} />
        <Route exact path='/customer/login' component={CustomerLogin} />
        <Route exact path='/tradie/signup' component={TradieSignUp} />
        <Route exact path='/tradie/login' component={TradieLogin} />

      </Switch>
    </div>
  );
}

export default App;
