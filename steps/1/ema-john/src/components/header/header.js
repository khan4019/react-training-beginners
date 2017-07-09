import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt=""/>
            </div>
        );
    }
}

export default Header;