import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Education from "./pages/education"
import MainNavBar from "./components/mainnavbar"
import Footer from "./components/Footer";


export default function App() {
    return (
        <div>
        <Router>
            <div>
                <MainNavBar/>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/education">
                        <Education />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
        </div>
    );
}