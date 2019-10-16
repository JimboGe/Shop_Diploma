import React, { Component } from 'react';
import './Order.css';
import OrderForm from './OrderForm';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
}

  render() {
    return (
        <OrderForm />
    );
  }
}


export default Order;