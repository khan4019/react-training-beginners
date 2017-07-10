import React, { Component } from 'react';
import logo from '../../images/logo.png';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt="" />
                <nav>
                    <ul>
                        <li>
                            <a href="/shop">Shop</a>
                        </li>
                        <li>
                            <a href="/cart">View Cart</a>
                        </li>
                        <li>
                            <a href="/inventory">Manage Inventory</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;