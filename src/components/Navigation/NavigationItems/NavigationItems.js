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
    <NavigationItem link="/" ><img src={taco} alt="build"/></NavigationItem>
    <NavigationItem link="/orders" ><img src={avatar} alt="current orders"/></NavigationItem>
    <NavigationItem link="/pastorders" ><img src={checkout} alt="past orders"/></NavigationItem>
    <NavigationItem link="/" ><img src={help} alt="ayuda"/></NavigationItem>
    <NavigationItem link="/" ><img src={contact} alt="contacto"/></NavigationItem>
  </ul>
)

export default navigationItems;
