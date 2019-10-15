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
    return (
      <div className='container dropdown' style={{ marginTop: '0px', marginLeft: '-27px' }}>
        <div className="row">
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='/catalog/search?category=clothes&gender=man' name='clothes'>
                ОДЕЖА
              </Link>
              <Link to='/catalog/search?category=jeens&gender=man' name='jeens'>
                <li style={{ paddingTop: '10px' }}>
                  Джинси
                </li>
              </Link>
              <Link to='/catalog/search?category=jeens-shorts&gender=man'  name='jeens-shorts'>
                <li>
                  Джинсові шорти
                </li>
              </Link>
              <Link to='/catalog/search?category=t-shirts&gender=man' name='t-shirts'>
                <li>
                  Футболки
                </li>
              </Link>
              <Link to='/catalog/search?category=shorts&gender=man'  name='shorts'>
                <li>
                  Шорти
                </li>
              </Link>
              <Link to='/catalog/search?category=sport-trousers&gender=man'  name='sport-trousers'>
                <li>
                  Спорт. штани
                </li>
              </Link>
              <Link to='/catalog/search?category=sport-sweatshirts&gender=man' name='sport-sweatshirts'>
                <li>
                  Спорт. кофти
                </li>
              </Link>
              <Link to='/catalog/search?category=sport-costumes&gender=man'  name='sport-costumes'>
                <li>
                  Спорт. костюми
                </li>
              </Link>
              <Link to='/catalog/search?category=jackets&gender=man'  name='jackets'>
                <li>
                  Куртки
                </li>
              </Link>
              <Link to='/catalog/search?category=anoraki&gender=man' name='anoraki'>
                <li>
                  Анораки
                </li>
              </Link>
              <Link to='/catalog/search?category=sweatshirts&gender=man' name='sweatshirts'>
                <li>
                  Толстовки
                </li>
              </Link>
              <Link to='/catalog/search?category=shirts&gender=man' name='shirts'>
                <li>
                  Сорочки
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='/catalog/search?category=backpacks-bags&gender=man' name='backpacks-bags'>
                РЮКЗАКИ, СУМКИ
              </Link>
              <Link to='/catalog/search?category=bananki&gender=man' name='bananki'>
                <li style={{ paddingTop: '10px' }}>
                  Бананки
                </li>
              </Link>
              <Link to='/catalog/search?category=backpacks&gender=man' name='backpacks'>
                <li>
                  Рюкзаки
                </li>
              </Link>
              <Link to='/catalog/search?category=bags-on-the-shoulder&gender=man' name='bags-on-the-shoulder'>
                <li>
                  Сумки на плече
                </li>
              </Link>
              <Link to='/catalog/search?category=sport-bags&gender=man' name='sport-bags'>
                <li>
                  Спорт. сумки
                </li>
              </Link>
              <Link to='/catalog/search?category=accessories&gender=man' name='accessories'>
                <p style={{ marginTop: '15px' }}>АКСЕСУАРИ</p>
              </Link>
              <Link to='/catalog/search?category=baseball-caps&gender=man' name='baseball-caps'>
                <li>
                  Бейсболки
                </li>
              </Link>
              <Link to='/catalog/search?category=socks&gender=man' name='socks'>
                <li>
                  Шкарпетки
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='/catalog/search?category=shoes&gender=man' name='shoes'>
                ВЗУТТЯ
              </Link>
              <Link to='/catalog/search?category=kedi&gender=man' name='kedi'>
                <li style={{ paddingTop: '10px' }}>
                  Кеди
                </li>
              </Link>
              <Link to='/catalog/search?category=sneakers&gender=man' name='sneakers'>
                <li>
                  Кроссівки
                </li>
              </Link>
              <Link to='/catalog/search?category=chereviki&gender=man' name='chereviki'>
                <li>
                  Черевики
                </li>
              </Link>
              <Link to='/catalog/search?category=mokasins&gender=man' name='mokasins'>
                <li>
                  Мокасіни
                </li>
              </Link>
              <Link to='/catalog/search?category=tufli&gender=man' name='tufli'>
                <li>
                  Туфлі
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
              <Link to='/catalog/search?category=clothes&gender=woman' name='clothes'>
                ОДЕЖА
              </Link>
              <Link to='/catalog/search?category=jeens&gender=woman' name='jeens'>
                <li style={{ paddingTop: '10px' }}>
                  Джинси
                </li>
              </Link>
              <Link to='/catalog/search?category=jeens-shorts&gender=woman'  name='jeens-shorts'>
                <li>
                  Джинсові шорти
                </li>
              </Link>
              <Link to='/catalog/search?category=t-shirts&gender=woman' name='t-shirts'>
                <li>
                  Футболки
                </li>
              </Link>
              <Link to='/catalog/search?category=shorts&gender=woman'  name='shorts'>
                <li>
                  Шорти
                </li>
              </Link>
              <Link to='/catalog/search?category=sport-trousers&gender=woman'  name='sport-trousers'>
                <li>
                  Спорт. штани
                </li>
              </Link>
              <Link to='/catalog/search?category=sport-sweatshirts&gender=woman' name='sport-sweatshirts'>
                <li>
                  Спорт. кофти
                </li>
              </Link>
              <Link to='/catalog/search?category=sport-costumes&gender=woman'  name='sport-costumes'>
                <li>
                  Спорт. костюми
                </li>
              </Link>
              <Link to='/catalog/search?category=jackets&gender=woman'  name='jackets'>
                <li>
                  Куртки
                </li>
              </Link>
              <Link to='/catalog/search?category=dress&gender=woman' name='dress'>
                <li>
                  Сукні
                </li>
              </Link>
              <Link to='/catalog/search?category=sweatshirts&gender=woman' name='sweatshirts'>
                <li>
                  Толстовки
                </li>
              </Link>
              <Link to='/catalog/search?category=skirts&gender=woman' name='skirts'>
                <li>
                  Юбки
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='/catalog/search?category=backpacks-bags&gender=woman' name='backpacks-bags'>
                РЮКЗАКИ, СУМКИ
              </Link>
              <Link to='/catalog/search?category=bananki&gender=woman' name='bananki'>
                <li style={{ paddingTop: '10px' }}>
                  Бананки
                </li>
              </Link>
              <Link to='/catalog/search?category=backpacks&gender=woman' name='backpacks'>
                <li>
                  Рюкзаки
                </li>
              </Link>
              <Link to='/catalog/search?category=bags-on-the-shoulder&gender=woman' name='bags-on-the-shoulder'>
                <li>
                  Сумки на плече
                </li>
              </Link>
              <Link to='/catalog/search?category=sport-bags&gender=woman' name='sport-bags'>
                <li>
                  Спорт. сумки
                </li>
              </Link>
              <Link to='/catalog/search?category=accessories&gender=woman' name='accessories'>
                <p style={{ marginTop: '15px' }}>АКСЕСУАРИ</p>
              </Link>
              <Link to='/catalog/search?category=baseball-caps&gender=woman' name='baseball-caps'>
                <li>
                  Бейсболки
                </li>
              </Link>
              <Link to='/catalog/search?category=socks&gender=woman' name='socks'>
                <li>
                  Шкарпетки
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='/catalog/search?category=shoes&gender=woman' name='shoes'>
                ВЗУТТЯ
              </Link>
              <Link to='/catalog/search?category=kedi&gender=woman' name='kedi'>
                <li style={{ paddingTop: '10px' }}>
                  Кеди
                </li>
              </Link>
              <Link to='/catalog/search?category=sneakers&gender=woman' name='sneakers'>
                <li>
                  Кроссівки
                </li>
              </Link>
              <Link to='/catalog/search?category=chereviki&gender=woman' name='chereviki'>
                <li>
                  Черевики
                </li>
              </Link>
              <Link to='/catalog/search?category=mokasins&gender=woman' name='mokasins'>
                <li>
                  Мокасіни
                </li>
              </Link>
              <Link to='/catalog/search?category=tufli&gender=woman' name='tufli'>
                <li>
                  Туфлі
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
   
    console.log("USER-----", this.props.auth.user);
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