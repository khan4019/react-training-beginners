import React, { Component } from 'react';
import { getCart, removeItem, processOrder } from '../../utilities/firebaseManager';
import fakeData from '../../fakeData';

import Header from '../Header/Header';
import Cart from '../cart/cart';
import CartItem from '../cart-item/cart-item';

import './cart-detail.css';
import gif from '../../images/giphy.gif';

class CartDetail extends Component {
    constructor() {
        super();
        this.state = {
            isOrdered:false,
            cart:[]
        }
        this.removeItem = this.removeItem.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
    }

    removeItem(key) {
        // update state
        const newCart = this.state.cart.filter(item => item.key !== key);
        this.setState({
            cart: newCart
        });
        // update firebase
        removeItem(key)
    }

    handleOrder() {
        const cart = this.state.cart;
        this.setState({
            cart: [],
            isOrdered:true
        });
        
        processOrder(cart);
    }

    componentWillMount() {
        getCart().then(data => {
            const cart = [];
            for (var key in data) {
                const item = fakeData.find(item => item.key === key);
                item.quantity = data[key];
                cart.push(item);
            }
            this.setState({
                cart
            })
        });
    }
    
    render() {
        let cartSection = null;
        if (this.state.isOrdered) {
            cartSection = <img src={gif}/>
        } else {
            cartSection = <Cart cart={this.state.cart} handleOrder={this.handleOrder}/>
        }
        return (
            <div>
                <Header />
                <h1>Review your order</h1>
                <div className="cart-detail-container">
                    <div className="items-container">
                        {this.state.cart.map(item => <CartItem key={item.key} item={item} handleClick={this.removeItem} />)}
                    </div>
                    <div>
                        {cartSection}
                    </div>
                </div>
            </div>
        );
    }
}

export default CartDetail;