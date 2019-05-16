import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import TacoBuilder from './containers/TacoBuilder/TacoBuilder';
// Root component of our application, all other components will be nested here
class App extends Component{
  render(){
    return (
      <div>
        <Layout>
          <TacoBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
