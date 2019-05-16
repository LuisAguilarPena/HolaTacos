import React from 'react';
import classes from './Taco.module.css';
import TacoIngredient from './TacoIngredients/TacoIngredient';

const taco = props => {
  return (
    <div className={classes.Taco}>
      <TacoIngredient type="tortilla"/>
      <TacoIngredient type="pollo"/>
      <TacoIngredient type="cilantro"/>
      <TacoIngredient type="onion"/>
    </div>
  );
};

export default taco;