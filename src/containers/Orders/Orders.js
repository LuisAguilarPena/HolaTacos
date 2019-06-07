import React, { Component } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    orderData: [],
    loading: true
  }
  
  componentDidMount() {
    axios.get('/orders.json')
    .then(res => {
      console.log(res.data);
      let fetchedOrders = [];
      //the key are the ids createed by firebase
      for(let key in res.data){
        fetchedOrders.push({...res.data[key],
          id:key
        });
      }
      //the key are the ids createed by firebase
      this.setState({loading: false, orders: fetchedOrders});
      console.log(fetchedOrders);
    })
    .catch(err => {
      this.setState({loading: false});
    })
  }
  
  deleteOrderHandler = (index, id) => {
    axios.delete(`/orders/${id}.json`)
    .then(res => {
      let x = [...this.state.orders]
      x.splice(index, 1);
      this.setState({orders: x})
    })    
  }

  render () {
    return (
      <div>
        {this.state.orders.map((order, index) => (
          
          <Order 
            key={index}
            ingredients={order.ingredients}
            extras={order.orderData}
            price={order.price}
            removed={() => this.deleteOrderHandler(index, order.id)}/>
        ))}
      </div>
    );
  }  
}

export default withErrorHandler(Orders, axios);
