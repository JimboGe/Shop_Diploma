import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Row, Col, Navbar, NavItem } from "react-bootstrap";
import './NavMenu.css';
import { connect } from "react-redux";
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ''
    };
  }

  logout = (e) => {
    this.props.logout();
  }
  searchProduct = (e) => {
    e.preventDefault();
    let { searchKey } = this.state;
    this.getElementsBySearch(searchKey);
  }
  handleChange = (e) => {
    this.setState({ searchKey: e.target.value });
  }
  render() {

    const countItemCart =  this.props.cartProducts.length;
    let {cartProducts} = this.props;

    const { isAuthenticated, user } = this.props.auth;
    var guestElem = (<div>
      <Link to='/cart'>
        <i className="fa fa-shopping-cart"></i>
        <span>КОРЗИНА</span>
        <span className='cart-item-count'>{countItemCart}</span>
      </Link>
      <Link to='/account/signin'>
        <i className="fa fa-user"></i>
        <span>УВІЙТИ</span>
      </Link>
      <Link to='/account/signup'>
        <i className="fa fa-user-plus"></i>
        <span>ЗАРЕЄСТРУВАТИСЯ</span>
      </Link>
    </div>);
    var userElem = (<div>
      <Link to='/cart'>
        <i className="fa fa-shopping-cart"></i>
        <span>КОРЗИНА</span>
        <span className='cart-item-count'>{countItemCart}</span>
      </Link>
      <Link to='/profile'>
        <span>{isAuthenticated ? user.name.toUpperCase() : ''}</span>
      </Link>
      <a href='/' onClick={this.logout}>
        <span>ВИЙТИ</span>
      </a>
    </div>)
    return (
      <div style={{ width: '100%' }}>
        <div style={{ borderRadius: '0' }} className='navbar top'>
          <nav>
            <div className='container'>
              <div style={{ float: 'left', marginTop: '3.5px' }}>
                <i className="fa fa-phone" style={{ fontSize: '25px' }}></i>
              </div>
              <div style={{ float: 'left', marginLeft: '0.7%', marginTop: '3.5px' }} className='phone'>
                <a href="tel:+3800967872781" className='phone'>+38 (096) 787 27 81</a>
              </div>
              <div style={{ float: 'left', marginLeft: '1%', paddingTop: '1px', marginTop: '3.5px' }}>
                <Link to='/services' className='services'> Доставка, оплата, повернення</Link>
              </div>

              <div style={{ float: 'right' }}>
                <form onSubmit={this.searchProduct} >
                  <input type="text" className="form-control" value={this.state.search}
                    onChange={this.handleChange} placeholder="Пошук..." />
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div style={{ borderRadius: '0' }} className='navbar middle'>
          <nav>
            <div className='container' >
              <Row>
                <Col md={8}>
                  <div className='logo'>
                    <a href='/'>
                      <img src='/img/logo.png' height='70px' alt='logo' />
                      <div>
                        <span>
                          The clothest, that live your life.
                        </span>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col lg={4} >
                  <div className='right'>
                    {isAuthenticated ? userElem : guestElem}
                  </div>
                </Col>
              </Row>
            </div>
          </nav>
        </div>
        <div style={{ borderRadius: '0' }} className='navbar bot'>
          <nav>
            <div className='container'>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href='/'>Головна</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='/catalog/search?gender=man'>Чоловіче</a>
                </li>
                <li className="nav-item" >
                  <a className="nav-link" href="/catalog/search?gender=woman">Жіноче</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catalog/search?category=backpacks">Рюкзаки</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catalog/search?category=bananki">Бананки</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">Новинки</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/discounts">Знижки</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
NavMenu.propTypes =
  {
    logout: PropTypes.func.isRequired
  }
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    cartProducts: state.cartProducts.cartProducts
  };
}
export default connect(mapStateToProps, { logout })(NavMenu);