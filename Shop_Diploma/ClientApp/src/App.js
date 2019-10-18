import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/pages/Home/Home';
import Service from './components/pages/Service/Service';
import SignUpPage from './components/pages/SignUp/SignUpPage';
import SignIn from './components/pages/SignIn/SignIn';
import Cart from './components/pages/Cart/Cart';
import ListProducts from './components/pages/Catalog/ListProducts';
import ProductPage from './components/pages/Product/ProductPage';
import AdminPage from './components/pages/Admin/Admin';
import Order from './components/pages/Order/Order';
import Profile from './components/pages/Profile/Profile';
import EditInfo from './components/pages/Profile/EditInfoPage/EditInformation';
import ChangePassword from './components/pages/Profile/ChangePasswordPage/ChangePassword';
import ChangeAddress from './components/pages/Profile/ChangeAddressPage/ChangeAddress';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Tet from './components/Tet';

export default () => (
  <Layout>
      <Route exact path='/' component={ Home } />
      <Route exact path='/services' component={ Service} />
      <Route exact path='/account/signup' component={ SignUpPage }/>
      <Route exact path='/account/signin' component={ SignIn }/>
      <Route exact path='/cart' component={ Cart }/>
      <Route exact path='/catalog/search/:gender?/:category?/:brand?/:size?/:color?/:price?' component={ ListProducts }/>
      <Route exact path='/catalog/:gender/:category/:brand/p:id' component={ ProductPage }/>
      <Route exact path='/tet' component={ Tet }/>
      <Route exact path='/admin' component={ AdminPage }/>
      <Route exact path='/order' component={ Order }/>
      <Route exact path='/profile' component={ Profile }/>
      <Route exact path='/profile/edit' component={ EditInfo }/>
      <Route exact path='/profile/changepassword' component={ ChangePassword }/>
      <Route exact path='/profile/ChangeAddress' component={ ChangeAddress }/>
  </Layout>
);

