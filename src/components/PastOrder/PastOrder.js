import React from 'react';
import classes from './PastOrder.module.css';

const pastOrder = props => { 
  const ingredients = [];
  const extras = [];
  console.log('1', props.ingredients);
  console.log('2', props.extras);
  
  for(let ingredientName in props.ingredients) {
    ingredients.push(
      {
        name: ingredientName, 
        amount: props.ingredients[ingredientName]
      }
    );
  }  
  for(let extra in props.extras) {
    extras.push(
      {
        name: extra, 
        selection: props.extras[extra]
      }
    );
  }  
  console.log('3', ingredients);
  console.log('4', extras);
  
  const ingredientOutput = ingredients.map(ig => {
    if(ig.amount>0){
    return <span 
      className={classes.Span}
      key={ig.name}>{ig.name.slice(1)} {/*({ig.amount})*/}</span>;
  }else {return null}})
  const extrasOutput = extras.map(i => <span 
      className={classes.Span}
      key={i.name}>{i.name}:{i.selection}</span>
  )
  return (
    <div className={classes.Order}>
      <button className={classes.Button} onClick={props.removed}>X</button>
      <p>ORDEN FINALIZADA</p>
      <p><strong>Ingredientes:</strong> {ingredientOutput}</p>
      <p><strong>Datos adicionales:</strong>{extrasOutput}</p>
      <p><strong>{props.price/20} Tacos = </strong><strong>${props.price}</strong></p>    
    </div>
  );
}

export default pastOrder;