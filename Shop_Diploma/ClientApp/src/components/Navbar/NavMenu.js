import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Row, Col, Navbar,  NavItem } from "react-bootstrap";
import './NavMenu.css';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  dropItemMan() {

    var gender = 'man';
    return (
      <div className='container dropdown' style={{ marginTop: '0px', marginLeft: '-27px' }}>
        <div className="row">
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='/catalog/man/clothes' name='clothes'>
                ОДЕЖА
              </Link>
              <a href='/catalog/man/jeens' name='jeens'>
                <li style={{ paddingTop: '10px' }}>
                  Джинси
                </li>
              </a>
              <a href='#' onClick={(e) => this.generic_href(gender, e)} name='jeens-shorts'>
                <li>
                  Джинсові шорти
                </li>
              </a>
              <a href='#' onClick={(e) => this.generic_href(gender, e)} name='t-shirts'>
                <li>
                  Футболки
                </li>
              </a>
              <a href='#' onClick={(e) => this.generic_href(gender, e)} name='shorts'>
                <li>
                  Шорти
                </li>
              </a>
              <a href='#' onClick={(e) => this.generic_href(gender, e)} name='sport-trousers'>
                <li>
                  Спорт. штани
                </li>
              </a>
              <a href='#' onClick={(e) => this.generic_href(gender, e)} name='sport-sweatshirts'>
                <li>
                  Спорт. кофти
                </li>
              </a>
              <a href='#' onClick={(e) => this.generic_href(gender, e)} name='sport-costumes'>
                <li>
                  Спорт. костюми
                </li>
              </a>
              <a href='#' onClick={(e) => this.generic_href(gender, e)} name='jackets'>
                <li>
                  Куртки
                </li>
              </a>
              <a href='#' onClick={(e) => this.generic_href(gender, e)} name='anoraki'>
                <li>
                  Анораки
                </li>
              </a>
              <a href='#' onClick={(e) => this.generic_href(gender, e)} name='sweatshirts'>
                <li>
                  Толстовки
                </li>
              </a>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                РЮКЗАКИ, СУМКИ
              </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Бананки
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Рюкзаки
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Сумки на плече
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Спорт. сумки
                </li>
              </Link>
              <Link to='#' >
                <p style={{ marginTop: '15px' }}>АКСЕСУАРИ</p>
              </Link>
              <Link to='#'>
                <li>
                  Бейсболки
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Шкарпетки
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Окуляри
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                ВЗУТТЯ
              </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Кеди
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Кроссівки
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Черевики
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Мокасіни
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Туфлі
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Шльопанці
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  dropItemWoman() {
    return (
      <div className='container dropdown' style={{ marginTop: '0px' }}>
        <div className="row">
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                ОДЕЖА
            </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Джинси
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Джинсові шорти
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Футболки
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Плаття, сукні
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Спорт. кофти
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Спорт. костюми
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Шорти
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Юбки
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Комбінезони
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Куртки
              </li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                РЮКЗАКИ, СУМКИ
            </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Бананки
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Рюкзаки
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Сумки на плече
              </li>
              </Link>
              <Link to='#' >
                <p style={{ marginTop: '20px' }}>ШКАРПЕТКИ</p>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                ВЗУТТЯ
            </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Кеди
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Кроссівки
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Черевики
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Мокасіни
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Туфлі
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Шльопанці
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  dropItemCart() {
    return (
      <div className='cart'>
        <p>2 товара (Дивитися)</p>
        <div className='price'>
          <p>Сума <span>100 грн.</span></p>
        </div>
        <button className='btn btn-dark'>Оформить заказ</button>
      </div>
    );
  }
  render() {
    
    const { isAuthenticated, user } = this.props.auth;
    const userLinks = (
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {user.name} &nbsp;
          Logout
        </Navbar.Text>
      </Navbar.Collapse>
    );
    const guestLinks = (
      <Link to={"/login"}>
        <NavItem>
          Login
            </NavItem>
      </Link>
    );
    console.log("USER-----", this.props.auth.user);
    return (
      <div style={{ width: '100%' }}>
    {isAuthenticated?userLinks:guestLinks}
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
                <Link to='/cart' id='cart' >
                  <i className="fa fa-shopping-cart" style={{ fontSize: '18px' }}></i>
                  {this.dropItemCart()}
                </Link>
              </div>
              <div style={{ float: 'right' }}>
                <Form inline>
                  <FormControl type="text" placeholder="Пошук..." />
                </Form>
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
                    <Link to='/'>
                      <img src='/img/logo.png' height='70px' alt='logo' />
                      <div>
                        <span>
                          The clothest, that live your life.
                        </span>
                      </div>
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='right'>
                    <Link to='/cart'>
                      <i className="fa fa-shopping-cart"></i>
                      <span>КОРЗИНА</span>
                    </Link>
                    <Link to='/account/signin'>
                      <i className="fa fa-user"></i>
                      <span>УВІЙТИ</span>
                    </Link>
                    <Link to='/account/signup'>
                      <i className="fa fa-user-plus"></i>
                      <span>ЗАРЕЄСТРУВАТИСЯ</span>
                    </Link>
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
                <li className="nav-item dropdownmenu">
                  <a className="nav-link" href="/catalog/man">Чоловіче</a>
                  {this.dropItemMan()}
                </li>
                <li className="nav-item dropdownmenu" >
                  <a className="nav-link" href="/catalog/woman">Жіноче</a>
                  {this.dropItemWoman()}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/backpacks">Рюкзаки</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bags">Сумки-бананки</Link>
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
    auth: state.auth
  };
}
export default withRouter(connect(mapStateToProps, { logout })(NavMenu));