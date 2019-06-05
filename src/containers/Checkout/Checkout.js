import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    quantity: 0
  }
  // suposedly I just need to move th code to the constructor and I already tried this woth the withErrorHandler but I could not make it work this time so left the unsafe method
  UNSAFE_componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    let quantity = 0;
    for(let param of query.entries()){
      // ['ingredient', '1'] convert to a number with the plus
      if (param[0] === 'price'){
        price = param[1];
      } else if (param[0] === 'quantity'){
        quantity = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ingredients: ingredients, totalPrice: price, quantity: quantity});
  }

  checkoutCancelledHandler= () => {
    this.props.history.goBack();   
  }
  
  checkoutContinuedHandler= () => {
    this.props.history.replace('/checkout/contact-data'); 
  }


  render () {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients} 
          checkoutCancelled={this.checkoutCancelledHandler} 
          checkoutContinued={this.checkoutContinuedHandler} />
        <Route 
          path={this.props.match.path + '/contact-data'} 
          render={props => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} quantity={this.state.quantity} {...props}/>)}/>  
      </div>
    )
  }
}

export default Checkout;