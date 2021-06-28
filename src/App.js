import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import * as Pages from "./pages/Pages";


function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path="/signup" component={Pages.SignUp} />
        <Route exact path="/forgetpassword" component={Pages.ForgetPassword} />
        <Route exact path="/forgetpassword" component={Pages.ForgetPassword} />
        <Route exact path="/" component={Pages.Login} />
      </Switch>
    </div>
  );
}

export default App;
