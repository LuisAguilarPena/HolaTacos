import React, { Component } from 'react'
import Button from '../../components/UI/Button/Button';
import classes from './Contact.module.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';

class Contact extends Component {
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
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Correo electronico'
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
      comentario: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Comentario'
        },
        value: ''
      }, 
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
    axios.post('/messages.json', order) 
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
        <br/>
        <Button btnType="Success" clicked={this.orderHandler}>Enviar</Button>
      </form>);
    if(this.state.loading){
      form = <Spinner />;
    }
    return(
      <div className={classes.ContactData}>
        <div><h2>Contactanos</h2></div>
        <br/>
        {form}
      </div>
    );
  }
}

export default Contact;
