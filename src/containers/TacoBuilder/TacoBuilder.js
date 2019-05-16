import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Taco from '../../components/Taco/Taco';

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