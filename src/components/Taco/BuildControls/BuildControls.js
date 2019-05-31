import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
// an array to conveniently build the controls
const controls = [
  {label: 'Tortilla', type: '1tortilla'},
  {label: 'Pastor', type: '2pastor'},
  {label: 'Suadero', type: '3suadero'},
  {label: 'Bistec', type: '4bistec'},
  {label: 'Longaniza', type: '5longaniza'},
  {label: 'pollo', type: '6pollo'},
  {label: 'Cilantro', type: '7cilantro'},
  {label: 'Cebolla', type: '8cebolla'},
  {label: 'Queso', type: '9queso'},
  {label: 'Piña', type: 'pina'}
]
const buildControls = props => (
  <div className={classes.BuildControls}>
    <div className={classes.Tittle}><strong>Prepara tus tacos</strong></div>
    <p><strong>{props.quantity}</strong> Tacos a <strong>${props.price}</strong> = <strong>${props.quantity*props.price}</strong></p>
    {controls.map(ctrl => <BuildControl 
      key={ctrl.label} 
      label={ctrl.label}
      added={() => props.ingredientAdded(ctrl.type)} 
      removed={() => props.ingredientRemoved(ctrl.type)} 
      disabled={props.disabled[ctrl.type]} 
      disabledMore={props.disabledMore[ctrl.type]} />
    )}
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.quantity}</div>
      <button className={classes.Less} onClick={props.quantityMinus} disabled={props.disabledTQ}>-</button>
      <button className={classes.More} onClick={props.quantityPlus}>+</button>
    </div>
    <button className={classes.OrderButton} disabled={props.addToOrder} onClick={props.ordered}>Agregar orden</button>
  </div>
);

export default buildControls;