import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Education from "./pages/education"
import Solar from "./pages/educationpages/solar"
import Wind from "./pages/educationpages/wind"
import electricCars from "./pages/educationpages/electricCars"
import MainNavBar from "./organisms/mainnavbar"
import Footer from "./organisms/Footer";

const App = () => (
    <Router>
        <MainNavBar/>
        <Switch>
            <Route path="/education/solar" component={Solar}/>
            <Route path="/education/wind" component={Wind}/>
            <Route path="/education/electricCars" component={electricCars}/>
            <Route path="/education" component={Education}/>
            <Route path="/about" component={About}/>
            <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
    </Router>
)

export default App;