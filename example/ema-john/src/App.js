import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/home';
import CartDetail from './components/cart-detail/cart-detail';
import NotFound from './components/notFound/notFound';
import Inventory from './components/inventory/inventory';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
            <Switch>
                <Route exact path="/" component={Home} />      
                <Route path="/cart" component={CartDetail} />
                <Route path="/inventory" component={Inventory}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>                
      </div>
    );
  }
}

export default App;
