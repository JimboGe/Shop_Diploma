import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/pages/Home/Home';
import Service from './components/pages/Service/Service'
import SignUpPage from './components/pages/SignUp/SignUpPage'
import SignIn from './components/pages/SignIn/SignIn'
import Cart from './components/pages/Cart/Cart'
import ListProducts from './components/pages/Catalog/ListProducts'
import ProductPage from './components/pages/Product/ProductPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default () => (
  <Layout>
      <Route exact path='/' component={ Home } />
      <Route exact path='/services' component={ Service} />
      <Route exact path='/account/signup' component={ SignUpPage }/>
      <Route exact path='/account/signin' component={ SignIn }/>
      <Route exact path='/cart' component={ Cart }/>
      <Route exact path='/catalog' component={ ListProducts }/>
      <Route exact path='/catalog/:gender' component={ ListProducts }/>
      <Route exact path='/catalog/:gender/:category' component={ ListProducts }/>
      <Route exact path='/catalog/:gender/:category/:brand' component={ ListProducts }/>
      <Route exact path='/catalog/:gender/:category/:brand/p/:id' component={ ProductPage }/>
  </Layout>
);
