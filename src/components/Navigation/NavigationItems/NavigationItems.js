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
    <div className={classes.Taco}><NavigationItem link="/" ><img  src={taco} alt="build"/><span className={classes.TacoTip}>Taco</span></NavigationItem></div>
    <div className={classes.Ordenes}><NavigationItem link="/orders" ><img src={avatar} alt="current orders"/><span className={classes.OrdenesTip}>Ordenes</span></NavigationItem></div>
    <div className={classes.Historial}><NavigationItem link="/pastorders" ><img src={checkout} alt="past orders"/><span className={classes.HistorialTip}>Historial</span></NavigationItem></div>
    <div className={classes.Preguntas}><NavigationItem link="/faq" ><img src={help} alt="ayuda"/></NavigationItem><span className={classes.PreguntasTip}>Preguntas</span></div>
    <div className={classes.Contacto}><NavigationItem link="/contact" ><img src={contact} alt="contacto"/></NavigationItem><span className={classes.ContactoTip}>Contacto</span></div>
  </ul>
)

export default navigationItems;
