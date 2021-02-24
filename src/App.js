'use strict'
import './App.css';

import MyHeader from './components/parent-child/myHeader';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from "./components/Routing/about"
import Product from "./components/Routing/Product"
import User from "./components/Routing/User"
import Nav from "./components/Routing/Nav"
import Home from './components/Routing/Home';
const App = ()=> {
  return (
    <div className="App" id="Look at ME">
      <MyHeader/>
      <p> Waleed says Hi</p>
      {/* //commented out to save some space nothing wrong with it  */}

      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
