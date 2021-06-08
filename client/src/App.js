import './App.css';
import React,{useState,useEffect,useContext} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Favorite from './pages/Favorite';
import Create from './pages/Create'
import Country from './pages/Country';









function App() {
  


  return (
    <div className="App">
     <Router>
      <Switch>
      <Route path="/favorite">
            <Favorite/>
          </Route>
          <Route path="/" exact>
            <About/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/countriesname/:id">
            <Country/>
          </Route>
          <Route path="/create">
            <Create />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
