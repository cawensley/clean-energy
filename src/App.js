import React from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Education from "./pages/education"
import Solar from "./pages/educationpages/solar"
import Wind from "./pages/educationpages/wind"
import ElectricCars from "./pages/educationpages/electricCars"
import MainNavBar from "./organisms/mainnavbar"
import Footer from "./organisms/Footer";
import WeatherTable from "./pages/WeatherTable";

const App = () => (
    <Router>
        <MainNavBar/>
        <Routes>
            <Route path="/education/solar" element={<Solar/>}/>
            <Route path="/education/wind" element={<Wind/>}/>
            <Route path="/education/electricCars" element={<ElectricCars/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/weather" element={<WeatherTable/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
    </Router>
)

export default App;
