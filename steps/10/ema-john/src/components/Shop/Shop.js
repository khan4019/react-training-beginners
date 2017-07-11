import React, { Component } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';

import ShopItem from '../ShopItem/ShopItem';
import Cart from '../Cart/Cart';

import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

class Shop extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
            cart:{}
        }
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        const first10 = fakeData.slice(0, 10);
        const savedCart = getDatabaseCart();
        this.setState({
            items: first10,
            cart:savedCart
        });
        

    }

    addToCart(key) {
        const cart = this.state.cart;
        const quantity = (cart[key] || 0) + 1;
        cart[key] = quantity;
        this.setState({
            cart: cart
        });
        addToDatabaseCart(key, quantity);
    }
    

    render() {
        return (
            <div>
                <div className="shop-container">
                    <div className="item-container">
                        {
                            this.state.items.map(item => <ShopItem key={item.key} item={item} addToCart={this.addToCart}></ShopItem>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={this.state.cart}></Cart>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;