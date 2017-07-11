import React, { Component } from 'react';
import Rating from 'react-rating';

import 'react-fontawesome';
import  './itemCard.css';

class ItemCard extends Component {
    render() {
        const item = this.props.item;
        const rate = (item.star) ? parseFloat(item.star[0]): 0;
        return (
            <div className="item-container">
                <div>
                    <img src={item.img} alt=""/>
                </div>
                <div className="header-container">
                    <h2 className="item-header"><a href={item.url}>{item.title}</a></h2>
                    <p><small>by {item.seller}</small></p>
                    <div className="item-description">
                        <div>
                            <p className="price-container">
                                <sup className="price-currency">$</sup>
                                <span className="price-whole">{item.wholePrice}</span>
                                <sup className="price-fractional">{item.priceFraction}</sup>
                            </p>
                            <p className="stock">
                                <small>Only {item.stock} left in stock - order soon.</small>
                            </p>
                            <div>
                                <button onClick={()=>this.props.addToCart(item.key)}>
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>add to cart</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="ratings">
                                <Rating
                                placeholderRate={rate}
                                empty="fa fa-star-o"
                                placeholder="fa fa-star"
                                full="fa fa-star"
                                fractions={5}
                                readonly
                                />
                            </div>
                            <div className="features">
                                <h4>Features</h4>
                                <ul>
                                    {item.features.map(feature=><li key={feature.description}>{feature.description}: <strong>{feature.value}</strong></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default ItemCard;