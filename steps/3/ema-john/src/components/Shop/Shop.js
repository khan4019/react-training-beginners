import React, { Component } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';

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
                <h1>Take my money and give me things i wont use</h1>
                <div className="shop-container">
                    <div className="item-container">
                        <h1>this is Shop</h1>
                        {
                            this.state.items.map(item => <li key={item.key}>{item.name}</li>)
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