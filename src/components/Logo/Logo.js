import React from 'react';
import HolaTacosLogo from '../../assets/images/Logo.png';
import classes from './Logo.module.css';

const logo = props => (
  <div className={classes.Logo}>
    <img src={HolaTacosLogo} alt="HolaTacos!"/>      
  </div>
);

export default logo;
