import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './TacoIngredient.module.css';

class TacoIngredient extends Component{
  render(){
    let ingredient = null;
    switch (this.props.type) {
      case ('1tortilla'):
        ingredient = <div className={classes.tortilla}></div>;
        break;
      case('2pastor'):
        ingredient = <div className={classes.pastor}></div>;
        break;
      case('3suadero'):
        ingredient = <div className={classes.suadero}></div>;
        break;
      case('4bistec'):
        ingredient = <div className={classes.bistec}></div>;
        break;
      case('5longaniza'):
        ingredient = <div className={classes.longaniza}></div>;
        break;
      case('6pollo'):
        ingredient = <div className={classes.pollo}></div>;
        break;
      case('7cilantro'):
        ingredient = <div className={classes.cilantro}></div>;
        break;
      case('8cebolla'):
        ingredient = <div className={classes.cebolla}></div>;
        break;
      case('9queso'):
        ingredient = <div className={classes.queso}></div>;
        break;
      case('zpina'):
        ingredient = <div className={classes.pina}></div>;
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