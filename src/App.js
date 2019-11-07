import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home/home"
import About from "./pages/about/about"
import Education from "./pages/education/education"
import Solar from "./pages/education/educationpages/solar"
import Wind from "./pages/education/educationpages/wind"
import electricCars from "./pages/education/educationpages/electricCars"
import MainNavBar from "./organisms/mainnavbar"
import Footer from "./organisms/Footer";

class App extends Component {

    render() {
        return (
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
    }
}

export default App;