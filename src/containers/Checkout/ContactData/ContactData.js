import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = event => {
    event.preventDefault();
    //console.log(this.props.ingredients);
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      quantity: this.props.quantity,
      // not a good aproach we should recalculate price on server in order to avoid any client side manipulation
      price: this.props.quantity*this.props.price,
      // dummy order data
      customer: {
        name: 'Luis Aguilar',
        address: {
          street: 'Zamora 128',
          zipCode: '06100',
          colonia: 'Condesa'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    //.json especifaclly for firebase
    axios.post('/orders.json', order) 
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      });
  }

  render () {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Nombre" />
        <input className={classes.Input} type="email" name="email" placeholder="E-mail" />
        <input className={classes.Input} type="text" name="street" placeholder="Calle" />
        <input className={classes.Input} type="text" name="postal" placeholder="Código postal" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>);
    if(this.state.loading){
      form = <Spinner />;
    }
    return(
      <div className={classes.ContactData}>
        <h4>Ingresa tu información de contacto</h4>
        {form}
      </div>
    );
  }
}

export default ContactData
