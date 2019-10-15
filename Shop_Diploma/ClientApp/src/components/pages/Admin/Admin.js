import React, { Component } from 'react';
import './Admin.css';
import UsersTable from './UsersTable';
import AddProductPage from './AddProductPage';
import ProductTable from './ProductsTable';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
}

  render() {
    return (
      <div className='adminPage'>
          {/* <UsersTable/> */}
          {/* <AddProductPage/> */}
          <ProductTable />
      </div>
    );
  }
}


export default Admin;