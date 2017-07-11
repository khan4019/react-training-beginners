import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './shop.css';



import fakeData from '../../fakeData';
import ItemCard from '../ItemCard/itemCard';
import Cart from '../cart/cart';

import { getCart, addToFirebaseCart } from '../.././utilities/firebaseManager';

class Shop extends Component {
  constructor(){
    super()
    this.state = {
      cart: [],
      cartCount:{},
      items: []
    }
    this.searchItems = this.searchItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    getCart().then(data => {
      const cart = [];
      
      for (var key in data) {
        const item = fakeData.find(item => item.key === key);
        cart.push(item);
      }
      this.setState({ cart });
    });

    this.setState({
      items:fakeData
    });
  }

  addToCart(key) {
      //update cart
      const cart = this.state.cart;
      const item = fakeData.find(item => item.key === key);
      cart.push(item);
      this.setState({ cart });   
      
      //update count
      const cartCount = Object.assign({}, this.state.cartCount);
      const oldCount = cartCount[key] || 0; 
      cartCount[key] = oldCount + 1;
    
      this.setState({cartCount})
    //push to firebase    
      addToFirebaseCart(item.key, cartCount[key]);
    // console.log(item.key);
  }
  searchItems(e){
    const searchText = e.target.value.toLowerCase();
    const result = fakeData.filter(item => item.category.toLowerCase().includes(searchText) || item.title.toLowerCase().includes(searchText));
    this.setState({
      items:result
    });
  }
  render() {
    return (
      <div>
        <div className="search-container">
          <input type="text" className="search-input" onKeyUp={this.searchItems} placeholder="type here to search" />
          <Link to="/cart">
            <span className="cart">{this.state.cart.length}</span>
          </Link>
          
        </div>
        <div className="shop-container">
          <div className="items-container">
            {this.state.items.slice(0,10).map(item =><ItemCard key={item.key} item={item} addToCart={this.addToCart}/>)}
          </div>
          <div>
            <Cart cart={this.state.cart}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
