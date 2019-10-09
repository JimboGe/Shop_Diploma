import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import  NavMenu  from './Navbar/NavMenu';
import  Footer  from './Footer/Footer';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';

export default props => (
  <Grid fluid>
    <Row>
      <NavMenu />
    </Row>
    <Row>
      <BreadCrumbs />
      {props.children}
    </Row>
    <Row>
      <Footer/>
    </Row>
  </Grid>
);  
