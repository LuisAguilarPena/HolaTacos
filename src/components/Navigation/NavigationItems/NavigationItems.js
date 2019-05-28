import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import contact from '../../../assets/images/contact.png';
import help from '../../../assets/images/ayuda.png';
import checkout from '../../../assets/images/checkout.png';
import avatar from '../../../assets/images/avatar.png';
import taco from '../../../assets/images/taco.png';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active><img src={taco} alt="avatar"/></NavigationItem>
    <NavigationItem link="/" ><img src={avatar} alt="avatar"/></NavigationItem>
    <NavigationItem link="/" ><img src={checkout} alt="Checkout"/></NavigationItem>
    <NavigationItem link="/" ><img src={help} alt="Ayuda"/></NavigationItem>
    <NavigationItem link="/" ><img src={contact} alt="Contact"/></NavigationItem>
  </ul>
)

export default navigationItems;
