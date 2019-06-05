import React from 'react'
import Taco from '../../Taco/Taco'; 
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Disfruta de tu orden!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Taco ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger" clicked>Cancel</Button>
      <Button btnType="Success" clicked>Continuar</Button>
    </div>
  );
}

export default checkoutSummary;
