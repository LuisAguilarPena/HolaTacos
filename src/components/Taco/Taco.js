import React from 'react';
import classes from './Taco.module.css';
import TacoIngredient from './TacoIngredients/TacoIngredient';
import Aux from '../../hoc/Aux/Aux';
import LogoImage from '../../assets/images/tacoPlaceholder2.gif';

const taco = props => {
  // [1tortilla, 2pastor, 3suadero...]
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // an array with empty arrays or arrays with undefined for every ingredient
      return [...Array(props.ingredients[igKey])]
        // underscore is a blank but the index is required  
        .map((_, i) => <TacoIngredient key={igKey+i} type={igKey} />)
    })
    // console.log(transformedIngredients);
    // array of arrays of obj elements, if an ingredient is 1 otherwise is an empty array, each e is an ingredient and it has multiple things inside
    // reduce to pull out the values of the inner arrays
    .reduce((prevValue, currValue) => prevValue.concat(currValue));
    // the [] after the callback seems to not be necessary for reduce, is an initial value to store in an empty array
    // when we add more ingredients the obj inner elment will be the elment of array
    //console.log(transformedIngredients); // ingredients in a flat array   
    if (transformedIngredients.length ===0) {
      transformedIngredients = <Aux><img style={{height: '80%', marginTop: '40px'}} src={LogoImage} alt="Logo"></img></Aux>
    }
  return (
    <div className={classes.Taco}>
      <div className={classes.Tittle}><strong>Admira tu hermoso taco</strong></div>
      {transformedIngredients}
    </div>
  );
};

export default taco;