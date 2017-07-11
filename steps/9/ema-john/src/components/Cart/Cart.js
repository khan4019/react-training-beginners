import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import './Cart.css';

class Cart extends Component {

    constructor() {
        super();
        this.totalPrice = 0;
        this.totalTax = 0;
        this.grandTotal = 0;
    }

    getItemCount() {
        const cart = this.props.cart;
        const itemKeys = Object.keys(cart);
        return itemKeys.reduce((prev, key) => { 
            return prev + cart[key];
        }, 0)
    }
    getTotalCost() {
        const cart = this.props.cart;
        const itemKeys = Object.keys(cart);
        const price =  itemKeys.reduce((prev, key) => {
            const item = fakeData.find(itm => itm.key === key);
            const itemPrice = item.price * cart[key];
            return prev + itemPrice;
        }, 0);

        this.totalPrice = price;
        this.totalTax = Math.round( this.totalPrice * 0.07 *100)/100;
        this.grandTotal = this.totalPrice + this.totalTax;
    }
    render() {
        return (
            <div className="cart">
                <h2>Order Summary</h2>
                <p>Number of items: {this.getItemCount()}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Items:</td>
                            <td>${this.getTotalCost()}</td>
                        </tr>
                        <tr>
                            <td>Shipping & handling:</td>
                            <td>$0</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>${this.totalPrice}</td>
                        </tr>
                        <tr>
                            <td>Estimated Tax to be collected:</td>
                            <td>${this.totalTax}</td>
                        </tr>
                        <tr className="total-row">
                            <td>Order Total:</td>
                            <td>${this.grandTotal}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to='/review'>
                    <button>Review your Order</button>    
                </Link>
            </div>
        );
    }
}

export default Cart;