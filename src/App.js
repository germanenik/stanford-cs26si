import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from './screens/SplashScreen';
import TabBar from './components/TabBar';
import UnitScreen from './screens/UnitScreen';
// import MainScreen from './screens/MainScreen';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/unit1" element={<UnitScreen unit={"unit1"}/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
