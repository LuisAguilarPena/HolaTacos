import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

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

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for(let param of query.entries()){
      // ['ingredient', '1'] convert to a number with the plus
      ingredients[param[0]] = +param[1];
    }
    this.setState({ingredients: ingredients});
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
        <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>  
      </div>
    )
  }
}

export default Checkout;
