import "./App.css";
import SignUp from "./components/Forms/SignUp";
import { Switch, Route } from "react-router-dom";
import TradieLogin from "./components/Forms/TradieLogin";
import NewInventory from "./components/inventory/NewInventory";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='App'>
       <Header />
      <Switch>
        <Route exact path='/' component={NewInventory} />
        <Route exact='login' component={<TradieLogin />} />
      </Switch>
    </div>
  );
}

export default App;
