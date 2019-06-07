import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  timeF = () => {
    let timex = new Date (Number(new Date()));
    let time = timex.toLocaleString();
    return time;
  }

  state = {
    orderForm: {
      nombre: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Nombre'
        },
        value: ''
      },
      mesa: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '# de mesa'
        },
        value: ''
      },
      promo: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Código de descuento'
        },
        value: ''
      }, 
      fecha: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
        },
        value: this.timeF()
      }, 
      bebida: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'Cerveza', displayValue: 'Cerveza'},
            {value: 'Refresco', displayValue: 'Refresco'},
            {value: 'Jarra de agua de jamaica', displayValue: 'Jarra de agua de jamaica'},
            {value: 'Agua enbotellada', displayValue: 'Agua embotellada'}
          ]
        },
        value: 'Cerveza'
      },
      'to go': {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'para comer', displayValue: 'Para comer'},
            {value: 'para llevar', displayValue: 'Para llevar'}
          ]
        },
        value: 'Para comer'
      },
      tortilla: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'doble', displayValue: 'Doble tortilla'},
            {value: 'una', displayValue: 'Una tortilla'}
          ]
        },
        value: 'doble'
      },
      salsa: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'roja', displayValue: 'Salsa roja'},
            {value: 'verde', displayValue: 'Salsa verde'},
            {value: 'roja y verde', displayValue: 'Salsa roja y verde'},
            {value: 'guacamole', displayValue: 'Guacamole'}
          ]
        },
        value: 'roja'
      },
      tipo: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'normal', displayValue: 'Tortilla de maíz'},
            {value: 'azul', displayValue: 'Tortilla azul'}
          ]
        },
        value: 'maíz'
      }
    },
    loading: false
  }

  orderHandler = event => {
    event.preventDefault();
    //console.log(this.props.ingredients);
    this.setState({loading: true});
    const formData = {};
    for(let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      quantity: this.props.quantity,
      // not a good aproach we should recalculate price on server in order to avoid any client side manipulation
      price: this.props.quantity*this.props.price,
      orderData:formData
    }
    //.json especifaclly for firebase
    axios.post('/orders.json', order) 
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
        // console.log('x')
      });
  }

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]    
    }

    updatedFormElement.value=event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({orderForm: updatedOrderForm});
  }

  render () {
    const formElementsArray = [];
    for(let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input 
            key={formElement.id}
            elementType={formElement.config.elementType} 
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={event => this.inputChangeHandler(event, formElement.id)}/> 
        ))}
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>);
    if(this.state.loading){
      form = <Spinner />;
    }
    return(
      <div className={classes.ContactData}>
        <h4>Información extra</h4>
        {form}
      </div>
    );
  }
}

export default ContactData
