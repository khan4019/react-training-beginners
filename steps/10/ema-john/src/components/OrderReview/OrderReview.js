import React, { Component } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

import './OrderReview.css';

import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';

class OrderReview extends Component {
    constructor() {
        super();
        this.state = {
            cart: {},
            items:[]
        }
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount() {
        const cart = getDatabaseCart();
        const items = Object.keys(cart).map(key => {
            const item = fakeData.find(itm => itm.key === key);
            const quantity = cart[key];
            item.quantity = quantity;
            return item;
        });
        this.setState({
            cart,
            items
        })
    }

    removeItem(key) {
        const items = this.state.items.filter(item => item.key !== key);
        const newCart = this.state.cart;
        delete newCart[key];

        this.setState({
            items: items,
            cart:newCart
        });

        // remove from database
        removeFromDatabaseCart(key);
    }
    
    render() {
        return (
            <div>
                <Header></Header>
                <div className="review">
                    <div className="item-container">
                        <h1>Review your Order</h1>
                        {
                            this.state.items.map(item => <CartItem key={item.key} item={item} removeItem={this.removeItem}/>)
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

export default OrderReview;