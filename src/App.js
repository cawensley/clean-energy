import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import {EducationPages} from './components/RawEducationData';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <CardList EducationPages={EducationPages}/>
        <Footer/>
    </div>
  );
}

export default App;
