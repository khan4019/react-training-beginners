import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/shop" component={Home}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
