import React, { Component } from 'react';
import Header from '../Header/Header';
import Shop from '../shop/shop';
import './home.css';

class Home extends Component {
  
    render() {
        return (
            <div>
                <Header/>
                <Shop/>                
            </div>
        );
    }
}

export default Home;