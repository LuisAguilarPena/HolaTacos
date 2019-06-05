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
    ingredients: null,
    totalPrice: 20,
    quantity: 0,
    modalDisplay: false,
    loading: false,
    error: false
  }

  componentDidMount () {
    axios.get('https://holatacos-xo.firebaseio.com/ingredients.json')
      .then(response => {
        console.log(response.data);
        this.setState({ingredients: response.data});
      })
      .catch(error => {this.setState({error: true})});   
  } 

  addIngredientHandler = type => {
    let ingredientQuantity = this.state.ingredients[type]
    // limit to one meat
        const meats = [
          this.state.ingredients['2pastor'],
          this.state.ingredients['3suadero'],
          this.state.ingredients['4bistec'],
          this.state.ingredients['5longaniza'],
          this.state.ingredients['6pollo']
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
    if(ingredientQuantity === 0 && (type==='1tortilla' || type==='7cilantro' || type==='8cebolla' || type==='9queso' || type==='zpina')) {
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
    /*this.setState({loading: true});
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
      });*/
    const queryParams = [];
    for(let key in this.state.ingredients){
      queryParams.push(encodeURIComponent(key)+'='+encodeURIComponent(this.state.ingredients[key]));
    }
    const queryString = queryParams.join('&');  
    this.props.history.push({
      pathname:'/checkout',
      search: '?' + queryString
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
    } // {1tortilla: true, 2pastor: true...} if ture should be disable
    
    const disabledMore = {
      ...this.state.ingredients
    };
    // we don't need to mimic the previous for in because here we want to keep the values as they are since they evaluate correctly into either tru or false
    // if (any meats are more than one then disable button by changing all of them into true) 
      // we need the actual true not the number because if we get the number we will render aswell
    if (disabledMore['2pastor'] === 1) {
      disabledMore['2pastor'] = true;
      disabledMore['3suadero'] = true;
      disabledMore['4bistec'] = true;
      disabledMore['5longaniza'] = true;
      disabledMore['6pollo'] = true;
    }

    if (disabledMore['3suadero'] === 1) {
      disabledMore['2pastor'] = true;
      disabledMore['3suadero'] = true;
      disabledMore['4bistec'] = true;
      disabledMore['5longaniza'] = true;
      disabledMore['6pollo'] = true;
    }

    if (disabledMore['4bistec'] === 1) {
      disabledMore['2pastor'] = true;
      disabledMore['3suadero'] = true;
      disabledMore['4bistec'] = true;
      disabledMore['5longaniza'] = true;
      disabledMore['6pollo'] = true;
    }

    if (disabledMore['5longaniza'] === 1) {
      disabledMore['2pastor'] = true;
      disabledMore['3suadero'] = true;
      disabledMore['4bistec'] = true;
      disabledMore['5longaniza'] = true;
      disabledMore['6pollo'] = true;
    }

    if (disabledMore['6pollo'] === 1) {
      disabledMore['2pastor'] = true;
      disabledMore['3suadero'] = true;
      disabledMore['4bistec'] = true;
      disabledMore['5longaniza'] = true;
      disabledMore['6pollo'] = true;
    }
    let orderSummary = null;

    let taco = this.state.error ? <Aux><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p>Game Over</p></Aux> : <Spinner />;

    if(this.state.ingredients){
    taco = ( 
      <Aux>
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
      </Aux>);
      orderSummary =
      <OrderSummary 
        ingredients={this.state.ingredients} 
        quantity={this.state.quantity} 
        price={this.state.totalPrice} 
        modalContinue={this.modalContinueHandler} 
        modalCancel={this.modalDisplayHandlerCancel} />;
        
        if (this.state.loading) {
          orderSummary = <Spinner />;
        }
      }

    return (
      <Aux>  
        <Modal show={this.state.modalDisplay} modalClosed={this.modalDisplayHandlerCancel} >
          {orderSummary}
        </Modal>
        {taco}
      </Aux>
    );
  }
}

export default withErrorHandler(TacoBuilder, axios);