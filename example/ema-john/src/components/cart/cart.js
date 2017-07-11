import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

class Cart extends Component {
    constructor(props){
        super(props);
        this.shipping = 0;
    }

    getPrice(){
        const price = this.props.cart.reduce((prev, item) =>{
            const itemPrice = `${item.wholePrice}.${item.priceFraction}`;
            const unitPrice = parseFloat(itemPrice);
            const itemTotal = unitPrice * (item.quantity || 1);
            return prev + itemTotal ;
        }, 0);

        const roundedPrice = Math.round(price*100)/100;
        this.price = roundedPrice;
        const tax = Math.round(this.price * 6.25)/100;
        this.tax = tax;
        const total = this.price + this.shipping+ this.tax;
        this.total = Math.round(total*100)/100;
        return roundedPrice;
    }
    render() {
        let cartButton = null;
        if (this.props.handleOrder) {
            cartButton = (<button onClick={this.props.handleOrder}>
                    <span>Place your order</span>
                </button>)
        } else {
            cartButton = (
                <Link to="/cart">
                        <button>
                    <span>Review your order</span>
                </button>
                </Link>
            )
        }
        return (
            <div>
                <h2>Order Summary</h2>
                <p>Number of items: {this.props.cart.length}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Items:</td>
                            <td>${this.getPrice()}</td>
                        </tr>
                        <tr>
                            <td>Shipping & handling:</td>
                            <td>${this.shipping}</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>${Math.round((this.price+this.shipping)*100)/100}</td>
                        </tr>
                        <tr>
                            <td>Estimated tax to be Collected:</td>
                            <td>${this.tax}</td>
                        </tr>
                        <tr>

                        </tr>
                        <tr className="total-row">
                            <td>Order Total:</td>
                            <td>${this.total}</td>
                        </tr>
                    </tbody>
                </table>
                {cartButton}
            </div>
        );
    }
}

export default Cart;