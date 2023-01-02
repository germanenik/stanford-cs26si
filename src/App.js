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
        <Route path="/unit2" element={<UnitScreen unit={"unit2"}/>} />
        <Route path="/unit3" element={<UnitScreen unit={"unit3"}/>} />
        <Route path="/unit4" element={<UnitScreen unit={"unit4"}/>} />
        <Route path="/unit5" element={<UnitScreen unit={"unit5"}/>} />
        <Route path="/unit6" element={<UnitScreen unit={"unit6"}/>} />
        <Route path="/unit7" element={<UnitScreen unit={"unit7"}/>} />
        <Route path="/unit8" element={<UnitScreen unit={"unit8"}/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
