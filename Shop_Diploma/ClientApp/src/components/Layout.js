import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import  NavMenu  from './Navbar/NavMenu';
import  Footer  from './Footer/Footer';


export default props => (

  <Grid fluid>
    <Row>
      <NavMenu />
    </Row>
    <Row>
      {props.children}
    </Row>
    <Row>
      <Footer/>
    </Row>
  </Grid>
);  
