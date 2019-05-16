import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
// an array to conveniently build the controls
const controls = [
  {label: 'tortilla', type: 'base'},
  {label: 'pastor', type: 'meat'},
  {label: 'suadero', type: 'meat'},
  {label: 'bistec', type: 'meat'},
  {label: 'longaniza', type: 'meat'},
  {label: 'pollo', type: 'meat'},
  {label: 'cilantro', type: 'veggie'},
  {label: 'onion', type: 'veggie'},
  {label: 'pina', type: 'veggie'}
]
const buildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => <BuildControl key={ctrl.label} label={ctrl.label} />)}
  </div>
);

export default buildControls;