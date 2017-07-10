import React, { Component } from 'react';

import './ShopItem.css';

class ShopItem extends Component {
    render() {
        const item = this.props.item;
        console.log(item);
        return (
            <div className="item">
                <div>
                    <img src={item.img} alt=""/>
                </div>
                <div>
                    <h4>{item.name}</h4>
                    <p><small>by: {item.seller}</small></p>
                    <div className="item-description">
                        <div>
                            <p>${item.price}</p>
                            <p>
                                <small>Only {item.stock} left in stock - order soon</small>
                            </p>
                            <button>Add to cart</button>
                        </div>
                        <div>
                            <h4>Features</h4>
                            <ul>
                                {
                                    item.features.map(feature => <li key={feature.description}>{feature.description}: <strong>{feature.value}</strong></li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopItem;