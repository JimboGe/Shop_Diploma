import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
class Cart extends Component {
    render() {
        return (
            <div className='container cart'>
                
                <div className='header'>
                    <h2>КОШИК ДЛЯ ПОКУПОК</h2>
                </div>
                <div>
                    <table>
                        <col width="5%" />
                        <col width="30%" />
                        <col width="15%" />
                        <col width="15%" />
                        <col width="15%" />
                        <col width="5%" />
                        <tr>
                            <td>
                                <div className='product-img'>
                                    <img src='https://gard.com.ua/image/cache/catalog/shop/products/90eca599-cd6d-11e8-ab13-ee24cb1b971f-930x1240.jpg' 
                                    alt='product-img'/>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className='product-title'>
                                        <Link to='/'>
                                            Вітровка DARK BLUE WINDBREAKER 218
                                        </Link>
                                    </div>
                                    <div className='product-size'>
                                        <span>Розмір: S</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='product-price'>
                                    590 грн
                                </div>
                            </td>
                            <td>
                                <div className='product-quantity'>
                                    Count
                                </div>
                            </td>
                            <td>
                                <div className='product-price-total'>
                                    590 грн
                                </div>
                            </td>
                            <td>
                                <div className='product-delete'>
                                    <button><i class="fa fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='product-img'>
                                    <img src='https://gard.com.ua/image/cache/catalog/shop/products/90eca599-cd6d-11e8-ab13-ee24cb1b971f-930x1240.jpg' 
                                    alt='product-img'/>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className='product-title'>
                                        <Link to='/'>
                                            Вітровка DARK BLUE WINDBREAKER 218
                                        </Link>
                                    </div>
                                    <div className='product-size'>
                                        <span>Розмір: S</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='product-price'>
                                    590 грн
                                </div>
                            </td>
                            <td>
                                <div className='product-quantity'>
                                    Count
                                </div>
                            </td>
                            <td>
                                <div className='product-price-total'>
                                    590 грн
                                </div>
                            </td>
                            <td>
                                <div className='product-delete'>
                                    <button><i class="fa fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='result-price'>
                    <div>
                        <span>Разом 1080 грн</span>
                    </div>
                    <button className="btn btn-dark">ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</button>
                </div>
            </div>
        )
    }
}
export default Cart