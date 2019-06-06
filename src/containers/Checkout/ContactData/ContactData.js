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
      mesa: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '# de mesa'
        },
        value: ''
      },
      promoCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Código de descuento'
        },
        value: ''
      }, 
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'E-mail'
        },
        value: ''
      },
      toGo: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'para comer', displayValue: 'Para comer'},
            {value: 'para llevar', displayValue: 'Para llevar'}
          ]
        },
        value: 'Para comer'
      },
      tortillaAmount: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'double', displayValue: 'Doble tortilla'},
            {value: 'single', displayValue: 'Una tortilla'}
          ]
        },
        value: 'double'
      },
      salsa: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'red', displayValue: 'Salsa roja'},
            {value: 'green', displayValue: 'Salsa verde'},
            {value: 'red and green', displayValue: 'Salsa roja y verde'},
            {value: 'guacamole', displayValue: 'Guacamole'}
          ]
        },
        value: 'red'
      }
    },
    cornTortilla: {
      elementType: 'select',
      elementConfig: {
        options: [
          {value: '', displayValue: 'Salsa roja'},
          {value: 'green', displayValue: 'Salsa verde'},
          {value: 'red and green', displayValue: 'Salsa roja y verde'},
          {value: 'guacamole', displayValue: 'Guacamole'}
        ]
      },
      value: 'red'
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
