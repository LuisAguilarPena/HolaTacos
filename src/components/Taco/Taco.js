import React from 'react';
import classes from './Taco.module.css';
import TacoIngredient from './TacoIngredients/TacoIngredient';

const taco = props => {
  // [tortilla, pastor, suadero...]
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // an array with empty arrays or arrays with undefined for every ingredient
      return [...Array(props.ingredients[igKey])]
        // underscore is a blank but the index is required  
        .map((_, i) => <TacoIngredient key={igKey+i} type={igKey}/>)
    });
  return (
    <div className={classes.Taco}>
      <TacoIngredient type="tortilla"/>
      {transformedIngredients}
    </div>
  );
};

export default taco;