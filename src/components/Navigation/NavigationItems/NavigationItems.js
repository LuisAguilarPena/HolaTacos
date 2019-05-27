import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Taco builder</NavigationItem>
    <NavigationItem link="/" >Usuario</NavigationItem>
    <NavigationItem link="/" >Carrito</NavigationItem>
    <NavigationItem link="/" >Ayuda</NavigationItem>
    <NavigationItem link="/" >Contacto</NavigationItem>
  </ul>
)

export default navigationItems;
