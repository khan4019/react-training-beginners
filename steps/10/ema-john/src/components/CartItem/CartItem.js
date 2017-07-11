import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <div>
                <h4>{this.props.item.name}</h4>
                <p>
                    <small>Quantity: {this.props.item.quantity}</small>
                </p>
                <button onClick={()=>{this.props.removeItem(item.key)}}>Remove Item</button>
            </div>
        );
    }
}

export default CartItem;