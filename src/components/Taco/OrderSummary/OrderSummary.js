import React from 'react';
import Aux from '../../../hoc/Aux';

const  orderSummary = props => {
  const chosenIngredients = (object) => {
    let arr = [];
    let keys = Object.keys(object);
    let values = Object.values(object);
    for (let i = 0; i < values.length; i++) {
      if(values[i]>0) arr.push(keys[i]);
    }
    return arr;
  }
  const ingredientSummary = chosenIngredients(props.ingredients) // here I will have an array of lonly the ingredients that are chosen
    .map(igKey => <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span></li>)
  return (
    <Aux>
      <h3>Resumen de orden:</h3>
      <p><strong>10</strong> tacos con los siguientes ingredientes:</p>
      <ul>
        {ingredientSummary}
      </ul> 
      <p>Han sido agregados a tu carrito.</p>
    </Aux>
  )
};

export default orderSummary;