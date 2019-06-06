import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Nombre'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Calle y número'
        },
        value: ''
      }, 
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Código postal'
        },
        value: ''
      },
      colonia: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Colonia'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: ''
      },
      tortillaAmount: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'doble tortilla', displayValue: 'Doble tortilla'},
            {value: 'una tortilla', displayValue: 'Una tortilla'}
          ]
        },
        value: 'doble tortilla'
      },
      salsa: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'red', displayValue: 'Roja'},
            {value: 'green', displayValue: 'Verde'},
            {value: 'red and green', displayValue: 'Roja y verde'}
          ]
        },
        value: 'red'
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
        <h4>Ingresa tu información de contacto</h4>
        {form}
      </div>
    );
  }
}

export default ContactData
