import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Taco from '../../components/Taco/Taco';
import BuildControls from '../../components/Taco/BuildControls/BuildControls';
class TacoBuilder extends Component {
  state = {
    ingredients: {
      tortilla: 1,
      pastor: 0,
      suadero: 0,
      bistec: 0,
      longaniza: 0,
      pollo: 0,
      cilantro: 0,
      onion: 0,
      pina: 0
    }
  }
  render () {
    return (
      <Aux>
        <Taco ingredients={this.state.ingredients}/>
        <BuildControls />
      </Aux>
    );
  }
}

export default TacoBuilder;