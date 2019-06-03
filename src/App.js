import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import TacoBuilder from './containers/TacoBuilder/TacoBuilder';
import Checkout from './containers/Checkout/Checkout';
// Root component of our application, all other components will be nested here
class App extends Component{
  render(){
    return (
      <div>
        <Layout>
          <TacoBuilder/>
          <Checkout/>
        </Layout>
      </div>
    );
  }
}

export default App;
