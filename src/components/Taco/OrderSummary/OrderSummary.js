import React, { Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[OrderSummary] Didupdate');
    
  }

  render(){
    const chosenIngredients = (object) => {
      let arr = [];
      let keys = Object.keys(object);
      let values = Object.values(object);
      for (let i = 0; i < values.length; i++) {
        if(values[i]>0) arr.push(keys[i]);
      }
      return arr;
    }
    const ingredientSummary = chosenIngredients(this.props.ingredients) // here I will have an array of lonly the ingredients that are chosen
    .map(igKey => <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span></li>)
    return (
      <Aux>
        <h3>Resumen de orden:</h3>
        <p><strong>{this.props.quantity}</strong> tacos con los siguientes ingredientes:</p>
        <ul>
          {ingredientSummary}
        </ul> 
        <p>Han sido agregados a tu carrito.</p>
        <p>Total a pagar <strong>{this.props.quantity*this.props.price}</strong></p>
        <p>¿Continuar al carrito?</p>
        <Button btnType="Success" clicked={this.props.modalContinue}>Continuar</Button>
        <Button btnType="Danger" clicked={this.props.modalCancel}>Cancelar</Button>
      </Aux>
    )}
};

export default OrderSummary;