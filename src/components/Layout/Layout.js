import React from 'react';

// this is my high order component that I'm using to wrap my elements so I don't have to use a div and that way components can be next to each other and I don't clutter the DOM with a bunch of divs
import Aux from '../../hoc/Aux';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;