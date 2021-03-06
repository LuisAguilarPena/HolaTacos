import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from  'react-router-dom';
import TacoBuilder from './containers/TacoBuilder/TacoBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import PastOrders from './containers/PastOrders/PastOrders';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
// Root component of our application, all other components will be nested here
class App extends Component{
  render(){
    return (
      <div>
        <Layout>
          <Switch>
            <Route  path="/contact" component={Contact}/>
            <Route  path="/faq" component={FAQ}/>
            <Route  path="/pastorders" component={PastOrders}/>
            <Route  path="/checkout" component={Checkout}/>
            <Route  path="/orders" component={Orders}/>
            <Route  path="/" exact component={TacoBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
