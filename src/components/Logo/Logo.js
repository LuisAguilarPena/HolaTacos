import React from 'react';
import HolaTacosLogo from '../../assets/images/Logo.png';
import classes from './Logo.module.css';

const logo = props => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={HolaTacosLogo} alt="HolaTacos!"/>      
  </div>
);

export default logo;
