import React from 'react'
import Taco from '../../Taco/Taco'; 
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = props => {
  return (
    <div>
      <div className={classes.CheckoutSummary}>
        <p>Disfruta de tu orden!</p>
        <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={props.checkoutContinued}>Continuar</Button>
      </div>
      <div>
        <Taco ingredients={props.ingredients}/>
      </div>
    </div>
  );
}

export default checkoutSummary;
