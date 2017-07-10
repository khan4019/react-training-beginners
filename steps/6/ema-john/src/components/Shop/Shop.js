import React, { Component } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';

import ShopItem from '../ShopItem/ShopItem';

class Shop extends Component {

    constructor() {
        super();
        this.state = {
            items:[]
        }
    }

    componentDidMount() {
        const first10 = fakeData.slice(0, 10);
        this.setState({
            items: first10
        });
    }
    

    render() {
        console.log(this.state.items);
        return (
            <div>
                <div className="shop-container">
                    <div className="item-container">
                        {
                            this.state.items.map(item => <ShopItem key={item.key} item={item}></ShopItem>)
                        }
                    </div>
                    <div className="cart-container">
                        <h1>This is cart</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;