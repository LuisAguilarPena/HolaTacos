import React from 'react';
import classes from './FAQ.module.css';

const FAQ = () => (
  <div className={classes.Order}>
    <h2>Sección de ayuda</h2>
    <br/>
    <h4>¿Ordeno directamente en la app?</h4>
    <p>Efectivamente estimado usuario, todo el menu se encuentra disponible dentro de la app, por ende se puede realizar todos los pedidos desde la misma y simplemente esperar a que llevemos tu orden a tu mesa.</p>
    <br/>
    <h4>¿Puedo pagar directamente en la app?</h4>
    <p>Por el momento esa opción no se encuentra disponible, por favor solicite su cuenta con alguien del staff.</p>
    <br/>
    <h4>¿Por qué la app estan eficiente?</h4>
    <p>Para que puedas llegar y disfrutar de tus tacos a tu tiempo.</p>
  </div>
);

export default FAQ;
