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
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '4px solid black',
        padding: '10px'
        }}
      key={ig.name}>{ig.name.slice(1)} ({ig.amount})</span>;
  }else {return null}})
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>$ {props.price}</strong></p>    
    </div>
  );
}

export default order;
