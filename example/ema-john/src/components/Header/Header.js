import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css';
import logo from '../../images/logo.png';

class Header extends Component{
    render() {
        return (
            <div className="header">
                <img src={logo} alt=""/>
                <header>
                    <nav>
                    <ul>
                        <li><Link to='/'>Shop</Link></li>
                        <li><Link to='/cart'>View Cart</Link></li>
                        <li><Link to='/header'>Manage Inventory</Link></li>
                    </ul>
                    </nav>
                </header>
            </div>  
        )
    }
}

export default Header;