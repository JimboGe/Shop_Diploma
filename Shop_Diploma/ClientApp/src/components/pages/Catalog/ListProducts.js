import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import Product from '../../Product/Product';
import './ListProducts.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { getProducts } from '../../../actions/products';
import { connect } from "react-redux";

class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeTable: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '36', '36.5', '37', '37.5', '38',
                '38.5', '39', '39.5', '40', '40.5', '41', '41.5', '42', '42.5',
                '43', '43.5', '44', '44.5', '45', '45.5', '46', '46.5', '47'],
            slidervalue: { min: 125, max: 3700 }
        };
    }
    createSizeTable(value, index) {
        return (
            <Col lg={4} key={index}>
                <Link to={`size=${value}`}>
                    <li className='secondary'>
                        <span >{value}</span>
                    </li>
                </Link>
            </Col>
        );
    }
    clickAnimation = (e) => {
        const element = e.target;
        const te = document.getElementById(e.target.id + '-menu');
        if (element.getAttribute('class') === 'hide-filter') {
            element.setAttribute('class', 'show-filter');

            te.setAttribute('class', 'visible');
        }
        else {
            element.setAttribute('class', 'hide-filter');
            te.setAttribute('class', 'hidden');
        }
    }
    changePrice() {
        const min = document.getElementById('min').value;
        const max = document.getElementById('max').value;
        this.setState(prevState => {
            let slidervalue = Object.assign({}, prevState.slidervalue);
            if (isNaN(min)) {
                slidervalue.min = 0;
            }
            else {
                slidervalue.min = parseInt(min, 10);
            }
            if (isNaN(max)) {
                slidervalue.max = 0;
            }
            else {
                slidervalue.max = parseInt(max, 10);
            }
            return { slidervalue };
        })
    }
    componentDidMount=()=>{
        this.props.getProducts()
        .then(
            () => { },
            (err) => { console.log("Error get data ", err); }
        )
    }
    render() {
        var {products} = this.props;
        console.log(products);
        return (
            <div className='list-products'>
                <Row>
                    <Col lg={2} >
                        <div id='filter' className='filter'>
                            <ul>
                                <li className='title'>
                                    МЕНЮ
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='gender' onClick={(e) => this.clickAnimation(e)}><span>СТАТЬ</span></button>
                                    <ul className='hidden' id='gender-menu'>
                                        <li className='secondary'><Link to='/catalog?gender=man'>
                                            <input type='checkbox' id='man' />
                                            <span>Чоловіча</span></Link>
                                        </li>

                                        <Link to='/catalog?gender=woman'>
                                            <li className='secondary'>
                                                <input type='checkbox' id='woman' />
                                                <span>Жіноча</span>
                                            </li>
                                        </Link>
                                    </ul>
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='category' onClick={(e) => this.clickAnimation(e)}><span id='category'>КАТЕГОРІЯ</span></button>
                                    <ul className='hidden' id='category-menu'>
                                        <li className='secondary'>
                                            <input type='checkbox' id='weather' />
                                            <span>Одежа</span>
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='shoes' />
                                            <span>Взуття</span>
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='accessories' />
                                            <span>Аксесуари</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='brand' onClick={(e) => this.clickAnimation(e)}><span>БРЕНД</span></button>
                                    <ul className='hidden' id='brand-menu'>
                                        <li className='secondary'>
                                            <input type='checkbox' id='nike' />
                                            <span>Nike</span>
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='adidas' />
                                            <span>Adidas</span>
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='puma' />
                                            <span>Puma</span>
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='off-white' />
                                            <span>Off-white</span>
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='new-balance' />
                                            <span>NewBalance</span>
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='asics' />
                                            <span>Asics</span>
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='baterson' />
                                            <span>Baterson</span>
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='corsar' />
                                            <span>Corsar</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='color' onClick={(e) => this.clickAnimation(e)}><span>КОЛІР</span></button>
                                    <ul className='hidden' id='color-menu'>
                                        <li className='secondary'>
                                            <input type='checkbox' id='black' title='чорний'
                                                style={{ background: 'black' }} />
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='white' title='білий'
                                                style={{ backgroundImage: 'linear-gradient(to right, rgb(233,235,237) 50%, white 50%)' }} />
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='grey' title='сірий'
                                                style={{ backgroundImage: 'linear-gradient(to right, rgb(215,219,223) 50%, gray 50%)' }} />
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='blue' title='синій'
                                                style={{ backgroundImage: 'linear-gradient(to right, rgb(43,58,255)50%, rgb(23,40,255) 50%)' }} />
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='red' title='червоний'
                                                style={{ backgroundImage: 'linear-gradient(to right, rgb(255,55,55)50%, rgb(255,0,0) 50%)' }} />
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='yellow' title='жовтий'
                                                style={{ backgroundImage: 'linear-gradient(to right, rgb(252,255,125)50%, rgb(249,255,0) 50%)' }} />
                                        </li>
                                    </ul>
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='size' onClick={(e) => this.clickAnimation(e)}><span>РОЗМІР</span></button>
                                    <ul className='hidden' id='size-menu'>
                                        <Row>
                                            {this.state.sizeTable.map((value, index, array) =>
                                                this.createSizeTable(value, index)
                                            )}
                                        </Row>
                                    </ul>
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='price' onClick={(e) => this.clickAnimation(e)}><span>ЦІНА</span></button>
                                    <div className='price-menu hidden' id='price-menu'>
                                        <InputRange
                                            maxValue={3700}
                                            minValue={115}
                                            step={25}
                                            value={this.state.slidervalue}
                                            onChange={slidervalue => this.setState({ slidervalue })}
                                            id='slide' />
                                        <input type='text' id='min' value={this.state.slidervalue.min}
                                            onChange={() => this.changePrice()} />
                                        <span>UAH</span>
                                        <input type='text' id='max' value={this.state.slidervalue.max}
                                            onChange={() => this.changePrice()} />
                                        <span>UAH</span>
                                        <Link to={`/&pmin=${this.state.slidervalue.min}&pmax=${this.state.slidervalue.max}`}>
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={10}>
                        <div className='products'>
                            <Row>
                                 {products.map((value, index, array) =>
                                            <Product product={value} key={index}/>)}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products
    };
}
export default connect(mapStateToProps, { getProducts })(ListProducts);