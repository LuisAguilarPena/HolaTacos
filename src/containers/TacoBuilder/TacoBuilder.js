import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Taco from '../../components/Taco/Taco';
import BuildControls from '../../components/Taco/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Taco/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class TacoBuilder extends Component {
  state = {
    ingredients: {
      tortilla: 0,
      pastor: 0,
      suadero: 0,
      bistec: 0,
      longaniza: 0,
      pollo: 0,
      cilantro: 0,
      cebolla: 0,
      queso: 0,
      pina: 0
    },
    totalPrice: 20,
    quantity: 0,
    modalDisplay: false,
    loading: false
  }

  addIngredientHandler = type => {
    let ingredientQuantity = this.state.ingredients[type]
    // limit to one meat
        const meats = [
          this.state.ingredients.pastor,
          this.state.ingredients.suadero,
          this.state.ingredients.bistec,
          this.state.ingredients.longaniza,
          this.state.ingredients.pollo
        ]
    if(ingredientQuantity === 0 && (meats.reduce((previousValueAcc, currentValue)=> previousValueAcc+currentValue)<1)) {
      //console.log(`addIngredientHandler added 1 to ${type}`);
      // state should be updated in an inmutable way
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type]=ingredientQuantity+1;
      this.setState({ingredients: updatedIngredients})
    }
    // let other ingredients be added
    if(ingredientQuantity === 0 && (type==='tortilla' || type==='cilantro' || type==='cebolla' || type==='queso' || type==='pina')) {
      //console.log(`addIngredientHandler added 1 to ${type}`);
      // state should be updated in an inmutable way
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type]=ingredientQuantity+1;
      this.setState({ingredients: updatedIngredients})
    }
    //console.log(this.state.ingredients);
    //console.log(meats);
  }

  removeIngredientHandler = type => {
    let ingredientQuantity = this.state.ingredients[type]
    if(ingredientQuantity === 1) {
      //console.log(`removeIngredientHandler removed 1 to ${type}`);
      // state should be updated in an inmutable way
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type]=ingredientQuantity-1;
      this.setState({ingredients: updatedIngredients})
    }
    //console.log(this.state.ingredients);
  }

  increaseTacoQuantityHandler = () =>{
    let updatedQuantity = this.state.quantity;
    updatedQuantity++
    this.setState({quantity: updatedQuantity})
  }
  decreaseTacoQuantityHandler = () =>{
    let updatedQuantity = this.state.quantity;
    updatedQuantity--
    this.setState({quantity: updatedQuantity})
  }

  modalDisplayHandler = () => {
    this.setState({modalDisplay: true})
  }

  modalDisplayHandlerCancel = () => {
    this.setState({modalDisplay: false})
  }

  modalContinueHandler = () => {
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      quantity: this.state.quantity,
      // not a good aproach we should recalculate price on server in order to avoid any client side manipulation
      price: this.state.quantity*this.state.totalPrice,
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
        this.setState({loading: false, modalDisplay: false});
      })
      .catch(error => {
        this.setState({loading: false, modalDisplay: false});
      });
  }
  render () {
    const disabledTQ= this.state.quantity<=0 ? true : false; 

    const disabledInfo = {
      ...this.state.ingredients
    };
    // disabled atribute takes in true or false, 1 or 0, disables with true, thats why we hjad to do the next
    // we wanna disable when the value is 0 (false natively), with the disabledInfo[key] <=0 we make that 0 true so it works
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <=0; // will update values so instead of numbers we will have true or false
    } // {tortilla: true, pastor: true...} if ture should be disable
    
    const disabledMore = {
      ...this.state.ingredients
    };
    // we don't need to mimic the previous for in because here we want to keep the values as they are since they evaluate correctly into either tru or false
    // if (any meats are more than one then disable button by changing all of them into true) 
      // we need the actual true not the number because if we get the number we will render aswell
    if (disabledMore.pastor === 1) {
      disabledMore.pastor = true;
      disabledMore.suadero = true;
      disabledMore.bistec = true;
      disabledMore.longaniza = true;
      disabledMore.pollo = true;
    }

    if (disabledMore.suadero === 1) {
      disabledMore.pastor = true;
      disabledMore.suadero = true;
      disabledMore.bistec = true;
      disabledMore.longaniza = true;
      disabledMore.pollo = true;
    }

    if (disabledMore.bistec === 1) {
      disabledMore.pastor = true;
      disabledMore.suadero = true;
      disabledMore.bistec = true;
      disabledMore.longaniza = true;
      disabledMore.pollo = true;
    }

    if (disabledMore.longaniza === 1) {
      disabledMore.pastor = true;
      disabledMore.suadero = true;
      disabledMore.bistec = true;
      disabledMore.longaniza = true;
      disabledMore.pollo = true;
    }

    if (disabledMore.pollo === 1) {
      disabledMore.pastor = true;
      disabledMore.suadero = true;
      disabledMore.bistec = true;
      disabledMore.longaniza = true;
      disabledMore.pollo = true;
    }

    let orderSummary = 
      <OrderSummary 
        ingredients={this.state.ingredients} 
        quantity={this.state.quantity} 
        price={this.state.totalPrice} 
        modalContinue={this.modalContinueHandler} 
        modalCancel={this.modalDisplayHandlerCancel} />

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>  
        <Modal show={this.state.modalDisplay} modalClosed={this.modalDisplayHandlerCancel} >
          {orderSummary}
        </Modal>
        <Taco ingredients={this.state.ingredients}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo} 
          disabledMore={disabledMore}
          quantity={this.state.quantity}
          quantityPlus={this.increaseTacoQuantityHandler}
          quantityMinus={this.decreaseTacoQuantityHandler}
          disabledTQ={disabledTQ}
          addToOrder={this.state.quantity<=0} 
          price={this.state.totalPrice} 
          ordered={this.modalDisplayHandler}/>
      </Aux>
    );
  }
}

export default withErrorHandler(TacoBuilder, axios);