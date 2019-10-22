import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home/home"
import About from "./pages/about/about"
import Education from "./pages/education/education"
import MainNavBar from "./components/mainnavbar"
import Footer from "./components/Footer";

class App extends Component {


    render() {
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
        )
    }
}

export default App;