import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './TacoIngredient.module.css';

class TacoIngredient extends Component{
  render(){
    let ingredient = null;
    switch (this.props.type) {
      case ('tortilla'):
        ingredient = <div className={classes.tortilla}></div>;
        break;
      case('pastor'):
        ingredient = <div className={classes.pastor}></div>;
        break;
      case('suadero'):
        ingredient = <div className={classes.suadero}></div>;
        break;
      case('bistec'):
        ingredient = <div className={classes.bistec}></div>;
        break;
      case('longaniza'):
        ingredient = <div className={classes.longaniza}></div>;
        break;
      case('pollo'):
        ingredient = <div className={classes.pollo}></div>;
        break;
      case('pina'):
        ingredient = <div className={classes.pina}></div>;
        break;
      case('cilantro'):
        ingredient = <div className={classes.cilantro}></div>;
        break;
      case('onion'):
        ingredient = <div className={classes.onion}></div>;
        break;
      default:
        ingredient = null;  
    }
    return ingredient;
  }
}
TacoIngredient.propTypes={
  // check that ingredient is a str
  type: PropTypes.string.isRequired
};
export default TacoIngredient;