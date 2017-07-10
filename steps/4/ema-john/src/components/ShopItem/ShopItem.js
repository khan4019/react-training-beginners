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
                </div>
            </div>
        );
    }
}

export default ShopItem;