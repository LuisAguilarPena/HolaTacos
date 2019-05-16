import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Taco from '../../components/Taco/Taco';

class TacoBuilder extends Component {
  render () {
    return (
      <Aux>
        <Taco/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default TacoBuilder;