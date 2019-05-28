import React, { Component } from 'react';
// this is my high order component that I'm using to wrap my elements so I don't have to use a div and that way components can be next to each other and I don't clutter the DOM with a bunch of divs
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }
  
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => { 
      return {showSideDrawer: !this.state.showSideDrawer};
    });
  } 

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}  

export default Layout;