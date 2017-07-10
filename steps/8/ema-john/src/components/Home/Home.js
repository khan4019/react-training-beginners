import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Shop from '../Shop/Shop';

class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Shop></Shop>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;