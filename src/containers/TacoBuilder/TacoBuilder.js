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
      onion: 0,
      pina: 0
    },
    totalPrice: 20
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    let updatedCount;
    if(oldCount===0) {
      updatedCount = oldCount +1;
    }
    // state should be updated in an inmutable way
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type]=updatedCount;
    this.setState({ingredients: updatedIngredients})
  }

  removeIngredient = type => {

  }

  render () {
    return (
      <Aux>
        <Taco ingredients={this.state.ingredients}/>
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default TacoBuilder;