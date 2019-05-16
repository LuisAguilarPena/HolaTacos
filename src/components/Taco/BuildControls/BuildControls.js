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
  {label: 'Onion', type: 'onion'},
  {label: 'Pina', type: 'pina'}
]
const buildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => <BuildControl 
      key={ctrl.label} 
      label={ctrl.label}
      added={() => props.ingredientAdded(ctrl.type)} />
    )}
  </div>
);

export default buildControls;