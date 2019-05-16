import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Taco from '../../components/Taco/Taco';

class TacoBuilder extends Component {
  state = {
    ingredients: {
      tortilla: 1,
      pastor: 0,
      suadero: 0,
      bistec: 0,
      longaniza: 1,
      pollo: 0,
      cilantro: 1,
      onion: 1,
      pina: 0
    }
  }
  render () {
    return (
      <Aux>
        <Taco ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default TacoBuilder;