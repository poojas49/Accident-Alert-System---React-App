import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddAccident from './Components/Pages/AddAccident';

function App() {

  return (
   
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/AddAccident' component={AddAccident} />
      </Switch>
    </Router>
  </> 
  );
}

export default App;