import React, { Component } from 'react';
import './cart-item.css';
class CartItem extends Component {

    getPrice() {
        const item = this.props.item;
        const itemPrice = `${item.wholePrice}.${item.priceFraction}`;
        return parseFloat(itemPrice);
    }

    render() {
        return (
            <div className="cart-item-container">
                <div>
                    <p><strong>{this.props.item.title}</strong></p>
                    <p className="price">${this.getPrice()}</p>
                    <p><strong>Quantity:</strong> {this.props.item.quantity || 1}</p>
                    <p className="secondary-text">Sold by: {this.props.item.seller}</p>
                    <button onClick={()=>this.props.handleClick(this.props.item.key)}>Remove</button>
                </div>
                <div>
                    <p className="delivery-title">Choose a Delivery Option</p>
                    <div>        
                        <input type="radio" className="radio-standard no-js-hide"value="sss-us"/>
                        <span className="a-radio-label">
                            <span className="delivery-option"><strong>5-8 business days</strong></span>
                            <span className="secondary-text"><br/>FREE Shipping</span>
                        </span>
                    </div>
                    <div>        
                        <input type="radio" className="radio-standard no-js-hide"value="sss-us"/>
                        <span className="a-radio-label">
                            <span className="delivery-option"><strong>4-5business days</strong></span>
                            <span className="secondary-text"><br/>$13.51 - Standard Shipping</span>
                        </span>
                    </div>
                    <div>        
                        <input type="radio" className="radio-standard no-js-hide"value="sss-us"/>
                        <span className="a-radio-label">
                            <span className="delivery-option"><strong>2 business days</strong></span>
                            <span className="secondary-text"><br/>$20.37 - Two-Day Shipping</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;