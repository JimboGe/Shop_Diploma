import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import  NavMenu  from './Navbar/NavMenu';
import  Footer  from './Footer/Footer';
import  ScrollUp  from './ScrollUp';
export default props => (
  <Grid fluid>
    <Row>
      <NavMenu />
    </Row>
    <Row>
      {props.children}
      <ScrollUp/>
    </Row>
    <Row>
      <Footer/>
    </Row>
  </Grid>
);  
