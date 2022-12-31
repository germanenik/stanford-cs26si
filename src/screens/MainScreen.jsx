import React from "react";
import TabBar from '../components/TabBar';
import UnitScreen from './UnitScreen';
import SplashScreen from "./SplashScreen";

const MainScreen = () => {
    return (
        <div>
            <TabBar />
            <UnitScreen />
        </div>
    )
}

export default MainScreen;