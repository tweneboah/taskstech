import logo from './logo.svg';
import './App.css';
import SignUp from './components/Forms/SignUp';
import TradieLogin from './components/Forms/TradieLogin';
import CreateJob from './components/Jobs/CreateJob';

function App() {
  return (
    <div className="App">
      { /* <CreateJob NewCustomer /> */}
      <CreateJob />
    </div>
  );
}

export default App;
