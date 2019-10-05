import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem, Col, Row, Carousel } from "react-bootstrap";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div style={{ width: '100%' }} >
        <div style={{ borderRadius: '0' }} className='footer-top'>
          <nav>
            <div className='container'>
              <div className="row">
                <div className="col-sm">
                    <p>Контакти</p>
                </div>
                <div className="col-sm icons">
                  <a href='#'><i className="fa fa-telegram"></i></a>
                  <a href='https://www.instagram.com/clothes4u_ua/'><i className="fa fa-instagram"></i></a>
                  <a href='#'><i className="fa fa-facebook-f"></i></a>
                  <a href='#'><i className="fa fa-youtube"></i></a>
                  <a href='#'><i className="fa fa-pinterest"></i></a>
                  <a href='#'><i className="fa fa-twitter"></i></a>
                </div>
                <div className="col-sm">
                  <p>Про нас</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <ul>
                    <li className='content'>
                       <i className="fa fa-phone"></i>
                       <a href='#' >+38 (096) 787 27 81 </a>
                    </li>
                    <li className='content'>
                      <i className="fa fa-envelope"></i>
                      <a href='#' >shop4you@gmail.com </a>
                    </li>
                    <li className='content'>
                      <i className="fa fa-instagram"></i>
                      <a href='https://www.instagram.com/martyn__shop/' >instagram.com/martyn__shop/ </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm">
                </div>
                <div className="col-sm content">
                  <p>Copyright 2019© shop4you.com.ua -
                     мультибрендовий інтернет-магазин одягу, сумок та аксессуарів для хлопціві та дівчат. Всі права захищені.
                  </p>
                </div>
              </div>
              <div className="row" style={{marginTop:'40px'}}>
                <div className="col-sm-4 ">
                  <p>Графік роботи</p>
                </div>
                <div className="col-sm-4">
                  <p>Інформація</p>
                </div>
              </div>
              <div className="row" >
                <div className='col-sm-4 content'>
                <p>Прийом заказів відбувається в режимі 24/7.</p>
                <p>Обробка заказів:</p>
                <p style={{marginTop:'-17px'}}>Пн-Пт: 09:00 - 21:00 </p>
                <p style={{marginTop:'-17px'}}>Сб-Вс: 09:00 - 18:00 </p>
                <p> Ваш заказ буде гарантовано оброблений в день надходження.</p>
                <p> МИ ПРАЦЮЄМО ДЛЯ ВАС!</p>
                </div>
                <div className='col-sm-4'>
                  <ul className='info'>
                    <li className='content'>
                      <Link to='#'>Новинки</Link>
                    </li>
                    <li className='content'>
                      <Link to='#'>Доставка, оплата, обмін</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div style={{ borderRadius: '0' }} className='footer-bottom'>
          <div className='container'>
              <p>© 2019 shop4you.com.ua. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;