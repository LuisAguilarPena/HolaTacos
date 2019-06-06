import React from 'react';
import classes from './Order.module.css';

const order = props => { 
  const ingredients = [];
  for(let ingredientName in props.ingredients) {
    ingredients.push(
      {
        name: ingredientName, 
        amount: props.ingredients[ingredientName]
      }
    );
  }  

  const ingredientOutput = ingredients.map(ig => {
    if(ig.amount>0){
    return <span 
      className={classes.Span}
      key={ig.name}>{ig.name.slice(1)} {/*({ig.amount})*/}</span>;
  }else {return null}})
  return (
    <div className={classes.Order} onClick={props.removed}>
      <p><strong>Ingredientes:</strong> {ingredientOutput}</p>
      <p><strong>{props.price/20} Tacos = </strong><strong>${props.price}</strong></p>    
    </div>
  );
}

export default order;