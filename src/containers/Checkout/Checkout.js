import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      '1tortilla': 1,
      '2pastor': 1,
      '3suadero': 0,
      '4bistec': 0,
      '5longaniza': 0,
      '6pollo': 0,
      '7cilantro': 0,
      '8cebolla': 0,
      '9queso': 0,
      'zpina': 1
    }
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
        <CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCancelledHandler} checkoutContinued={this.checkoutContinuedHandler}></CheckoutSummary>
      </div>
    )
  }
}

export default Checkout;
