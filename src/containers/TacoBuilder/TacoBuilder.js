import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Taco from '../../components/Taco/Taco';
import BuildControls from '../../components/Taco/BuildControls/BuildControls';

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
      pina: 0
    },
    totalPrice: 20
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
      console.log(`addIngredientHandler added 1 to ${type}`);
      // state should be updated in an inmutable way
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type]=ingredientQuantity+1;
      this.setState({ingredients: updatedIngredients})
    }
    // let other ingredients be added
    if(ingredientQuantity === 0 && (type==='tortilla' || type==='cilantro' || type==='cebolla' || type==='pina')) {
      console.log(`addIngredientHandler added 1 to ${type}`);
      // state should be updated in an inmutable way
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type]=ingredientQuantity+1;
      this.setState({ingredients: updatedIngredients})
    }
    console.log(this.state.ingredients);
    console.log(meats);
  }

  removeIngredientHandler = type => {
    let ingredientQuantity = this.state.ingredients[type]
    if(ingredientQuantity === 1) {
      console.log(`removeIngredientHandler removed 1 to ${type}`);
      // state should be updated in an inmutable way
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type]=ingredientQuantity-1;
      this.setState({ingredients: updatedIngredients})
    }
    console.log(this.state.ingredients);
  }

  render () {
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
      disabledMore.suadero = true;
      disabledMore.pastor = true;
      disabledMore.bistec = true;
      disabledMore.longaniza = true;
      disabledMore.pollo = true;
    }

    if (disabledMore.bistec === 1) {
      disabledMore.suadero = true;
      disabledMore.pastor = true;
      disabledMore.bistec = true;
      disabledMore.longaniza = true;
      disabledMore.pollo = true;
    }

    if (disabledMore.longaniza === 1) {
      disabledMore.suadero = true;
      disabledMore.pastor = true;
      disabledMore.bistec = true;
      disabledMore.longaniza = true;
      disabledMore.pollo = true;
    }

    if (disabledMore.pollo === 1) {
      disabledMore.suadero = true;
      disabledMore.pastor = true;
      disabledMore.bistec = true;
      disabledMore.longaniza = true;
      disabledMore.pollo = true;
    }

    return (
      <Aux>
        <Taco ingredients={this.state.ingredients}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo} 
          disabledMore={disabledMore} />
      </Aux>
    );
  }
}

export default TacoBuilder;