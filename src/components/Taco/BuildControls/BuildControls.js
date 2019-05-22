import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
// an array to conveniently build the controls
const controls = [
  {label: 'Tortilla', type: 'tortilla'},
  {label: 'Pastor', type: 'pastor'},
  {label: 'Suadero', type: 'suadero'},
  {label: 'Bistec', type: 'bistec'},
  {label: 'Longaniza', type: 'longaniza'},
  {label: 'Pollo', type: 'pollo'},
  {label: 'Cilantro', type: 'cilantro'},
  {label: 'Cebolla', type: 'cebolla'},
  {label: 'Queso', type: 'queso'},
  {label: 'Pina', type: 'pina'}
]
const buildControls = props => (
  <div className={classes.BuildControls}>
    <p><strong>{props.quantity}</strong> Tacos a <strong>${props.price}</strong> pesitos cada uno = <strong>${props.quantity*props.price}</strong></p>
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
    <button>Agregar orden</button>
  </div>
);

export default buildControls;