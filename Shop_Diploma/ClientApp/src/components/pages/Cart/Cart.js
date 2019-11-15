import React, { Component } from 'react';
import './Cart.css';
import { connect } from "react-redux";
import { getCartProducts, deleteProductByCart } from '../../../actions/cart';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false
        };
    }
    getPrice(cartProducts) {
        let priceCart = 0;
        cartProducts.forEach(element => {
            priceCart += element.price * element.count;
        });
        return (
            priceCart
        );
    }

    getCountProduct(cartProducts) {
        let count = 0;
        cartProducts.forEach(element => {
            count += element.count;
        });
        return count;
    }

    deleteProduct = (e) => {
        const index = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('index');
        this.props.deleteProductByCart(index);
    }

    addCartItems(value, index) {
        return (
            <tr index={index}>
                <td>
                    <div className='product-img'>
                        <img src={value.image}
                            alt='product-img' />
                    </div>
                </td>
                <td>
                    <div>
                        <div className='product-title'>
                            <a href={value.hrefProduct}>
                                {value.name}
                            </a>
                        </div>
                        <div className='product-size'>
                            <span>Розмір: {value.size}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='product-price'>
                        {value.price} грн.
                    </div>
                </td>
                <td>
                    <div className='product-quantity'>
                        Кількість: {value.count}
                    </div>
                </td>
                <td>
                    <div className='product-price-total'>
                        {value.price * value.count} грн.
                    </div>
                </td>
                <td>
                    <div className='product-delete'>
                        <button onClick={this.deleteProduct}><i class="fa fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        );
    }

    submit=()=>{
        const {isAuthenticated} = this.props.auth;
        if(isAuthenticated){
            alert('Замовлення успішно додано');
            window.location.href = '/profile/historyOrders';
            
        }
        else{
            window.location.href = '/account/signin';
        }
    }

    render() {
        const { cartProducts } = this.props;
        
        const priceCart = this.getPrice(cartProducts);
        const count = this.getCountProduct(cartProducts);
        return (
            <div className='container cart'>
                {cartProducts.length > 0 ?
                    <div>
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
                                {cartProducts.length > 0 && cartProducts.map((value, index) => this.addCartItems(value, index))}
                            </table>
                        </div>
                        <div className='result-price'>
                            <div>
                                <span className='text'>Всього товарів:</span>
                                <span className='value'>{count} шт.</span><br />

                                <span className='text'>Ціна товарів:</span>
                                <span className='value'>{priceCart} грн.</span><br />
                                
                                <span className='text'>Доставка:</span>
                                <span className='value'>(40-60) грн.</span><br />
                               
                                <span className='text'>До оплати:</span>
                                <span className='value'>({priceCart + 40}-{priceCart + 60}) грн.</span>
                            </div>
                            
                            <button className="btn btn-dark" onClick={this.submit}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
                        </div>
                    </div> :
                    <div className='header'>
                        <h2>КОШИК ДЛЯ ПОКУПОК ПУСТИЙ</h2>
                        <a href='/catalog/search?'>
                            Ви можете подивитися наш каталог
                        </a>
                    </div>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('store', state);
    return {
        cartProducts: state.cartProducts.cartProducts,
        auth: state.auth
    };
}
export default connect(mapStateToProps, { getCartProducts, deleteProductByCart })(Cart)