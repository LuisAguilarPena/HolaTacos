import React from 'react'
import Taco from '../../Taco/Taco'; 
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = props => {
  return (
    <div>
      <div className={classes.CheckoutSummary}>
        <div className={classes.Tittle}><p><strong>¿Agregar orden a tu compra?</strong></p></div>
        <div className={classes.Buttons}>
          <Button btnType="Danger" clicked={props.checkoutCancelled}>No, regresar</Button>
          <Button btnType="Success" clicked={props.checkoutContinued}>Si, continuar</Button>
        </div>
      </div>
      <div>
        <Taco ingredients={props.ingredients}/>
      </div>
    </div>
  );
}

export default checkoutSummary;
